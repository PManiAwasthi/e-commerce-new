import React from 'react'
import {useDispatch} from "react-redux"
import {removeWishlistItem,addProductWishlist,reduceWishlistItem} from "./../.././../Redux/Wishlist/wishlist.actions"
const ItemWishlist = (product )=>{

   const dispatch = useDispatch( );
    const {
    productName,
     productThumbnail,
     productPrice,
     quantity,
     documentID}  = product;

     const handleRemoveWishlistItem =(documentID)=>{
        dispatch(
        removeWishlistItem(
            {documentID}
            )
        );

     }
     const handleAddProduct = (product)=>{
         dispatch(
             addProductWishlist(product)
         );
     }
     const handleReduceWishlistItem = (documentID)=>{
         dispatch(reduceWishlistItem({documentID})
         );
     }


    return(
        <table className="cartItem" border="0" cellPadding="10" cellSpacing="0">
            <tbody>
                <tr>
                    <td>
                        <img src={productThumbnail} alt="productImage"/>
                    </td>
                    <td>
                        {productName}
                    </td>
                    
                    <td>
                        ₹{productPrice}
                    </td>
                    <td align="center">
                        <span className="cartBtn" onClick={()=> handleRemoveWishlistItem(documentID)}>
                            X
                        </span>
                    </td>
                   
                </tr>
            </tbody>
        </table>
    )
}

export default ItemWishlist;