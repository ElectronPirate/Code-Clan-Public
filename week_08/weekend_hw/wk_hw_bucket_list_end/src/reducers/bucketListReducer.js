const bucketListReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_COUNTRY':
      return [...state, action.country]
    case 'TOGGLE_VISITED_STATUS':
      return state.map(item => {
        if (action.countryName === item.name) item.visited = !item.visited;
        return item;
      })
    default:
      return state;
  }
}

export default bucketListReducer;
