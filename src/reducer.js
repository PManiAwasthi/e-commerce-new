export const myInitialStateValues = {
 wishlist:[],
 user:null,
 products:[],
 orders:[],
 initialValues:{}
};
const myreducernew = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_ORDERS":
      return{
        ...state,
        orders: [...state.orders,action.item],
      };
    case "PROFILE_UPDATED":
      return{
        
      };
    case "CLEAR_ORDERS":
      return{
        ...state,
        orders: []
      }
      case "CLEAR_PRODUCTS":
      return{
        ...state,
        products: []
      }
      case "CLEAR_WISHLIST":
      return{
        ...state,
        wishlist: []
      }
    case "ADD_TO_PRODUCTS":
      return{
        ...state,
        products: [...state.products,action.item],
        
      };
    case "ADD_TO_WISHLIST":
        return{
          ...state,
          wishlist: [...state.wishlist,action.item],
        };
    case "REMOVE_FROM_ORDERS":
          const index_orders = state.orders.findIndex(
            (basketItem) => basketItem.id === action.id
          );
          let newBasket = [...state.orders];
    
          if (index_orders >= 0) {
            newBasket.splice(index_orders, 1);
          } else {
            console.warn(
              `Cant remove product (id: ${action.id}) as its not in basket!`
            )
          }

    
          return {
            ...state,
            orders: newBasket
          };
    case "REMOVE_FROM_PRODUCTS":
            const index_products = state.products.findIndex(
              (basketItem) => basketItem.id === action.id
            );
            let newproducts = [...state.products];
      
            if (index_products >= 0) {
              newproducts.splice(index_products, 1);
      
            } else {
              console.warn(
                `Cant remove product (id: ${action.id}) as its not in basket!`
              )
            }
      
            return {
              ...state,
              products: newproducts
            };
    case "REMOVE_FROM_WISHLIST":
              const index_wishlist = state.wishlist.findIndex(
                (basketItem) => basketItem.id === action.id
              );
              let newwishlist = [...state.wishlist];
        
              if (index_wishlist >= 0) {
                newwishlist.splice(index_wishlist, 1);
        
              } else {
                console.warn(
                  `Cant remove product (id: ${action.id}) as its not in basket!`
                )
              }
        
              return {
                ...state,
                wishlist: newwishlist
              }
      case "SET_USER":
                return {
                  ...state,
                  user: action.user
                }
      case "GET_INTIALVALUES":
        return{
          ...state,
          initialValues:action.newvalues,
        }
    default:
      return state;
  }
};

export default myreducernew;
