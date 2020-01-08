export const photosReducer = (state = {}, action) => {
  switch(action.type) {
    case 'TOGGLE_LIKE_PHOTO':
      const newPhotosData = state.photosData.map((photo) => {
        if (photo.id !== Number(action.id)) {
         return photo;
        } else {
         return { ...photo, liked: !photo.liked };
        }
      })
      return { ...state, photosData: newPhotosData }
    case 'SET_CATEGORY':
      return { ...state, category: action.category }
    default:
      return state;
  }
}
