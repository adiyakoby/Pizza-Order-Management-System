    import {Button, Form} from "react-bootstrap";


function CheckOrder() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Search for order</Form.Label>
                <Form.Control type="text" placeholder="Enter order id" />
                <Form.Text className="tpm staext-muted">
                    There is no option to edit the order after submitting,
                </Form.Text>
            </Form.Group>


            <Button variant="primary" type="submit">
                Search
            </Button>
        </Form>
    );
}

export default CheckOrder;