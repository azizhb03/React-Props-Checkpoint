import Card from 'react-bootstrap/Card';

function Cart({player}) {
    console.log('player', player);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={player.img} height={240} />
      <Card.Body>
        <Card.Title>name:{player.name}</Card.Title>
        <Card.Text>
         age:{player.age}
        </Card.Text>  <Card.Text>
         team:{player.team}
        </Card.Text>
        <Card.Text>
         position:{player.position}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cart;