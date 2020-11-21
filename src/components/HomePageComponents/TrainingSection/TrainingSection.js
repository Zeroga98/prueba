import React from "react"
import { Col, Row, Form } from "antd"
import Image from '../../Images/'

const TrainingSection = () => {
  return (
    <div className="training-section">
      <Row>
        <Col lg={12} xs={18}>
          <h2>Capacitamos jóvenes
          antes de enfrentar
          al mundo laboral</h2>
          <p>¿Estás interesado?</p>


        </Col>
        <Col lg={12} xs={18}>
          <Image name="training" />
        </Col>
      </Row>
    </div>
  )
}

export default TrainingSection
