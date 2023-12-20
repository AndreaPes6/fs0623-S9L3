import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Nav from 'react-bootstrap/Nav';

function NavBar({ handleCategorySelect, selectedCategory }) {
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    const allCategories = ['All', 'Fantasy', 'History', 'Horror', 'Romance', 'Scifi'];
    setCategoriesData(allCategories);
  }, []);

  return (
    <Navbar expand="lg" className="bg-light" id='navbar'>
      <Container fluid>
        <Navbar.Brand href="#">EpiBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action3">Browse</Nav.Link>
          </Nav>
          <DropdownButton
            id="category-dropdown"
            title={`Category: ${selectedCategory || 'All'}`}
            variant="light"
            onSelect={handleCategorySelect}
          >
            {categoriesData.map((category) => (
              <Dropdown.Item key={category} eventKey={category}>
                {category}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
