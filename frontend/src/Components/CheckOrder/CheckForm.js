import {Button, Form} from "react-bootstrap";


function checkForm({handleSubmit, orderId ,setOrderId}){
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Search for order</Form.Label>
                <Form.Control type="text" placeholder="Enter order id" onChange={(e) => setOrderId(e.target.value.trim())} />
                <Form.Text className="tpm staext-muted" >
                    There is no option to edit the order after submitting.
                </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit" disabled={orderId === ""}>
                Search
            </Button >
        </Form>
    );
}

export default checkForm;