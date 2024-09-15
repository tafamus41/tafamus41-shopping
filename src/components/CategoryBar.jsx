import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const CategoryBar = () => {
  return (
    <Form.Group className="mb-3">
      <Container className="d-flex gap-2 justify-content-evenly mt-5">
        <Form.Check type="checkbox" label="All" />
        <Form.Check type="checkbox" label="Electronics" />
        <Form.Check type="checkbox" label="Jewelry" />
        <Form.Check type="checkbox" label="Men's Clothing" />
        <Form.Check type="checkbox" label="Women's Clothing" />
      </Container>
    </Form.Group>
  );
};

export default CategoryBar;
