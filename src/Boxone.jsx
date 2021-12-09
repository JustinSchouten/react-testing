import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

export default function Boxone() {
  return (
    <>
      <div className="container form-style-custom">
        <Form>
          <Row className="mb-1 custom-form-dc">
            <div className="form-style-custom">
              <Form.Group as={Col} controlId="formGridPostcode">
                <FloatingLabel label="Postcode" />
                <Form.Control
                  className="form-item"
                  type="postcode"
                  placeholder="Postcode"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridHuisNr">
                <FloatingLabel label="Huis nr." />
                <Form.Control
                  className="form-item"
                  type="huisnr"
                  placeholder="HuisNr."
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridToev">
                <FloatingLabel label="Toev." />
                <Form.Control
                  className="form-item"
                  type="toev"
                  placeholder="Toev."
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
