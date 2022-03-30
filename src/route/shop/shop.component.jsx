import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { setCategories } from "../../store/categories/category.actions";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import CategoriesPreview from "../categories-preview/categories-preview";
import Category from "../category/category.component";

import "./shop.scss";
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoiesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments("categories");

      dispatch(setCategories(categoriesArray));
    };
    getCategoiesMap();
  }, [dispatch]);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
export default Shop;
