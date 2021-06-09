import React,{useEffect} from 'react';
import { useStateValues } from "../../StateProvider";
import Product from './Product';
import {useSelector,useDispatch } from 'react-redux';
import { auth,firestore } from '../../firebase/util';

const mapState = (state) =>({
  currentUser:    state.user.currentUser
});
const db = firestore;
function Wishlist() {
  const {currentUser,product} = useSelector(mapState);
    useEffect(async ()=>{
            
      if (currentUser) {
        firestore.collection("userinfo").doc(currentUser.userid).collection('wishlist')
          const result = await db.collection('userinfo')
    .doc(currentUser.userid).collection('wishlist').get().then(function(snapshot){
           snapshot.docs.forEach(doc => {
                // dispatch({
                //   type:"ADD_TO_WISHLIST",
                //   item:doc.data()
                // })
                
            });
    })
    }

  },[])
    return (
        <div>
            {/* {wishlist.map(item => (
            <Product
              id={item.id}
              title={item.productName}
              image={item.productThumbnail}
              price={item.productPrice}
            />
          ))} */}
        </div>
    )
}

export default Wishlist
