import { connect } from 'react-redux';
import PhotoList from './PhotoList';

const filterData = (state) => {
  if (state.category === 'All') {
    return state.photosData;
  } else {
    return state.photosData.filter(photo => {
      return photo.category === state.category;
    });
  }
}

const mapStateToProps = (state) => ({
  photosData: filterData(state)
});

const mapDispatchToProps = (dispatch) => ({
  photoLiked: (id) => {
    dispatch({
      type: 'TOGGLE_LIKE_PHOTO',
      id: id
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoList);
