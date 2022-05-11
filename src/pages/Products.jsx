import React from 'react';
// import { connect } from 'react-redux';

import ShopContext from '../context/shop-context';
import MainNavigation from '../components/MainNavigation';
// import { addProductToCart } from '../store/actions';
import './Products.css';

const ProductsPage = (props) => {
  return (
    <ShopContext.Consumer>
      {(context) => (
        <React.Fragment>
          <MainNavigation
            cartItemNumber={context.cart.reduce((count, curItem) => {
              return count + curItem.quantity;
            }, 0)}
          />
          <main className="products">
            {context.products.map((product) => (
              <div key={product.id}>
                <div>
                  <div className="data">
                    <div className="imgdiv">
                      <img src={product.image} alt="" />
                    </div>
                    <div className="contdiv">
                      <h3>Price: $ {product.price}</h3>
                      <strong>Category: {product.category}</strong>
                      <h4>Rating: {product.rating.rate}</h4>
                    </div>
                    <div>
                      <button
                        onClick={context.addProductToCart.bind(this, product)}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </main>
        </React.Fragment>
      )}
    </ShopContext.Consumer>
  );
};

// const mapStateToProps = state => {
//   return {
//     products: state.products,
//     cartItemCount: state.cart.reduce((count, curItem) => {
//       return count + curItem.quantity;
//     }, 0)
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     addProductToCart: product => dispatch(addProductToCart(product))
//   };
// };

export default ProductsPage;
