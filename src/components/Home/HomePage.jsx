import ProductCard from './Card';

import s from './HomePage.module.css';

const HomePage = (props) => {
  let state = props.items;
  let storeElements = state.items.map((m) => {
    return (
      <div key={m.id}>
        <ul>
          <ProductCard id={m.id} price={m.price} color={m.color} />
        </ul>
      </div>
    );
  });
  return <div className={s.home_wrapper}>{storeElements}</div>;
};

export default HomePage;
