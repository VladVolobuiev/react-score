// import s from './HomePage.module.css';
import { Menu } from 'semantic-ui-react';

import React from 'react';

class HomePageMenu extends React.Component {
  state = {};
  handleItemClick = ({ name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Menu>
        <Menu.Item
          name="catalog"
          active={activeItem === 'catalog'}
          onClick={this.handleItemClick}
        >
          Catalog
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
            name="basket"
            active={activeItem === 'basket'}
            onClick={this.handleItemClick}
          >
            Basket &nbsp;<b>0</b>&nbsp;
          </Menu.Item>
          <Menu.Item
            name="summary"
            active={activeItem === 'summary'}
            onClick={this.handleItemClick}
          >
            Summary: &nbsp;<b>0</b>&nbsp;uah
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default HomePageMenu;
