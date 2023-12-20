import React, { Component } from "react";
import FantasyData from "../data/fantasy.json";
import HistoryData from "../data/history.json";
import HorrorData from "../data/horror.json";
import RomanceData from "../data/romance.json";
import ScifiData from "../data/scifi.json";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import "./Home.css";
import Footer from "./Footer"; 
import NavBar from "./NavBar";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      selectedCategory: "All",
      currentPage: 1,
      itemsPerPage: 20, // Numero di elementi da visualizzare per pagina
    };
  }

  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleCategorySelect = (selectedCategory) => {
    this.setState({ selectedCategory, currentPage: 1 });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { searchTerm, selectedCategory, currentPage, itemsPerPage } = this.state;

    const categoriesData = {
      fantasy: FantasyData,
      history: HistoryData,
      horror: HorrorData,
      romance: RomanceData,
      scifi: ScifiData,
    };

    const filteredBooks =
      selectedCategory === 'All' || !selectedCategory
        ? Object.values(categoriesData).flat()
        : categoriesData[selectedCategory.toLowerCase()] || [];

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredBooks.slice(indexOfFirstItem, indexOfLastItem);

    const filteredAndSearchedBooks = currentItems.filter((libro) =>
      libro.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div id="contenitoreCarte">
        <NavBar
          handleCategorySelect={this.handleCategorySelect}
          selectedCategory={selectedCategory}
        />

        <input
          type="text"
          placeholder="cerca il libro"
          onChange={this.handleSearchChange}
          value={searchTerm}
          className="form-control my-3 w-50"
        />

<Row className="justify-content-center gap-3 my-5 w-100">
          {filteredAndSearchedBooks.map((libro) => (
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
        <Footer
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={filteredBooks.length}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Home;
