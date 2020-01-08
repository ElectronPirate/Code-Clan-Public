const animalsReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ANIMAL':
      return [action.animal, ...state]
    case 'REMOVE_ANIMAL':
      return [...state.slice(0, action.animalIndex),
        ...state.slice(action.animalIndex + 1)]
    default:
      return state
  };
};

export default animalsReducer;
