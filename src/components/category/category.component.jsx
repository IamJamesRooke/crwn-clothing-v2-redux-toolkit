import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";
import Spinner from "../spinner/spinner.component.jsx";

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/category.selector.js";

import { CategoryContainer, Title } from "./category.styles.jsx";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('Category component - category:', category);
    console.log('Category component - categoriesMap:', categoriesMap);
    console.log('Category component - isLoading:', isLoading);
    
    if (categoriesMap[category]) {
      console.log('Setting products for category:', category, categoriesMap[category]);
      setProducts(categoriesMap[category]);
    } else {
      console.log('No products found for category:', category);
    }
  }, [category, categoriesMap]);

  return (
    <>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </>
  );
};

export default Category;
