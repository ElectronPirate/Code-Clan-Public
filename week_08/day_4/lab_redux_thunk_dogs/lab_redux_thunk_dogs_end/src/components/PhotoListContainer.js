import { connect } from 'react-redux';
import PhotoList from './PhotoList.js';

const mapStateToProps = (state) => ({
  photos: state.photos
});

export default connect(mapStateToProps)(PhotoList);
