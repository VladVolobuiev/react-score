import React from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setFilter } from '../../Redux/items';
// import * as statesActions from '../../Redux/items';
// import { bindActionCreators } from 'redux';

const HomePageSecondaryMenu = ({ setFilter, filterBy }) => {
  // debugger;
  return (
    <Menu secondary>
      <Menu.Item
        // name="Home"
        active={filterBy === 'Home'}
        onClick={setFilter.bind(this, 'Home')}
      >
        Home
      </Menu.Item>
      <Menu.Item
        // name="Expensive"
        active={filterBy === 'Expensive'}
        onClick={setFilter.bind(this, 'Expensive')}
      >
        Price expensive
      </Menu.Item>
      <Menu.Item
        // name="Cheap"
        active={filterBy === 'Cheap'}
        onClick={setFilter.bind(this, 'Cheap')}
      >
        Price cheap
      </Menu.Item>
      {/*
      <Menu.Menu position="right">
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
        <Menu.Item
          name="logout"
          active={filterBy === 'logout'}
          onClick={setFilter.bind(this, 'logout')}
        >
          logout
        </Menu.Item>
      </Menu.Menu> */}
    </Menu>
  );
};

// class HomePageSecondaryMenu extends React.Component {
//   state = { activeItem: 'Home' };

//   handleItemClick = (e, { name }) => {
//     const { setFilter } = this.props;
//     this.setState({ activeItem: name });
//     setFilter(name);
//   };

//   render() {
//     const { activeItem } = this.state;

//     return (
//       <Menu secondary>
//         <Menu.Item
//           name="Home"
//           active={activeItem === 'Home'}
//           onClick={this.handleItemClick}
//         >
//           Home
//         </Menu.Item>
//         <Menu.Item
//           name="Expensive"
//           active={activeItem === 'Expensive'}
//           onClick={this.handleItemClick}
//         >
//           Price expensive
//         </Menu.Item>
//         <Menu.Item
//           name="Cheap"
//           active={activeItem === 'Cheap'}
//           onClick={this.handleItemClick}
//         >
//           Price cheap
//         </Menu.Item>

//         {/* <Menu.Menu position="right">
//           <Menu.Item>
//             <Input icon="search" placeholder="Search..." />
//           </Menu.Item>
//           <Menu.Item
//             name="logout"
//             active={activeItem === 'logout'}
//             onClick={this.handleItemClick}
//           >
//             logout
//           </Menu.Item>
//         </Menu.Menu> */}
//       </Menu>
//     );
//   }
// }
let mapStateToProps = (state) => {
  return {
    filterBy: state.filterBy,
  };
};
export default connect(mapStateToProps, { setFilter })(HomePageSecondaryMenu);
