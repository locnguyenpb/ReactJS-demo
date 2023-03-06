import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { delCart, addCart, clearCart } from "../redux/action";
import Modal from "./Modal";
import axios from "axios";

import "../static/css/cart.css";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const loginState = useSelector((state) => state.authReducer);
  const userCartState = state.filter(
    (item) => item.userId === loginState.userId
  );
  const dispatch = useDispatch();

  let delItem = useRef({});

  const [isOpenModal, setIsOpenModal] = useState(false);
  const totalPrice = userCartState
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price * currentValue.qty;
    }, 0)
    .toFixed(2);

  // Payment
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const element = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: element.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:4000/payment", {
          amount: Math.round(+totalPrice * 100), // "22.30"
          id,
        });

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);

          // Reset cart
          dispatch(clearCart());
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  const handleButton = (cartItem, type) => {
    if (type === "add") {
      if (cartItem.qty === 5) {
        throw new Error("Oops, You triggered Doomsday!");
      }
      dispatch(addCart(cartItem));
    } else {
      if (cartItem.qty === 1) {
        setIsOpenModal(true);
        delItem.current = { ...cartItem };
      } else {
        dispatch(delCart(cartItem));
      }
    }
  };

  function confirmDeleteItem(curItem) {
    setIsOpenModal(false);
    dispatch(delCart(curItem));
    delItem.current = {};
  }

  const cartItems = (cartItem) => {
    return (
      <div className="px-4 mt-3 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-4">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height={200}
                width={180}
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold">
                {cartItem.qty} x ${cartItem.price} = $
                {cartItem.qty * cartItem.price}
              </p>
              <button
                className="btn btn-outline-dark me-4"
                onClick={() => handleButton(cartItem, "delete")}
              >
                <i className="fa fa-minus"></i>
              </button>
              <button
                className="btn btn-outline-dark"
                onClick={() => handleButton(cartItem, "add")}
              >
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const total = () => {
    return (
      <div className="px-4 bg-light rounded-3">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-4">
              <label className="lead fw-bold">Total</label>
            </div>
            <div className="col-md-4">
              <label className="lead fw-bold">${totalPrice}</label>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {userCartState.length === 0 && emptyCart()}
      {userCartState.length !== 0 && userCartState.map(cartItems)}
      {userCartState.length !== 0 && total()}

      {!success ? (
        <form>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button className="pay-btn" onClick={handleSubmit}>
            Pay with Stripe
          </button>
        </form>
      ) : (
        <div>
          <h2>
            You just bought a sweet spatula congrats this is the best decision
            of your life
          </h2>
        </div>
      )}

      <Modal
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        onConfirm={() => confirmDeleteItem(delItem.current)}
      >
        <div>Do you want to delete this item from your cart?</div>
      </Modal>
    </>
  );
};

export default Cart;
