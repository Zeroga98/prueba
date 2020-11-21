import React, { useState } from "react"
import { Row, Dropdown, Menu } from "antd"
import { DownOutlined,MenuOutlined } from '@ant-design/icons';

import Image from "../../components/Images/"
import Drawer from "./Drawer"
import { dummy } from "../../assets/common/Utils/Dummy"

const Header = () => {
  const [flag, setFlags] = useState('flag');
  const [drawer, setDrawer] = useState(false);

  const changeLanguage = (body) => (
    setFlags(body)
  )
  const changeDrawer = (body) => (
    setDrawer(!drawer)
  )

  const menu = (
    <Menu>
      {dummy.flag.map(item => (
        <Menu.Item onClick={() => changeLanguage(item.name)}>
          <Image name={item.name} />
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <header className="header-content">
      <Row justify="space-between">
        <Image name="linkendin" />
        <Image name="instagram" />
        <Image name="twitter" />
      </Row>
      <div className="custom-menu">
        <a href="/#">Contáctanos</a>
        <a href="/#"> Nosotros</a>
        <a href="/#">Servicios </a>
        <Dropdown overlay={menu}>
          <Row>
            <Image name={flag} />
            <DownOutlined color="white" />
          </Row>
        </Dropdown>
      </div>
      <MenuOutlined className="burger-button" onClick={changeDrawer} />
      <Drawer drawer={drawer} 
      setDrawer={()=>setDrawer()} 
      flag={flag} 
      menu={menu}/>

    </header>
  )
}

export default Header
