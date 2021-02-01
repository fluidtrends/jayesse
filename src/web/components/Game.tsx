import React, { useRef, useEffect, useState, useCallback } from 'react'
import { Layout, Input, ConfigProvider, Spin, Form, Alert, Typography, Button } from 'antd'
import * as styles from '../../styles'
import { UserOutlined, HeartOutlined, EyeTwoTone, StarOutlined, LockOutlined } from '@ant-design/icons'

const { Content } = Layout
const { Title, Paragraph, Text } = Typography

export const Game: any = (props: any) => {
  const { data } = props
  const [isWorking, setWorking] = useState(data.working)
  const [player, setPlayer] = useState<any>("")
  const [form] = Form.useForm()

  useEffect(() => {
  }, [])

//   useEffect(() => {
//     const { results, working } = data
//     const { findUser } = results

//   }, data.results.findUser)

  const layout = {
    wrapperCol: { span: 24 }
  }

  const tailLayout = {
    wrapperCol: {  span: 24 }
  }

  const onFormChange = () => {
    // setError("")
    // setError("")
  }

//   const renderUsernameField = () => (
//     <Form.Item key={"username"} name="username" style={{ width: "100%"}}>
//         <Input 
//             ref={usernameFieldRef}
//             style={{ 
//               height: 64,
//               opacity: 1.0
//             }}
//             placeholder="Choose a username" 
//             prefix={<UserOutlined style={{ marginLeft: 5 }} />}/>
//     </Form.Item>
//   )

//   const renderPasswordField = () => (
//     <Form.Item key={"password"} name="password" style={{ width: "100%"}}>
        
//         <Input.Password
//             type={"password"}
//             ref={passwordFieldRef}
//             style={{ 
//               height: 64,
//               opacity: 1.0
//             }}
//             iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
//             placeholder="Choose a password" 
//             prefix={<LockOutlined style={{ marginLeft: 5 }} />}/>
//     </Form.Item>
//   )

//   const renderFields = () => {
//     return [username ? renderPasswordField() : renderUsernameField()]
//   }

//   const renderProgress = () => {
//     return <Spin tip={info} style={{ marginTop: 10 }}/>
//   }

  const onFinish = (v: any) => {

  }

  const onRestart = () => {
    setPlayer("")
  }

  const onChooseAndrew = () => {
     console.log("Andrew")
     setPlayer("Andrew")
  }

  const onChooseJoe = () => {
    console.log("Joe")
    setPlayer("Joe")
  }

  const onChoosePeter = () => {
    console.log("Peter")
  }

  const onChooseLucas = () => {
    console.log("Lucas")
  }

  const onChooseDavid = () => {
    console.log("David")
  }

  const onChooseMatthew = () => {
    console.log("Matthew")
  }

  const renderChooseCharacter = () => {
    return  <div style={{
        display: "flex", 
        flex: 1,
        marginTop: 30,
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>            
          <UserOutlined style={{ fontSize: 40, margin: 20 }} />
          <Title level={2}>
              Choose Your Character
          </Title>

        <Button type="primary" onClick={onChooseAndrew}>Andrew</Button>
        <Button type="primary" onClick={onChooseJoe}>Joe</Button>
        <Button type="primary" onClick={onChoosePeter}>Peter</Button>
        <Button type="primary" onClick={onChooseLucas}>Lucas</Button>
        <Button type="primary">David</Button>
        <Button type="primary" onClick={onChooseMatthew}>Matthew</Button>
    </div>
  }

  const renderWelcome = () => {
    return  <div style={{
        display: "flex", 
        flex: 1,
        marginTop: 30,
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>       
          <StarOutlined style={{ fontSize: 40, margin: 20 }} />
          <Title level={2}>
              Welcome, {player}
          </Title>     

        <Button type="dashed" size="small" onClick={onRestart}>
            Restart
        </Button>
    </div>
  }

  const renderContent = () => {
      return player ? renderWelcome() : renderChooseCharacter()
  }

  const renderForm = () => {
    return <Form.Provider onFormChange={onFormChange}>
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} style={{
          backgroundColor: "#ffffff",
          boxShadow: "0px 0px 8px #999999",
          alignItems: "center",
          minWidth: 450,
          display: "flex",
          flex: 1,
          flexDirection: "column",
          minHeight: 400,
          margin: 20,
          justifyContent: "center",
          padding: 40,
      }}>
          { renderContent() }
      </Form>
      </Form.Provider>
  }

  return renderForm()
}