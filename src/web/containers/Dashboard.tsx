import React, { useRef, useEffect, useState, useCallback } from 'react'
import * as styles from '../../styles'
import { Layout, Typography, ConfigProvider, Menu, Button, Affix } from 'antd'
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
const { Paragraph } = Typography

export const Dashboard: any = (props: any) => {
    const { carmel, routes, id } = props
    const [section, setSection] = useState(id)
    const history = useHistory()

    const hasHeader = true
    const hasContent = true 
    const hasFooter = props.footer !== undefined && props.footer
    
    const Icon = (props: any) => {
      const Comp = require(`@ant-design/icons`)[props.name]
      return <Comp/>
    }
    
    const onLogout = () => {
      carmel.logout()
      history.push("/auth")
    }

    const renderMenuRoute = (r: any, i: number) => {
        return <Menu.Item key={`${r.id}`} icon={<Icon name={r.icon || 'AppstoreOutlined'} />} style={{
          
        }}>
          { r.name }
        </Menu.Item>
    }

    const onMenuSelected = (item: any) => {
      setSection(item.key)
      const route = routes.private.find((r: any) => r.id === item.key)
      history.push(route.path)
    }

    const renderMenu = () => {
      return <Menu
            onSelect={onMenuSelected}
            mode="inline"
            defaultSelectedKeys={[section]}
            style={{ 
              width: 200
            }}>
              { routes.private.map((r: any, i: number) => renderMenuRoute(r, i)) }
          </Menu>
    }
  
    const renderContent = () => (
      <Content style={{
        ...styles.layouts.content
        }}>
          { props.children }
      </Content>
    )
  
    return ( 
      <ConfigProvider>
        <Layout style={{ 
          ...styles.layouts.fullscreen,
          flexDirection: "row",
          alignItems: "flex-start",
          }}>
            { renderMenu() }
            { renderContent() }
        </Layout>
      </ConfigProvider>
    )
}