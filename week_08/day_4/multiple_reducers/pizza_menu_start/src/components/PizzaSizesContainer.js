import { connect } from 'react-redux';
import PizzaSizesList from './PizzaSizesList.js';

const mapStateToProps = (state) => {
  return {
    sizes: state.sizes
  }
};

export default connect(mapStateToProps)(PizzaSizesList);
