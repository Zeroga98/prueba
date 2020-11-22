import React from "react"
import 'swiper/swiper.scss';

import Layout from "../../components/Layout/Layout"
import SwiperSection from "../../components/HomePageComponents/SwipperSection/SwipperSection";
import ClientSection from "../../components/HomePageComponents/ClientsSection/ClientSection";
import ServiceSection from "../../components/HomePageComponents/ServiceSection/ServiceSection";
import TrainingSection from "../../components/HomePageComponents/TrainingSection/TrainingSection";
import ContactSection from "../../components/HomePageComponents/ContactSection/ContactSection";

const Home = () => {
  return (
    <Layout>
      <div className="home-container">
        <SwiperSection/>
        <ClientSection/>
        <ServiceSection/>
        <TrainingSection/>
        <ContactSection/>
      </div>
    </Layout>
  )
}

export default Home
