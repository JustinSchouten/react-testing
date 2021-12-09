import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export default function BoxTwo() {
  return (
    <>
      <div className="container form-style-custom">
        <Form>
          <Row>
            <div className="custom-form-dc">
              <Col xs={7}>
                <FloatingLabel label="Soort meter:" />
                <FloatingLabel label="Verbruik stroomHuis nr." />
                <FloatingLabel label="Verbruik gas" />
              </Col>
              <Col xs={7}>
                <Form.Control className="form-item" placeholder="Soort meter" />
                <Form.Control
                  className="form-item"
                  placeholder="Verbruik stroom"
                />
                <Form.Control
                  className="form-item"
                  placeholder="Verbruik gas"
                />
              </Col>
            </div>
          </Row>
        </Form>
      </div>
    </>
  );
}
