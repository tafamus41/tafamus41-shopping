
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/tafamus41.png";
import { SlBasket } from "react-icons/sl";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const MyNavbar = ({counter, basketLoad}) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary d-flex justify-content-between align-items-center px-5">
      
        <Navbar.Brand className="d-flex align-items-center gap-4" >
          <img src={logo} alt="" width={"75px"} /> <span>TAFAMUS41 SHOPPING</span> 
        </Navbar.Brand>
        <Button variant="primary" width={"100px"}  >
          <SlBasket /> <Badge bg="secondary">{counter}</Badge>
        </Button>
    
    </Navbar>
  );
};

export default MyNavbar;
