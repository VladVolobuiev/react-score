import React from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as productActions from '../../Redux/items';
import { bindActionCreators } from 'redux';

class HomePageSecondaryMenu extends React.Component {
  state = { activeItem: 'Home' };

  handleItemClick = (e, { name }) => {
    const { setFilter } = this.props;
    this.setState({ activeItem: name });
    setFilter(name);
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Menu.Item
          name="Home"
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>
        <Menu.Item
          name="Expensive"
          active={activeItem === 'Expensive'}
          onClick={this.handleItemClick}
        >
          Price expensive
        </Menu.Item>
        <Menu.Item
          name="Cheap"
          active={activeItem === 'Cheap'}
          onClick={this.handleItemClick}
        >
          Price cheap
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item
            name="logout"
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          >
            logout
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
let mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(productActions, dispatch),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageSecondaryMenu);
