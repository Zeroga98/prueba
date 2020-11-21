import React from "react"
import { Row, Col, Button } from "antd"

import Image from "../../components/Images/"

const Footer = () => {
  return (
    <footer className="footer-content">
      <Row>
        <Col lg={8} xs={12}>
          Síguenos
        <Row>
            <Image name="linkendin" />
            <Image name="instagram" />
            <Image name="twitter" />
          </Row>
          <Button>
            Contactanos
          </Button>
        </Col>
        <Col lg={16} xs={12}>
          <Row justify="space-around">
            <Col lg={8} xs={24}>
              <a href="/#">Nosotros</a>
              <a href="/#">Acerca de f13</a>
              <a href="/#">Diseño</a>
              <a href="/#">Políticas</a>
            </Col>
            <Col lg={16} xs={24}>
              <p>Conéctate con nosotros</p>
              <p>(057) 3134760746</p>
              <p>F13florencia@gmail.com</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="copyright-container">
        <Col lg={8} xs={12} className="footer-logo">
        <Image name="logo" />
        </Col>
        <Col lg={16} xs={12}>
          <div className="divider"/>
            <Col lg={8} xs={24} className="copyright-content">
              <p>F13 technologies 2020. Todos los derechos reservados</p>
              <p>Desarrollo por F13 en Caquetá-Colombia</p>
            </Col>
        </Col>
      </Row>


    </footer>
  )
}

export default Footer
