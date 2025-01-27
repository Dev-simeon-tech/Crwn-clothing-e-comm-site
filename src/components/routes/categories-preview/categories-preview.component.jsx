import { Fragment, useContext } from "react";

import { CategoriesContext } from "../../../context/categories.context";
import CategoryPreview from "../../category-preview/category-preview.component";

function CategoriesPreview() {
  const { categoryMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoryMap).map((title) => {
        const products = categoryMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
}

export default CategoriesPreview;
