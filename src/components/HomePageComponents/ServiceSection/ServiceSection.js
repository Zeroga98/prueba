import React from "react"
import { Col,Row } from "antd"

import { dummy } from "../../../assets/common/Utils/Dummy"
import Image from '../../Images/'

const ServiceSection = () => {
  return (
    <div className="service-section">
      <h2 className="title-generic">¿Qué hacemos?</h2>
      <Row justify="space-around">
        {dummy.doing.map(item=>(
          <Col lg={7} xs={12}>
            <h3 className="text-generic">{item.name}</h3>
            <p>{item.description}</p>
            <Image name={item.image}/>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ServiceSection
