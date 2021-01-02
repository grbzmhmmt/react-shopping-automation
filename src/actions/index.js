export const AddBookToCard = (book) => {
  return {
    type: "ADD_BOOK_TO_CARD",
    payload: book
  }
};

export const RemoveBookToCard = (product) => {
  return {
    type: "REMOVE_BOOK_TO_CARD",
    payload: product
  }
}



