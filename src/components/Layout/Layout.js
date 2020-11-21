import React from "react"
import {Layout,Button} from "antd"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


const {  Content } = Layout

const Home = ({ children }) => {
  return (
    <Layout>
      <Header/>
      <Content >
        {children}
      </Content>
      <div  className="knwowus-section" >
        <h2 className="title-generic" >Queremos conocerte</h2>
        <Button>Contáctanos</Button>
      </div>
      <Footer/>
    </Layout>
  )
}

export default Home
