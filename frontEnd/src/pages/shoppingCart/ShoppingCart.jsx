import React from "react";
import CartActions from "../../components/cartsComponents/CartActions";
import CheckOutBtn from "../../components/checkoutsComponents/CheckoutBtn";

function ShoppingCart() {
  return (
    <div>
      <h1>Shopping Cart</h1>
    <div>
      <CartActions  />
      <div>
      <CheckOutBtn />
</div>
    </div></div>
  );
}

export default ShoppingCart;
