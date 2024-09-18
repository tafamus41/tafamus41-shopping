import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const CategoryBar = ({ category }) => {
  return (
    <Form.Group className="mb-3">
      <Container className="d-flex gap-2 justify-content-center mt-5 flex-wrap align-items-center">
        {category.map((item, i) => (
          <Form.Check type="radio" label={item} key={i} name="category"/>
        ))}
      </Container>
    </Form.Group>
  );
};

export default CategoryBar;
