
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/tafamus41.png";
import { SlBasket } from "react-icons/sl";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary d-flex justify-content-between align-items-center">
      
        <Navbar.Brand>
          <img src={logo} alt="" width={"100px"} />TAFAMUS41 SHOPPING
        </Navbar.Brand>
        <Button variant="primary" width={"100px"}  >
          <SlBasket /> <Badge bg="secondary"></Badge>
        </Button>
    
    </Navbar>
  );
};

export default MyNavbar;
