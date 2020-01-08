const dogsReducer = (state = { photos: [] }, action) => {
  switch(action.type) {
    case 'ADD_PHOTO':
      return { ...state, photos: [action.dogPhoto, ...state.photos] }
    case 'NONE_FOUND':
      return { ...state, notFound: true }
    case 'RESET_NONE_FOUND':
      return { ...state, notFound: false }
    default:
      return state
  }
};

export default dogsReducer;
