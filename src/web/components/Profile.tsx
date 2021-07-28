import React, { useRef, useEffect, useState, useCallback } from 'react'
import * as styles from '../../styles'
import { Layout, Menu, Avatar, Divider, Button, Form, Input, Spin, Badge, Tag, Typography} from 'antd'
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
import { useHistory } from "react-router-dom"

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu
const { Title, Paragraph, Text } = Typography

const MENU = [{
    id: "profile",
    title: "Profile",
    icon: "UserOutlined"
}]

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

export const Profile: any = (props: any) => {
    const { carmel } = props
    const { account } = carmel
    const { username, signature } = account
    const [section, setSection] = useState("profile")
    const history = useHistory()
    const [error, setError] = useState<any>("")
    const [isWorking, setWorking] = useState(false)
 
    let fields: any = {}

    const updateFields = (updates: any) => {
      FIELDS.map((f: any) => {
        fields[f.id] = fields[f.id] || {}
        fields[f.id].ref = fields[f.id].ref || useRef<any>(null)
        fields[f.id].value = updates ? (updates[f.id] || "") : ""
      })
    }

    updateFields(carmel.account)

    const Icon = (props: any) => {
      const Comp = require(`@ant-design/icons`)[props.name]
      return <Comp/>
    }

    const [form] = Form.useForm()
    
    const onFormChange = () => {
      setError("")
    }

    const layout = {
      wrapperCol: { span: 24 }
    }

    const tailLayout = {
      wrapperCol: {  span: 24 }
    }
  
    const onLogout = () => {
      carmel.logout()
      history.push("/auth")
    }

    const onUpdate = () => {
      carmel.updateAccount()
    }

    const onDownloadSignature = () => {
      carmel.saveSignatureToFile()
    }

    const onFinish = async (v: any) => {
      updateFields(v)
      carmel.updateAccount(v)
    }

    const renderAction = () => {
      return (<Form.Item {...tailLayout} style={{ padding: 0, margin: 0}}>  
          <Button disabled={false} type="primary" size="large" htmlType="submit" style={{
            opacity: 1.0
          }}>
              { 'Update Profile' }
          </Button>
      </Form.Item>)
    }

    const renderSubAction = () => {
      return (<Form.Item {...tailLayout} style={{ padding: 0, margin: 0}}>  
              <Button type="primary" style={{
            backgroundColor: "#ffffff",
            color: "#F50057",
            border: "none"
          }} 
          onClick={onLogout}> Sign Out </Button>
      </Form.Item>)
    }

    const renderField = (field: any) => (
      <Form.Item key={field.id} name={field.id} initialValue={fields[field.id].value} style={{ width: 400, margin: 0 }}>
          <Input 
              addonBefore={<div style={{width: 90, fontSize: 11 }}>{field.title}</div>}
              ref={fields[field.id].ref}
              style={{ 
                height: 48,
                opacity: 1.0
              }}
              value={fields[field.id].value}
              placeholder={ field.placeholder }
              prefix={<field.icon style={{ marginLeft: 5 }} />}/>
      </Form.Item>
    )

    const renderFields = () => {
      return <div style={{
        flex: 1
      }}>
        { FIELDS.map((f: any) => renderField(f)) }
      </div>
    }

    const renderPeers = (type: string, total: number) => {
      return <Tag key={type} 
          icon={total === 0 ? <SyncOutlined spin/> : <Badge status={"processing"} color={total > 0 ? "green" : "red"}/>} 
          color={"default"}
          style={{
                  marginTop: 0, backgroundColor: "#ffffff",
                  borderRadius: 8, padding: 4, paddingLeft: 10, paddingRight: 10, fontSize: 13
                  }}> { type } { total === 0 } 
                <Badge count={total} style={{ 
                    marginTop: -3,
                    marginLeft: 5, 
                    backgroundColor: "#ECEFF1",
                    fontSize: 10,
                }}/>
            </Tag>
    }

    const renderStatus = () => {
      // let ipfsPeers = carmel.status ? carmel.status.ipfsPeers : 0
      // let carmelPeers = carmel.status ? carmel.status.carmelPeers : 0
      // let carmelNodes = carmel.status ? carmel.status.carmelNodes : 0

      // return <div>
      //   { renderPeers('IPFS Peers', ipfsPeers) }
      //   { renderPeers('Carmel Peers', carmelPeers) }
      //   { renderPeers('Carmel Nodes', carmelNodes) }
      // </div>
    }


    const renderProgress = () => {
      return <Spin style={{ marginTop: 10 }}/>
    }

    //             <Button type="primary" style={{}} onClick={onUpdate}> Update Profile </Button>
    //             
    //          </div>

    const renderForm = () => {    
      return <Form.Provider onFormChange={onFormChange}>
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} style={{
                display: "flex", 
                flex: 1,
                marginTop: 10,
                width: "100%",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
          }}>
                <Avatar size={64} icon={<UserOutlined />} />
                <Title level={2}>
                  { username}
                </Title>

                <Divider/>

                { isWorking || renderFields() }
                { isWorking && renderProgress() }

                <Divider/>

                { isWorking || renderAction() }
          </Form>
        </Form.Provider>
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
                { renderForm() }
              </div>

                <Button type="primary" size="small" style={{
                  backgroundColor: "#ffffff",
                  color: "#1E88E5",
                  border: "none"
              }}
               onClick={onDownloadSignature}> Download Your Signature </Button>
               <Text> Save as a file and use it to sign in later </Text>

               <Divider/>

               { isWorking || renderSubAction() }

      </div>
    }

    return renderContent()
}