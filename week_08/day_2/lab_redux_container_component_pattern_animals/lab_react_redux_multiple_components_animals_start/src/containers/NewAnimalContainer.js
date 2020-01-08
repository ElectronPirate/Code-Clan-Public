import { connect } from 'react-redux';
import AnimalForm from '../components/AnimalForm.js';

const mapDispatchToProps = (dispatch) => {
  return {
    addAnimal: (animal) => {
      dispatch({
        type: 'ADD_ANIMAL',
        animal
      })
    }
  };
};

export default connect(null, mapDispatchToProps)(AnimalForm);
