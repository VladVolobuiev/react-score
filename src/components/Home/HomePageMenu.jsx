// import s from './HomePage.module.css';
import { Menu } from 'semantic-ui-react';
import React from 'react';

const HomePageMenu = (props) => {
  // const state = {};
  const handleItemClick = ({ name }) => {};

  return (
    <Menu>
      <Menu.Item
        name="catalog"
        // active={activeItem === 'catalog'}
        onClick={handleItemClick}
      >
        Catalog
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item
          name="basket"
          // active={activeItem === 'basket'}
          onClick={handleItemClick}
        >
          Basket: &nbsp;<b>{props.totalPrice}</b>&nbsp;
        </Menu.Item>
        <Menu.Item
          name="summary"
          // active={activeItem === 'summary'}
          onClick={handleItemClick}
        >
          Summary: &nbsp;<b>{props.count}</b>&nbsp;uah
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

// class HomePageMenu extends React.Component {
//   state = {};
//   handleItemClick = ({ name }) => this.setState({ activeItem: name });
//   render() {
//     const { activeItem } = this.state;
//     const { totalPrice } = this.props;
//     return (
//       <Menu>
//         <Menu.Item
//           name="catalog"
//           active={activeItem === 'catalog'}
//           onClick={this.handleItemClick}
//         >
//           Catalog
//         </Menu.Item>

//         <Menu.Menu position="right">
//           <Menu.Item
//             name="basket"
//             active={activeItem === 'basket'}
//             onClick={this.handleItemClick}
//           >
//             Basket &nbsp;<b>{totalPrice}</b>&nbsp;
//           </Menu.Item>
//           <Menu.Item
//             name="summary"
//             active={activeItem === 'summary'}
//             onClick={this.handleItemClick}
//           >
//             Summary: &nbsp;<b>{this.props.count}</b>&nbsp;uah
//           </Menu.Item>
//         </Menu.Menu>
//       </Menu>
//     );
//   }
// }

export default HomePageMenu;
