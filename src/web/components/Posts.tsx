import React, { useRef, useEffect, useState, useCallback } from 'react'
import * as styles from '../../styles'
import { Layout, Menu, Button, Affix } from 'antd'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  LaptopOutlined, 
  AppstoreOutlined,
  NotificationOutlined
} from '@ant-design/icons'
import { useHistory } from "react-router-dom"

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

const MENU = [{
    id: "profile",
    title: "Profile",
    icon: "UserOutlined"
}]

export const Posts: any = (props: any) => {
    const { carmel } = props
    const [section, setSection] = useState("profile")
    const history = useHistory()

    const Icon = (props: any) => {
      const Comp = require(`@ant-design/icons`)[props.name]
      return <Comp/>
    }
    
    const onLogout = () => {
      carmel.logout()
      history.push("/auth")
    }

    const renderContent = () => {
        return  <div style={{
          ...styles.layouts.fullscreen,
           height: "100%", 
           width: "100%",
           display: "flex",
           flexDirection: "column",
           alignItems: "center",
           padding: 20,
           flex: 1,
           backgroundColor: "#f5f5f5" 
           }}>
             <h1>  Posts </h1>
      </div>
    }

    return renderContent()
}