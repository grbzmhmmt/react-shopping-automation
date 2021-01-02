import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { RemoveBookToCard } from "../actions";
import { bookData } from "../data/BookData";

const Cart = (props) => {
  console.log(props)
  return (
    <div>
      <h2>
        <Link to="/">Kitap Listesi</Link> <span>Sepetim</span>
      </h2>

      <h3>Toplam Sepet Tutarı: &#8378;19.99</h3>
      {
        props.cartList.map(product => {
          return(
            <div className="book">
              <img
                src={product.image}
                alt={product.name}
              />
              <div>
                <h4>{product.name}</h4>
                <p>Author: {product.name}</p>
                <p>Price: &#8378;{product.price}</p>
                <p>Total: &#8378;19.99</p>
                <p>Sepetinizde bu kitaptan toplam 1 adet var.</p>
                <button>-</button>
                <button onClick={()=> props.RemoveBookToCard(product)}>Remove to cart</button>
                <button>+</button>
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
    cartList: state.cartList
  }
}


export default connect(mapStateToProps,{RemoveBookToCard})(Cart);