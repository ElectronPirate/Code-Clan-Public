import { connect } from "react-redux";
import CustomerList from "./CustomerList.js";

const mapStateToProps = state => {
  return {
    customers: state
  };
};

export default connect(
  mapStateToProps,
  null
)(CustomerList);
