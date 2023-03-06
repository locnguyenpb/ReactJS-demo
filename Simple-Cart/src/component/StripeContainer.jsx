import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Cart from "./Cart";

const PUBLIC_KEY =
  "pk_test_51MgfsZFNcLSktezpld7ZCc8cri7M7wCZs3mvSAY59eGC1PyOs3HmJ2AChWcir3qR7oltevxxzFQ6iP841sQHSUne00HQAlsnbM";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <Cart />
    </Elements>
  );
}
