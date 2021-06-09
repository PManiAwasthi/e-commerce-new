import React,{useEffect} from 'react'
import Product from './Product';
import { useStateValue } from "../../StateProvider";
import {db} from "../../firebase";

function Orders() {
    const [{ orders,user}, dispatch] = useStateValue();

    return (<div>
      {orders.map(item => (
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

export default Orders
