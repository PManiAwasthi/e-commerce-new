export const existingWishlistItem = ({
    prevWishlistItems,
    nextWishlistItem
  }) => {
    return prevWishlistItems.find(
        wishlistItem => wishlistItem.documentID === nextWishlistItem.documentID
    );
  };
  
export const handleAddToWishlist = ({
    prevWishlistItems,
    nextWishlistItem
  }) => {
    const quantityIncrement = 1;
    const wishlistItemExists = existingWishlistItem({ prevWishlistItems, nextWishlistItem });
  
    if (wishlistItemExists) {
      return prevWishlistItems.map(wishlistItem =>
        wishlistItem.documentID == nextWishlistItem.documentID
          ? {
            ...wishlistItem,
            // quantity: wishlistItem.quantity + quantityIncrement
          } : wishlistItem
      );
    }
    return [
        ...prevWishlistItems,
        {
          ...nextWishlistItem,
          quantity: quantityIncrement
        }
      ];
};

export const handleRemoveWishlistItem = ({
  prevWishlistItems,
  wishlistItemtoRemove
  
}) =>{
  return prevWishlistItems.filter(item => item.documentID !==wishlistItemtoRemove.documentID) ;
};

export const handleReduseWishlistItem = ({
   prevWishlistItems,
   wishlistItemToReduce
})=>{

  const existingWishlistItem = prevWishlistItems.find(wishlistItem => wishlistItem.documentID ===wishlistItemToReduce.documentID);
  

  if(existingWishlistItem.quantity===1){
    return prevWishlistItems.filter(
      wishlistItem => wishlistItem.documentID !== existingWishlistItem.documentID
    );
  }

  return prevWishlistItems.map(wishlistItem =>
    wishlistItem.documentID === existingWishlistItem.documentID?
    {
      ...wishlistItem,
      quantity: wishlistItem.quantity -1
    }:wishlistItem)
}