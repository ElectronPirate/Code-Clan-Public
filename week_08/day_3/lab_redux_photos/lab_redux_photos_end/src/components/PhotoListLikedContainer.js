import { connect } from 'react-redux';
import PhotoList from './PhotoList';

const mapStateToProps = (state) => ({
  photosData: state.photosData.filter((photo) => photo.liked)
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
