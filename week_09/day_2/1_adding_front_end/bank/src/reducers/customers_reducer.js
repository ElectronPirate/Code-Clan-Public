const customerListReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_CUSTOMER_DATA":
      return [...state, ...action.customers];
    default:
      return state;
  }
};

export default customerListReducer;
