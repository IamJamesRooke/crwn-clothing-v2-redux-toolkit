import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../../components/category/category.component';
import { fetchCategoriesStart } from '../../store/categories/category.action';

const Shop = () => {

    const dispatch = useDispatch();

    useEffect(() =>{
      console.log('Shop component - dispatching fetchCategoriesStart');
      dispatch(fetchCategoriesStart())
    }, [dispatch]) 


  return (
    <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category/>} />
    </Routes>
  );
};

export default Shop;
