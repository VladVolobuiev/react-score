import { Card, Button } from 'react-bootstrap';

const ProductCard = (props) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>T-shirt</Card.Title>
          <Card.Text>{props.state}</Card.Text>
          <Button variant="primary">add to basket</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;