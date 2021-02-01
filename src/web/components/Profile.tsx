import React, { useRef, useEffect, useState, useCallback } from 'react'
import * as styles from '../../styles'
import { Layout, Menu, Avatar, Divider, Button, Form, Affix, Typography} from 'antd'
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
const { Title, Paragraph, Text } = Typography

const MENU = [{
    id: "profile",
    title: "Profile",
    icon: "UserOutlined"
}]

export const Profile: any = (props: any) => {
    const { carmel } = props
    const { account } = carmel
    const { username, signature } = account
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

    const onDownloadSignature = () => {
      carmel.saveSignatureToFile()
    }

    const renderFields = () => {
      return <div style={{
        flex: 1
      }}>
      </div>
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
              <div style={{
                boxShadow: "0px 0px 8px #999999",
                alignItems: "center",
                width: 600,
                display: "flex",
                backgroundColor: "#ffffff",
                flex: 1,
                flexDirection: "column",
                minHeight: 400,
                maxHeight: 600,
                margin: 20,
                justifyContent: "center",
                padding: 40,
              }}>
                <Avatar size={64} icon={<UserOutlined />} />
                <Title level={2}>
                  { username}
                </Title>
                <Divider/>
                { renderFields() }
                <Divider/>
               <Button type="primary" onClick={onDownloadSignature}> Download Your Signature </Button>
               <Text>Save as a file and use it to sign in </Text>
             </div>
             <Button type="primary" style={{
               backgroundColor: "#ffffff",
               color: "#F50057",
               border: "none"
             }} 
             onClick={onLogout}> Sign Out </Button>
      </div>
    }

    return renderContent()
}