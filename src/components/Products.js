import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {AddBookToCard} from '../actions/index'

const Products = props => {
  console.log(props);
  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim</Link>
      </h2>
      {
        props.bookList.map(book => {
          return(
            <div className="book">
              <img
                src={book.image}
                alt={book.name}
              />
              <div>
                <h4>{book.name}</h4>
                <p>Author: {book.author}</p>
                <p>Price: &#8378; {book.price}</p>
                <button onClick={() => props.AddBookToCard(book)}>Add to cart</button>
              </div>
            </div>
          )
        })
      }
      
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bookList: state.bookList
  }
}


export default connect(mapStateToProps, {AddBookToCard})(Products);
