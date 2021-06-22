import React from 'react'
import './wishlistView.scss'
import{useHistory} from "react-router-dom"
import { useSelector} from 'react-redux'
import {selectWishlistItems,selectWishlistTotal} from './../../Redux/Wishlist/wishlist.selectors'
import {createStructuredSelector } from 'reselect'
import ItemWishlist from './Item/item'

const mapState = createStructuredSelector({
    wishlistItems : selectWishlistItems,
    total : selectWishlistTotal

})


const WishlistView =({}) => {
    const history = useHistory();

    const { wishlistItems ,total} = useSelector(mapState);
    return(
        <div className="checkout">
           
            <h1>
                Wishlist
            </h1>
            <div className="cart">
                {wishlistItems.length>0 ?(
                    
               
                <table border="0" cellPadding="0" cellSpacing="0">
                    <tbody>
                        <tr>
                            <table className="checkoutTable" border="0" cellPadding="10" cellSpacing="0">
                                <tbody>
                                     <tr>
                                        <th>
                                            Products
                                        </th>
                                        <th>
                                           Description
                                        </th>
                                        <th>
                                            Quantity
                                        </th>
                                        <th>
                                            Price
                                        </th>
                                        <th>
                                            Remove
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </tr>
                        <tr>
                            <table border="0" cellSpacing="0" cellPadding="0">
                                <tbody>
                                 {wishlistItems.map((item,pos)=>{
                                     return(
                                         <tr key={pos}>
                                             <td>
                                                <ItemWishlist{...item}/><br/>
                                             </td>
                                         </tr>
                                     )
                                 })}
                                </tbody>
                            </table>
                            <tr>

                                 <table align="right" border="0" cellSpacing="0" cellPadding="0">
                                     <tbody>
                                         <tr align="left">
                                             <td>
                                                 <h3>
                                                     Total : ₹{total}
                                                 </h3>
                                             </td>  
                                         </tr>
                                         <tr>
                                                <table className="cartBtns"  border="0" cellPadding="10" cellSpacing="0">
                                                        <tbody>
                                                            <tr>
                                                                 <td>
                                                                     <button  className="btnContinue" onClick={() => history.goBack()}> Continue Shopping</button>
                                                                </td>
                                                                 <td>
                                                                     <button className="btnContinue" onClick={() => history.push('/payment') }>Checkout</button>
                                                                </td>
                                                            </tr>
                                                        </tbody>

                                                </table>
                                         </tr>
                                     </tbody>


                                 </table>


                            </tr>

                        </tr>
                    </tbody>

                </table>
                ):(<p>Cart is Empty</p>)}
            </div>
        </div>
    )
}
export default WishlistView;
