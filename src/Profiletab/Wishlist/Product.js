import React from 'react';
import './Product.css';
import { useStateValues } from "../../StateProvider";
import {firestore} from "../../firebase/util";
var count = 0;
//add rating to the parameter if required
function CheckoutProduct({ id, image, title, price, hideButton }) {
    const [{ wishlist,user }, dispatch] = useStateValues();

//    const removeFromWishlist = () => {
//         // remove the item from the basket
//         db.collection("userinfo").doc(user.uid).collection('wishlist').where("id","==",id).get().then(function(snapshot){
//             snapshot.docs.forEach(doc => {
//                 if(count==0){
//                     doc.ref.delete();
//                 }
//                 count = count+1;
                
//             });
//         })
//         count=0;
//         dispatch({
//             type: 'REMOVE_FROM_WISHLIST',
//             id: id,
//         })
//     }

    return (
        <div className='Product'>
            <img className='Product__image' src={image} />

            <div className='Product__info'>
                <p className='Product__title'>{title}</p>
                <p className="Product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                {/* <div className="Product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div> */}
                {!hideButton && (
                    <button >Remove from Wishlist</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
