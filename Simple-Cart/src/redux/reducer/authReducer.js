const INITIAL_STATE = {
  isSignedIn: false,
  userId: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isSignedIn: true, userId: action.payload.id };
    case "LOGOUT":
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};

export default authReducer;
