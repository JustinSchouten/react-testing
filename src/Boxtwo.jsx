import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Button } from "react-bootstrap";

export default function BoxTwo() {
  return (
    <>
      <div className="container form-style-custom">
        <Form>
          <Row className="mb-1 custom-form-dc">
            <div className="form-style-custom">
              <Form.Group as={Col} controlId="formGridSoortMeter">
                <FloatingLabel label="SoortMeter" />
                <Form.Control
                  className="form-item"
                  type="soortmeter"
                  placeholder="Soort meter"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridVStroom">
                <FloatingLabel label="Verbruik stroom" />
                <Form.Control
                  className="form-item"
                  type="vstroom"
                  placeholder="Verbruik stroom"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridVGas">
                <FloatingLabel label="Verbruik gas" />
                <Form.Control
                  className="form-item"
                  type="vgas"
                  placeholder="Verbruik gas"
                />
              </Form.Group>
              <Button>Volgende</Button>
            </div>
          </Row>
        </Form>
      </div>
    </>
  );
}
