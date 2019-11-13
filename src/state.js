import React, {createContext, useContext, useReducer} from 'react';
import cogoToast from 'cogo-toast';

const initialState = {
  cart: JSON.parse(window.localStorage.getItem('kkCart')) || [],
  user: 'guest',
};
export const StateContext = createContext(initialState);

 const reducer = (state, action) => {
  switch (action.type) {
    case 'addToBag':
      var successMsg = 'Product has been added to your cart!';
    	for (var ind in state.cart) {
    		if (action.item.product._id == state.cart[ind].product._id) {
    			successMsg = 'Product quantity increased in cart!';
    			let newQuantity = action.item.quantity + state.cart[ind].quantity;
    			state.cart[ind].quantity = newQuantity;
				  window.localStorage.setItem('kkCart', JSON.stringify(state.cart));
          cogoToast.success(successMsg);
    			return state;
    		} 
    	}
      cogoToast.success(successMsg);

	  	const newCart = [...state.cart, action.item];
  		window.localStorage.setItem('kkCart', JSON.stringify(newCart));
  		return {
  			...state,
  			cart: newCart
  		};
    case 'emptyBag':
      window.localStorage.setItem('kkCart',null);
      return {
        ...state, 
        cart: [],
      };
    default:
      return state;
  }
};


export const StateProvider = ({ children }) =>{
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<StateContext.Provider value={useReducer(reducer, initialState)}>
    		{children}
		 </StateContext.Provider>
	)
}


export const useStateValue = () => useContext(StateContext);

