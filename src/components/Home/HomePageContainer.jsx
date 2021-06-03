import { connect } from 'react-redux';
import HomePage from './HomePage';

let mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const CardContainer = connect(mapStateToProps, {})(HomePage);
export default CardContainer;
