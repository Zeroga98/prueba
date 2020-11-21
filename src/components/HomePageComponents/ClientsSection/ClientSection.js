import React from "react"
import { Col } from "antd"
import 'swiper/swiper.scss';

import Image from '../../Images/'
import { dummy } from "../../../assets/common/Utils/Dummy";

const ClientSection = () => {
  return (
    <div className="client-section">
      <h3 htmlFor="email">Nuestros clientes </h3>
      <div className="client-section__content">
        {dummy.clients.map(item => (
          <Col>
            <div className="client-icon">
              <Image name={item.image}/>
            </div>
            <p>{item.name}</p>
          </Col>
        ))}
      </div>
    </div>
  )
}

export default ClientSection
