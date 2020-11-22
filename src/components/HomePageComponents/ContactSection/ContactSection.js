import React from "react"
import { Col, Row, Form, Input, Dropdown, Radio, Checkbox } from "antd"
import { DownOutlined } from '@ant-design/icons';

import Image from '../../Images'
import { dummy } from "../../../assets/common/Utils/Dummy"
import ButtonComplement from "../../ButtonComplement/ButtonComplement";

const ContactSection = () => {
  const option = (
    <Col>
      {dummy.service.map(item => (
        <a href="/#">
          <p className="ant-dropdown-link" >
            {item.name}
          </p>
        </a>
      ))}
    </Col>

  )

  return (
    <div className="contact-section">
      <Row>
        <Col lg={12} xs={24} className="content-form">
          <h2>Soy</h2>
          <Form>
            <Radio.Group>
              <Row justify="space-between">
              <Col lg={12} xs={24}>
                <Form.Item>
                  <Radio value={1}>Persona natural</Radio>
                </Form.Item>
              </Col>
              <Col lg={12} xs={24}>
                <Form.Item>
                  <Radio value={2}>Empresa</Radio>
                </Form.Item>
              </Col>
              </Row>
            </Radio.Group>
            <Row>
              <Col lg={12} xs={24}>
                <Form.Item
                  label="Nombre"
                  name="name"
                  rules={[{ required: false, message: 'Tu Nombre es obligatorio!' }]}>
                  <Input placeholder="Ingrese su nombre" />
                </Form.Item>
                <Form.Item
                  label="Numero de documento"
                  name="document"
                  rules={[{ required: false, message: 'Tu contacto es obligatorio!', type: 'number' }]}>
                  <Input placeholder="Ingrese su número de documento" />
                </Form.Item>
              </Col>
              <Col lg={12} xs={24}>
                <Form.Item
                  label="Correo"
                  name="email"
                  rules={[{ required: false, message: 'Tu correo es obligatorio!', type: 'email' }]}>
                  <Input placeholder="Ingrese su número de Correo" />
                </Form.Item>
                <Form.Item
                  label="¿Cómo te ayudamos?"
                  name="type"
                  rules={[{ required: false, message: 'Consulta obligatoría' }]}>
                  <Dropdown overlay={option} >
                    <a href="/#" className="ant-dropdown-link" >
                      Seleccionar servicio <DownOutlined />
                    </a>
                  </Dropdown>,
                </Form.Item>
              </Col>
              <Row>
                <Col lg={20}>
                  <Form.Item>
                    <Checkbox >Confirmo que conozco y acepto la Política de Tratamiento
                    de Datos, Terminos y Condiciones.</Checkbox>
                  </Form.Item>
                </Col>
              </Row>
              <Col lg={24} className="content-submit">
                <Form.Item >
                  <ButtonComplement htmlType="submit" text="Enviar" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col lg={12} xs={24} className="content-image">
          <Image name="consulting" />
        </Col>
      </Row>
    </div>
  )
}

export default ContactSection
