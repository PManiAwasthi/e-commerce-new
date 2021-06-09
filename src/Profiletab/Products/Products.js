import React from 'react';
import Product from './Product';
import { useStateValue } from "../../StateProvider";

function Products() {
  const [{ products}, dispatch] = useStateValue();
    return (
        <div>
          {products.map(item => (
            <Product
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
    )
}

export default Products