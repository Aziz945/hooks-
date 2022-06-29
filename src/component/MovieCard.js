import React from 'react';
import {Card} from 'react-bootstrap'



const MovieCard = ({movie}) => {
  return (
    <Card className='cardStyle' style={{ width: '22rem',marginLeft:'25px'}}>
    <Card.Img variant="top" src={movie.image} />
    <Card.Body>
      <Card.Title>{movie.name}</Card.Title>
      <Card.Text>
        {movie.description}
      </Card.Text>
      <Card.Text>
        {movie.year}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default MovieCard ;