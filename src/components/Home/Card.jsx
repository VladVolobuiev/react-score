import { Card, Button } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';

const ProductCard = (tShirt) => {
  const { addedCount, id, color, price, setAddToCard } = tShirt;
  // const sumOfValues = (tShirt) => {
  //   return setAddToCard.bind(this, tShirt);
  // };
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>T-shirt</Card.Title>
          <Card.Text>
            {id}
            {color}
            <Icon name="usd" />
            {price}
          </Card.Text>
          <Button variant="primary" onClick={setAddToCard.bind(this, tShirt)}>
            add to basket {addedCount > 0 && `(${addedCount})`}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
