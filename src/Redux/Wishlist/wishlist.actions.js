import wishlistTypes from './wishlist.types'


export const addProductWishlist = (nextWishlistItem) =>({
    type: wishlistTypes.ADD_TO_CART,
    payload: nextWishlistItem
});

export const removeWishlistItem= (wishlistItem) =>({
    type:wishlistTypes.REMOVE_WISHLIST_ITEM,
    payload: wishlistItem
});

export const reduceWishlistItem  = ( wishlistItem) =>({
    type: wishlistTypes.REDUCE_WISHLIST_ITEM,
    payload: wishlistItem
});

export const clearWishlist = () =>({
    type: wishlistTypes.CLEAR_WISHLIST
})
