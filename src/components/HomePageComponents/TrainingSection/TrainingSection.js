import React from "react"
import { Col, Row, Form, Input, Button } from "antd"
import Image from '../../Images/'

const TrainingSection = () => {
  return (
    <div className="training-section">
      <Row>
        <Col lg={12} xs={24}>
          <h2>Capacitamos jóvenes
          antes de enfrentar
          al mundo laboral</h2>
          <p>¿Estás interesado?</p>
          <Form>
            <Form.Item
              label="Correo"
              name="email"
              rules={[{ required: false, message: 'Tu correo es obligatorio!', type: 'email' }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="Celular/teléfono"
              name="contact"
              rules={[{ required: false, message: 'Tu contacto es obligatorio!', type: 'number' }]}>
              <Input />
            </Form.Item>
            <Form.Item className="submit-content">
              <Button>
                Enviar
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col lg={12} xs={24} className="content-image">
          <Image name="training" />
        </Col>
      </Row>
    </div>
  )
}

export default TrainingSection
