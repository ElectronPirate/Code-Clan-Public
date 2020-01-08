import { connect } from 'react-redux';
import BreedInput from './BreedInput';

const mapDispatchToProps = (dispatch) => {
  return ({
    onBreedFormSubmit: (breed) => {
      dispatch(() => {
        fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(res => res.json())
        .then(dogData => {
          if (dogData.status === 'success') {
            return dispatch({
              type: 'ADD_PHOTO',
              dogPhoto: dogData.message
            });
          } else {
            return dispatch({
              type: 'NONE_FOUND'
            });
          }
        })
      })
    },
    resetNotFoundMessage: () => {
      dispatch({
        type: 'RESET_NONE_FOUND'
      })
    }
  })
}

export default connect(null, mapDispatchToProps)(BreedInput);
