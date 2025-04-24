import { useEffect, useState } from 'react';
import { Main } from '../../layout/Main/Main';
import { Card } from '../../layout/Card/Card';

export const Home = () => {
  const [products, setProducts] = useState([]);
  const URL = 'https://fakestoreapi.com/products';

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []); 

  return (
    <Main style="w-full h-screen flex flex-col items-center p-4">
      <h1 className="text-xl font-bold mb-4">Productos disponibles</h1>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
          products.map(product => (
            <Card key={product.id} {...product} />
          ))
        }
      </section>
    </Main>
  );
}
