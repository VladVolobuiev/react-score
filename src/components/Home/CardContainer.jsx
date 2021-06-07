import { connect } from 'react-redux';
import * as statesActions from '../../Redux/cardRed';
import { bindActionCreators } from 'redux';
import ProductCard from './Card';

let mapStateToProps = ({ cardRed }, { id }) => {
  return {
    addedCount: cardRed.items.reduce(
      (count, tShirt) => count + (tShirt.id === id ? 1 : 0),
      0
    ),
  };
};
let mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(statesActions, dispatch),
});
const ProductCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCard);
export default ProductCardContainer;
