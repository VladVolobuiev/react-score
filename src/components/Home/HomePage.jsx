import { Container, CardGroup } from 'semantic-ui-react';
import s from './HomePage.module.css';
import HomePageSecondaryMenu from './HomePageSecondaryMenu';
import React from 'react';
import HomePageMenuContainer from './HomePageMenuContainer';
import ProductCardContainer from './CardContainer';
// import axios from 'axios';

class HomePage extends React.Component {
  state = this.props.items;
  // componentWillMount() {
  //   const { setItems } = this.props;
  //   axios.get('../TestItems.json').then(({ data }) => {
  //     setItems(data);
  //   });
  // }
  // homePageMenu = (<HomePageMenuContainer />);
  render() {
    return (
      <div>
        <HomePageMenuContainer />

        {/* {homePageMenu} */}
        <HomePageSecondaryMenu />
        <Container className={s.home_wrapper}>
          <CardGroup itemsPerRow={4}>
            {this.state.items.map((m) => {
              return (
                <div key={m.id}>
                  <ul>
                    <ProductCardContainer
                      id={m.id}
                      price={m.price}
                      color={m.color}
                    />
                  </ul>
                </div>
              );
            })}
          </CardGroup>
        </Container>
      </div>
    );
  }
}

// const HomePage = (props) => {
//   let state = props.items;
//   let homePageMenu = <HomePageMenuContainer />;
//   let storeElements = state.items.map((m) => {
//     return (
//       <div key={m.id}>
//         <ul>
//           <ProductCardContainer id={m.id} price={m.price} color={m.color} />
//         </ul>
//       </div>
//     );
//   });
//   return (
//     <div>
//       {homePageMenu}
//       <HomePageSecondaryMenu />
//       <Container className={s.home_wrapper}>
//         <CardGroup itemsPerRow={4}>{storeElements}</CardGroup>
//       </Container>
//     </div>
//   );
// };

export default HomePage;
