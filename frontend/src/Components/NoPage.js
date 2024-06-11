/**
 * NoPage.js
 *
 * This file defines the NoPage component, which renders an error message when the user navigates to a non-existing page.
 * It displays a message informing the user that an error occurred and advises them to go back and try again.
 */

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


/**
 * NoPage Component
 *
 * This component renders an error message when the user navigates to a non-existing page.
 * It displays a message informing the user that an error occurred and advises them to go back and try again.
 *
 * @returns {JSX.Element} The rendered NoPage component.
 */
function NoPage() {
    return (
        <Container>
            <Row className="justify-content-center align-items-center" style={{ height: '80vh' }}>
                <Col xs="auto">
                    <h1 className="text-center">Some Error Occurred, please go back and try again.</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default NoPage;
