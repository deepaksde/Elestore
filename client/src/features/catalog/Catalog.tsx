import { Fragment, useEffect, useState } from 'react';
import agents from '../../app/api/agents';
import Loading from '../../app/layouts/Loading';
import { Product } from '../../app/models/product';
import ProductList from './ProductList';

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    agents.Catalog.list()
      .then((products) => setProducts(products))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading message='Loading Products...' />;

  return (
    <Fragment>
      <ProductList products={products} />
    </Fragment>
  );
}
