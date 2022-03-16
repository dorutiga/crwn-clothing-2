import SignUpForm from "../../components/sign-up-form/sign-up-form";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoolgeUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>hello</h1>
      <button onClick={logGoolgeUser}>Sign in with google</button>
      <SignUpForm />
    </div>
  );
};
export default SignIn;
