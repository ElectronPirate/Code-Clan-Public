import { connect } from 'react-redux';
import BeersList from './BeersList';

const mapStateToProps = (state) => {
  return {
    beersData: state
  };
};

export default connect(mapStateToProps)(BeersList);
