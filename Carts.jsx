import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cart.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useContext } from "react";
import { myContext } from "./Context";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Footer from "./Footer";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Carts() {
  const { watch, setWatch, wish, setWish, addcart, setAddCart } =
    useContext(myContext);
  const [filterData, setFilteredData] = useState(watch);

  const [searchInput, setSearchInput] = useState("");

  console.log("watches", watch);
  console.log("filterData", filterData);
  const nav = useNavigate();
  function lo() {
    nav("/");
  }
  function wishbtn(watches) {
    if (wish.includes(watches)) {
      setWish(wish.filter((item) => item !== watches));
    } else {
      setWish([...wish, watches]);
      nav("/wish");
    }
  }
  console.log("wish", wish);
  const handleClick = (title) => {
    title = title.split(" ").join("_");
    nav(`/carts/${title}`);
  };

  function cartbtn(watches) {
    if (addcart.includes(watches)) {
      setAddCart(addcart.filter((item) => item !== watches));
    } else {
      setAddCart([...addcart, watches]);
      nav("/cart");
    }
  }
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    const filtered = watch.filter((products) =>
      products.Brand.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };
  function button(){
    nav("/carts")
  }

  return (
    
    <div className="maincart" >
      <div style={{display:"flex",flexWrap:"wrap"}}>
        <Navbar expand="lg" className="naav">
          <Container>
            {/* <button onClick={button}>
            <h3 style={{width:"90px",backgroundColor: "lightslategrey",height:"70px"}}>Watch store</h3>
            </button> */}
            <Navbar.Brand as={Link}to="/Carts">Watch Store </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="nav">
              <DropdownButton className="db" title="Brands ">
      <Dropdown.Item as={Link}to="#/action-1"></Dropdown.Item>
      <Dropdown.Item as={Link}to="/Piguet">Audemars Piguet</Dropdown.Item>
      <Dropdown.Item as={Link}to= "/Patek">Patek Philippe</Dropdown.Item>
      <Dropdown.Item as={Link}to="/Jaeger">Jaeger-LeCoultre</Dropdown.Item>
      <Dropdown.Item as={Link}to="/Hudlot">Hudlot</Dropdown.Item>
      <Dropdown.Item hre>Cartier</Dropdown.Item>
    </DropdownButton>

                <Nav.Link as={Link}to="/Profile">Profile</Nav.Link>
                <Nav.Link as={Link} to="/Wish">Wishlist</Nav.Link>
                <Nav.Link as={Link} to="/Cart">Cart</Nav.Link>
                
                  <img
                    className=".cart"
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
                    alt="img"
                  />
                  {/* Cart{" "}
                </Nav.Link> */}
                <Nav.Link href="#home">
                  <img
                    className=".login"
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
                    alt="img"
                  />
                  {/* <Link to={'/ '}><h3>Login </h3></Link>{" "} */}
                  <button onClick={lo}>Login</button>
                </Nav.Link>

                <label for="search"></label>
                <input style={{marginRight:"60px",marginLeft:"450px"}}
                  type="text"
                  className="search"
                  size={60}
                  placeholder="Search for products,brands and more"
                  onChange={handleSearch}
                />
                {/* <Button type="submit" onClick={handleSearch}>
                  Search
                </Button> */}

                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  
                  <NavDropdown.Item href="#action/3.1">Search</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
                  
                </NavDropdown> */}


{/* function BasicButtonExample() {
  return ( */}
    {/* <DropdownButton className="db" title="Brands ">
      <Dropdown.Item href="#/action-1"></Dropdown.Item>
      <Dropdown.Item href="Piguet">Audemars Piguet</Dropdown.Item>
      <Dropdown.Item href="Patek">Patek Philippe</Dropdown.Item>
      <Dropdown.Item href="Jaeger">Jaeger-LeCoultre</Dropdown.Item>
      <Dropdown.Item href="Hudlot">Hudlot</Dropdown.Item>
      <Dropdown.Item href="Cartier">Cartier</Dropdown.Item>
    </DropdownButton> */}
  {/* );
} */}

{/* export default BasicButtonExample; */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* <div>
          {filterData.map(watches=>  (
              <div key={watches.id}>
                {watches.title}
                </div>
            )
          )}
        </div> */}
       
      </div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              alt="first"
              className="f"
              src="https://luxurycarts.in/cdn/shop/files/luxurycarts.in.jpg?v=1686766935&width=1500"
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              alt="second"
              className="s"
              src="https://fromtimetotimes.com/cdn/shop/products/242_1e.jpg?v=1663805470&width=823"
            />
            <Carousel.Caption>
              {/* <h3>Second slide label</h3> */}
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="t"
              alt="third"
              src="https://cdn4.singleinterface.com/files/enterprise/coverphoto/184967/BLUE-SUIT-05-12-23-10-11-24.png"
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3> */}
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <br></br>

        <Row xs={1} md={3} className=".fr">
          {Array.from({ length: 1 }).map((_, idx) => (
            <Col key={idx} className="col">
              <Row key={idx} className="row"></Row>
              {filterData &&
                filterData.map((item) => (
                  <Card className="card">
                    <div className="img-cl">
                      <Card.Img
                        variant="top"
                        src={item.image}
                        className="img"
                        onClick={() => handleClick(item.title)}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title className="txt">{item.title} </Card.Title>
                      <Card.Text>{item.text}</Card.Text>
                      <Button className="wish" onClick={() => wishbtn(item)}>
                        {wish.includes(item)
                          ? "Remove from wishlist"
                          : "Add to Wishlist"}
                      </Button>
                      <Button className="add" onClick={() => cartbtn(item)}>
                        {addcart.includes(item)
                          ? "Remove from Cart"
                          : "Add to cart"}
                      </Button>
                    </Card.Body>
                  </Card>
                ))}
            </Col>
          ))}
        </Row>
      </div>
   

      <div>
        <Footer />
      </div>
    </div>
  );
}

// export default Carts;

