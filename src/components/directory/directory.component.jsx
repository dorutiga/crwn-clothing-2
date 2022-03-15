import "./directory.scss";
import CategoryItem from "../category-item/category.component";
const Directory = ({ categories }) => (
  <div className="categories-contaienr">
    {categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ))}
  </div>
);

export default Directory;
