import { bookData } from '../data/BookData';

const INITIAL_STATE = {
  bookList: bookData,
  cartList: []
};

export const reducer = (state = INITIAL_STATE, action) => {
  console.log('action', action)
  switch(action.type) {
    case "ADD_BOOK_TO_CARD":
      return {...state, cartList: [ ...state.cartList, action.payload]}
    case "REMOVE_BOOK_TO_CARD":
      return {...state, cartList: state.cartList.filter(product => product.id !== action.payload.id )}
    default:
      return state;
  }
} 


