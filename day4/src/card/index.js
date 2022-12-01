// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pic from '../3D-Cartoon.jpg';

function CardComponent({ title, body }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Pic} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {body}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default CardComponent;