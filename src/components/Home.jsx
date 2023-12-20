import React, { useState } from "react";
import Books from "../data/fantasy.json";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import "./Home.css";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = Books.filter((libro) =>
    libro.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="cerca il libro"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        className="form-control my-3 w-50"
      />

      <Row className="justify-content-center gap-3 my-5 w-100">
        {filteredBooks.map((libro) => (
          <Card id="carte" className="bg-secondary text-center" key={libro.id}>
            <Card.Img src={libro.img} className="h-50" />
            <Card.Body>
              <Card.Title>{libro.title}</Card.Title>
              <Card.Text>{libro.category}</Card.Text>
            </Card.Body>
            <ListGroup>
              <ListGroup.Item className="bg-secondary align-self-center" id="prezzo">€{libro.price}</ListGroup.Item>
              <Button variant="outline-light" className="m-3 w-50 align-self-center">Compra</Button>
            </ListGroup>
          </Card>
        ))}
      </Row>
    </div>
  );
}

export default Home;
