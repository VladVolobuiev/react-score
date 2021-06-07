import { connect } from 'react-redux';
import HomePage from './HomePage';
import * as statesActions from '../../Redux/items';
import { bindActionCreators } from 'redux';

let mapStateToProps = (state) => {
  return {
    filterBy: state.filterBy,
    items: state.items,
  };
};
let mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(statesActions, dispatch),
});
const CardContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage);
export default CardContainer;
