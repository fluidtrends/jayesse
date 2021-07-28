import React, { useRef, useEffect, useState, useCallback } from 'react'
import * as styles from '../../styles'
import { Layout, Menu, Avatar, Divider, Button, List, Alert, Spin, Badge, Tag, Typography} from 'antd'
import {
  DesktopOutlined,
  PieChartOutlined,
  SyncOutlined,
  ExclamationCircleOutlined,
  UserOutlined,
  FormOutlined, 
  EnvironmentOutlined,
  NotificationOutlined
} from '@ant-design/icons'
import { useLocation } from "react-router-dom"

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu
const { Title, Paragraph, Text } = Typography

const FIELDS = [{
  id: "name",
  title: "Name",
  placeholder: "What's your name?",
  icon: UserOutlined
}, {
  id: "location",
  title: "Location",
  placeholder: "Where are you from?",
  icon: EnvironmentOutlined
}]

export const Account: any = (props: any) => {
    const { carmel } = props
    const [isWorking, setWorking] = useState(true)
    const [user, setUser] = useState<any>({})
    const [error, setError] = useState("")
    const location = useLocation()
    const username = location.hash.substring(1)

    const renderProgress = () => {
      return <Spin style={{ marginTop: 10 }}/>
    }

    const renderError = () => {
        return <Alert
            message={error}
            type="warning"
            showIcon
            />
    }

    useEffect(() => {
        if (carmel.newEvent && carmel.newEvent.type === carmel.EVENT.USER_LOOKUP_DONE) {
            if (!carmel.newEvent.data.did) {
                setError(`The user ${carmel.newEvent.data.username} does not exit`)
                setUser(carmel.newEvent.data)
                setWorking(false)
                return
            }
            carmel.loadUser(carmel.newEvent.data)
            return
        }

        if (carmel.newEvent && carmel.newEvent.type === carmel.EVENT.USER_DATA_LOOKUP_DONE) {
            setUser(carmel.newEvent.data)
            setWorking(false)
            return
        }

        carmel.findUser(username, true)
    }, [username])

    const renderUserData = () => {
        if (isWorking) {
            return renderProgress()
        }

        if (error) {
            return renderError()
        }

        const data = FIELDS.map((f: any) => ({ title: f.title, icon: f.icon, description: user[f.id] }))

        return <div style={{
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

                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  style={{
                    width: "100%"
                  }}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<item.icon/>}
                        title={item.title}
                        description={item.description}
                      />
                    </List.Item>
                  )}
  />
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
              { renderUserData() }
      </div>
    }

    return renderContent()
}