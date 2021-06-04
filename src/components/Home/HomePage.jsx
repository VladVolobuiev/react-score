import ProductCard from './Card';
import { Container, CardGroup } from 'semantic-ui-react';
import s from './HomePage.module.css';
import HomePageMenu from './HomePageMenu';
import HomePageSecondaryMenu from './HomePageSecondaryMenu';
//import { Col, Row } from 'react-bootstrap';

const HomePage = (props) => {
  let state = props.items;
  let homePageMenu = <HomePageMenu />;
  let storeElements = state.items.map((m) => {
    return (
      <div>
        <div key={m.id}>
          <ul>
            <ProductCard id={m.id} price={m.price} color={m.color} />
          </ul>
        </div>
      </div>
    );
  });
  return (
    <div>
      {homePageMenu}
      <HomePageSecondaryMenu />
      <Container className={s.home_wrapper}>
        <CardGroup itemsPerRow={4}>{storeElements}</CardGroup>
      </Container>
    </div>
  );
};

export default HomePage;
