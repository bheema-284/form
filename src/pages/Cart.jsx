import React, { useContext, useEffect } from 'react';
// import { connect } from 'react-redux';

import ShopContext from '../context/shop-context';
import MainNavigation from '../components/MainNavigation';
// import { removeProductFromCart } from '../store/actions';
import './Cart.css';

const CartPage = (props) => {
  const context = useContext(ShopContext);

  useEffect(() => {
    console.log(context);
  }, []);

  return (
    <React.Fragment>
      <MainNavigation
        cartItemNumber={context.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)}
      />
      <main>
        {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
        {context.cart.map((cartItem) => (
          <div key={cartItem.id}>
            <div>
              <div>
                <div className="data">
                  <div className="imgdiv">
                    <img src={cartItem.image} alt="" />
                  </div>
                  <div className="contdiv">
                    <strong>Title:{cartItem.title}</strong>
                    <h3>Price: $ {cartItem.price}</h3>
                    <strong>Category: {cartItem.category}</strong>
                    <h4>Rating: {cartItem.rating.rate}</h4>
                  </div>
                  <div>
                    <button
                      onClick={context.removeProductFromCart.bind(
                        this,
                        cartItem.id,
                      )}>
                      Remove from Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
    </React.Fragment>
  );
};

// const mapStateToProps = state => {
//   return {
//     cartItems: state.cart,
//     cartItemCount: state.cart.reduce((count, curItem) => {
//       return count + curItem.quantity;
//     }, 0)
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     removeProductFromCart: id => dispatch(removeProductFromCart(id))
//   };
// };

export default CartPage;
