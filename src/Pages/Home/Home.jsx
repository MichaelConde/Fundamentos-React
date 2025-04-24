import { useEffect, useState } from 'react';
import { Main } from '../../layout/Main/Main';
import { Card } from '../../layout/Card/Card';
import { InputFilter } from '../../components/InputFilter/InputFilter';

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [contentInput, setContentInput] = useState("");
  const URL = 'https://fakestoreapi.com/products';

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const SearchProduct = async (e) => {
    const value = e.target.value;
    setContentInput(value);

    if (value === "") {
      const response = await fetch(URL);
      const data = await response.json();
      setProducts(data);
      return;
    }

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setProducts(filtered);
  };

  return (
    <Main style="w-full h-screen flex flex-col items-center p-4">
      <InputFilter value={contentInput} onChange={SearchProduct} />
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
