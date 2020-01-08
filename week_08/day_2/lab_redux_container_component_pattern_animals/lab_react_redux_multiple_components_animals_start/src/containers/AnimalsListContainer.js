import { connect } from 'react-redux';
import AnimalsList from '../components/AnimalsList';

const mapStateToProps = (state) => {
  return {
    animals: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeAnimal: (animalIndex) => {
      dispatch({
        type: 'REMOVE_ANIMAL',
        animalIndex
      })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnimalsList);
