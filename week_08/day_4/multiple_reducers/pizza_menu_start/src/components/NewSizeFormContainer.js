import { connect } from 'react-redux';
import NewSizeForm from './NewSizeForm.js';

const mapDispatchToProps = (dispatch) => ({
  submitSize(newSize) {
    dispatch({
      type: 'ADD_SIZE',
      newSize
    });
  }
});

export default connect(null, mapDispatchToProps)(NewSizeForm);
