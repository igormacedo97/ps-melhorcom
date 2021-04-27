import React, { useEffect, useState } from 'react';


import Main from '../components/Main';

import ProductsTable from '../components/ProductsTable'

import apiClient from '../services/api';




export default function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await apiClient.get('/');
      setProducts(response.data);
    } catch (err) {
      setProducts([]);
    }
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <Main>
      <ProductsTable products={products} />
    </Main>
  );
}


