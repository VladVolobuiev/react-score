import { connect } from 'react-redux';
import HomePageMenu from './HomePageMenu';
import * as statesActions from '../../Redux/cardRed';
import { bindActionCreators } from 'redux';

let mapStateToProps = ({ cardRed }) => {
  return {
    totalPrice: cardRed.items.reduce(
      (total, tShirt) => total + tShirt.price,
      0
    ),
    count: cardRed.items.length,
  };
};
let mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(statesActions, dispatch),
});
const HomePageMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageMenu);
export default HomePageMenuContainer;
