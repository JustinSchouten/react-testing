import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export default function Home() {
  return (
    <div className="container form-style-custom">
      <Form>
        <Row>
          <div className="custom-form-dc">
            <Col xs={7}>
              <FloatingLabel label="Postcode" />
              <FloatingLabel label="Huis nr." />
              <FloatingLabel label="Toev." />
            </Col>
            <Col xs={7}>
              <Form.Control className="form-item" placeholder="City" />
              <Form.Control className="form-item" placeholder="State" />
              <Form.Control className="form-item" placeholder="Zip" />
            </Col>
          </div>
        </Row>
        <Row>
          <div className="custom-form-dc">
            <Col xs={7}>
              <FloatingLabel label="Postcode" />
              <FloatingLabel label="Huis nr." />
              <FloatingLabel label="Toev." />
            </Col>
            <Col xs={7}>
              <Form.Control className="form-item" placeholder="City" />
              <Form.Control className="form-item" placeholder="State" />
              <Form.Control className="form-item" placeholder="Zip" />
            </Col>
          </div>
        </Row>
      </Form>
    </div>
  );
}
