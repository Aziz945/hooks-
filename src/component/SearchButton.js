import React from 'react';

import { Navbar,Nav,Container,Form } from 'react-bootstrap';
import AddingMovie from './AddMovie';

const Search = ({setSearchTitle}) => {
  return (
    <div>
          <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">MoviesDataBase</Navbar.Brand>
    
    <Form.Control className='inp' type="text" placeholder="Search movies..." 
    onChange={(e)=>setSearchTitle(e.target.value)} />
   
    
  
    </Container>
  </Navbar>
    </div>
  )
}

export default Search