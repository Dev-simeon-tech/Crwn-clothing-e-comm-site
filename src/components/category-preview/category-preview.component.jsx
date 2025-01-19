import { Link } from "react-router";

import "./category-preview.styles.scss";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <Link className='title' to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className='preview'>
        {products
          .filter((el, idx) => idx < 4)
          .map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
