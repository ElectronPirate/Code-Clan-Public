import { connect } from 'react-redux';
import BucketList from './BucketList.js';

const filterList = (state) => {
  return state.bucketList.filter((country) => country.visited);
}

const mapStateToProps = (state) => {
  return {
    bucketList: filterList(state)
  };
};

const mapDispatchToProps = dispatch => ({
  visitedStatusChange(countryName) {
    dispatch({
      type: 'TOGGLE_VISITED_STATUS',
      countryName
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BucketList);
