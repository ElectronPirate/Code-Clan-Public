import { connect } from 'react-redux';
import TotalAnimals from './TotalAnimals';

const mapStateToProps = (state) => ({
  totalAnimal: state.length
});

export default connect(mapStateToProps)(TotalAnimals);
