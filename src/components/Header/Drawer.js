import React from "react"
import { Drawer,Row,Dropdown } from "antd"
import { DownOutlined } from '@ant-design/icons';

import Image from "../../components/Images/"

const CustomDrawer = ({drawer,setDrawer,flag,menu}) => {
  return (
    <Drawer
    title=""
    placement="right"
    closable={true}
    onClose={() => setDrawer(false)}
    visible={drawer}
    className="custom-menu-resposive">
        <p> Contáctanos</p>
        <p> Nosotros</p>
        <p> Servicios </p>
         <Dropdown overlay={menu}>
          <Row>
            <Image name={flag} />
            <DownOutlined color="white" />
          </Row>
        </Dropdown> 
    </Drawer>
  )
}

export default CustomDrawer
