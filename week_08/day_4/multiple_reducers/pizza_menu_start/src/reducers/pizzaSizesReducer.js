const pizzaSizesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_SIZE':
      console.log(action.newSize.dimension);
      return {
        ...state,
        [action.newSize.size]: action.newSize.dimension
      };
    default:
      return state;
  }
}

export default pizzaSizesReducer;
