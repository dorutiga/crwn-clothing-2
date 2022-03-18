import { useNavigate } from "react-router-dom";
import "./category.jsx";
import { BackgroundImage, Body, CategoryContainer } from "./category.jsx";

const CategoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;

  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  return (
    <CategoryContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title.toUpperCase()}</h2>
        <p>Buy Now</p>
      </Body>
    </CategoryContainer>
  );
};
export default CategoryItem;
