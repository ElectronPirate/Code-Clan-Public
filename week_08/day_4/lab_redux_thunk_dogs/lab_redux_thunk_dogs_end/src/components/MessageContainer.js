import { connect } from 'react-redux';
import Message from './Message.js';

const mapStateToProps = (state) => ({
  notFound: state.notFound
});

export default connect(mapStateToProps)(Message);
