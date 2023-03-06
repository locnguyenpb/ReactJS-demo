// Add Item to Cart
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// Delete Item from Cart
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};

// Clear Cart
export const clearCart = () => {
  return {
    type: "CLEARCART",
    payload: null,
  };
};

// Login
export const login = (userInfo) => {
  return {
    type: "LOGIN",
    payload: userInfo,
  };
};

// Logout
export const logout = () => {
  return {
    type: "LOGOUT",
    payload: null,
  };
};
