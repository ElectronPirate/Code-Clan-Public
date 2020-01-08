const beerReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return [...state, ...action.beersData];
    default:
      return state;
  }
};

export default beerReducer;
