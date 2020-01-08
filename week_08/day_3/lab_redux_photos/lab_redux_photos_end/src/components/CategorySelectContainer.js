import { connect } from 'react-redux';
import CategorySelect from './CategorySelect';

const getUniqueCategoriesList = (state) => {
  return state.photosData
    .map(photo => photo.category)
    .filter((cat, index, array) => array.indexOf(cat) === index)
};

const mapStateToProps = (state) => ({
  categories: getUniqueCategoriesList(state)
});

const mapDispatchToProps = (dispatch) => ({
  categorySelected: (category) => {
    dispatch({
      type: 'SET_CATEGORY',
      category
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CategorySelect);
