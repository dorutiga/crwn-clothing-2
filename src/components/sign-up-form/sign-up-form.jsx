import { useState } from "react";
import "./sign-up-form.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2> Don't have an account</h2>
      <span> Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          label="Display Name"
          value={displayName}
          required
          onChange={handleChange}
        />

        <FormInput
          value={email}
          label="Email"
          name="email"
          type="email"
          required
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          value={password}
          name="password"
          type="password"
          required
          onChange={handleChange}
        />

        <FormInput
          label="Confirm Password"
          value={confirmPassword}
          name="confirmPassword"
          type="password"
          required
          onChange={handleChange}
        />

        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};
export default SignUpForm;
