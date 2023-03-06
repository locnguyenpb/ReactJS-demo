const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      // Check Product already exists
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case "DELITEM":
      const prodExists = state.find((x) => x.id === product.id);
      if (prodExists.qty === 1) {
        return state.filter((x) => x.id !== prodExists.id);
      } else {
        return state.map((x) =>
          x.id === prodExists.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    case "CLEARCART":
      return (state = []);

    default:
      return state;
  }
};

export default handleCart;
