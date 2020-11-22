import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Col, Row } from "antd"
import 'swiper/swiper.scss';

import Image from "../../Images/"
import ButtonComplement from "../../ButtonComplement/ButtonComplement";

SwiperCore.use([Navigation, Pagination])

const SwiperSection = () => {
  return (
    <div className="slide-section">
      <Image name="logoPrimary" />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination>
        <SwiperSlide className="slide-section__container">
          <Row>
            <Col lg={10} xs={24} >
              <Image name="campaing" />
            </Col>
            <Col lg={14} xs={24} className="slide-container__content">              
                <h2 className="title-generic">Productos digitales a tu alcance</h2>
                <p className="text-generic">Realizamos productos y servicios implementando
                tecnologías actuales de acuerdo a los
                estándares de calidad </p>
                <ButtonComplement text="Nuestros servicios" width="200px" fontSize="80%" />
            </Col>
          </Row>
        </SwiperSlide>
        <SwiperSlide className="slide-section__container">
          <Row>
            <Col lg={14} xs={24} className="slide-container__content">
                <h2 className="title-generic">Construimos tecnología y también capacitamos</h2>
                <ButtonComplement text="Quiero saber más" width="200px" fontSize="80%" />
            </Col>
            <Col lg={10} xs={24}>
              <Image name="startup" />
            </Col>
          </Row>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SwiperSection
