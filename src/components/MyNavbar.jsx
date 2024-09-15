import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/tafamus41.png";
import { SlBasket } from "react-icons/sl";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="" width={"50px"} />
        </Navbar.Brand>
        <Button variant="primary">
          <SlBasket /> <Badge bg="secondary"></Badge>
        </Button>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
