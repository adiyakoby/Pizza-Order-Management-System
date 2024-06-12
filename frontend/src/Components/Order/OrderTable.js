import {Table, Button, Row, Col, Alert} from "react-bootstrap";

function OrderTable({ ingredients, removeIngredient }) {

    return (
            <Row className="overflow-auto justify-content-center mt-auto">
                <Col >
                    <Table  responsive striped bordered hover  >
                        <thead >
                        <tr>
                            <th>#</th>
                            <th>Ingredient</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {ingredients.map((ingredient, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{ingredient.name}</td>
                                <td>${ingredient.price.toFixed(2)}</td>
                                <td>
                                    <Button variant="danger" onClick={() => removeIngredient(index)}>
                                        X
                                    </Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>

                {ingredients.length < 2 && (
                    <Alert variant="warning">
                        Please add at least 2 ingredients to your order.
                    </Alert>
                )}


            </Row>


    );
}

export default OrderTable;
