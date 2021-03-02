import React, { useRef, useEffect, useState, useCallback } from 'react'
import { Fade } from 'react-awesome-reveal'
import { Layout, Input, Avatar, Upload, Tag, Badge, Spin, Form, Alert, Typography, Button } from 'antd'
import { AuthProps } from '../../types/components'
import * as styles from '../../styles'
import { useHistory } from "react-router-dom"
import { UserOutlined, EyeInvisibleOutlined, UploadOutlined, EyeTwoTone, LockOutlined } from '@ant-design/icons'

const { Content } = Layout
const { Title, Paragraph, Text } = Typography

export const Auth: any = (props: any) => {
  const { carmel, assets } = props
  const [isWorking, setWorking] = useState(true)
  const [isReady, setReady] = useState(false)
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState<any>()
  const [username, setUsername] = useState<any>("")
  const [userDetails, setUserDetails] = useState<any>({})
  const [password, setPassword] = useState<any>("")
  const [error, setError] = useState<any>("")
  const [info, setInfo] = useState<any>("")
  const usernameFieldRef = useRef<any>(null)
  const passwordFieldRef = useRef<any>(null)

  const history = useHistory()
  const [form] = Form.useForm()

  useEffect(() => {
    if (carmel.account && !carmel.account.mnemonic) {
      history.push(props.onAuthRoute)
      return
    }

    usernameFieldRef && usernameFieldRef.current && usernameFieldRef.current.focus()
    passwordFieldRef && passwordFieldRef.current && passwordFieldRef.current.focus()
  }, [])

  useEffect(() => {
    if (!carmel.account) return
    setUser(carmel.account)
  }, [carmel.account])

  useEffect(() => {
    if (!carmel.newEvent) return

    const { newEvent, EVENT } = carmel
    const { type, data } = newEvent
    
    switch(type) {
      case EVENT.STATUS_CHANGED:
        if (data == carmel.SESSION_STATUS.READY) {
          setReady(true)
          setWorking(false)
        }
        break
      case EVENT.USER_LOOKUP_DONE:
          if (!data.login && data.did) {
              setError(`The username is already taken`)
          } else if (data.login && !data.did) {
              setError(`The username does not exist`)
          } else {
            setUsername(data.username)
            setUserDetails(data)
          }
        
          setLogin(data.login)
          setReady(true)
          setWorking(false)
        break
      case EVENT.USER_CREATED:
          setUser(data.user)
          setReady(true)
          setWorking(false)
        break
      case EVENT.USER_LOGIN:
          if (data.error) {
            setError(data.error)
            setUsername(data.username)
            setLogin(true)
            setPassword("")
            setReady(true)
            setWorking(false)
            return 
          }

          showProfile()
        break
    }
  }, [carmel.newEvent])

  const layout = {
    wrapperCol: { span: 24 }
  }

  const tailLayout = {
    wrapperCol: {  span: 24 }
  }

  const onLogout = () => {
    carmel.logout()
  }

  const showProfile = () => {
    setTimeout(() => {
      history.push(props.onAuthRoute)
      location.reload()
    }, 500)
  }

  const onDownload = () => {
    setWorking(true)
    carmel.saveMnemonicToFile(user)
    const t = setTimeout(() => {
      showProfile()
      clearTimeout(t)
    }, 500)
  }

  const onFormChange = () => {
    setError("")
  }

  const renderUsernameField = () => (
    <Form.Item key={"username"} name="username" style={{ width: "100%"}}>
        <Input 
            ref={usernameFieldRef}
            style={{ 
              height: 64,
              opacity: 1.0
            }}
            placeholder={ login ? 'Enter your username' : "Choose a username"  }
            prefix={<UserOutlined style={{ marginLeft: 5 }} />}/>
    </Form.Item>
  )

  const signatureUpload = (info: any) => {
    const reader = new FileReader()
    setWorking(true)

    reader.onloadend = () => {
      carmel.login({
        ...userDetails,
        username, 
        password, 
        signature: reader.result, 
      })
    }

    info && reader.readAsText(info.file.originFileObj)
  }

  const renderPasswordField = () => {
    return <Form.Item key={"password"} name="password" style={{ width: 400 }}>
        <Input.Password
            type={"password"}
            ref={passwordFieldRef}
            onChange={onChangedPassword}
            style={{ 
              height: 64,
              opacity: 1.0
            }}
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            placeholder={ login ? 'Enter your Carmel password' : 'Choose a password' } 
            prefix={<LockOutlined style={{ marginLeft: 5 }} />}/>
        </Form.Item>
    }

  const renderFields = () => {
    return [username ? renderPasswordField() : renderUsernameField()]
  }

  const renderProgress = () => {
    return <Spin tip={info} style={{ marginTop: 10 }}/>
  }

  const onLogin = () => {
    setUsername("")
    setLogin(true)
  }

  const onRegister = () => {
    setUsername("")
    setLogin(false)
  }

  const onFinish = async (v: any) => {
    if (!username && !v.username) {
      setError("Please enter a username")
      return 
    }

    if (!username) {
      setInfo(`Checking if username is available ...`)
      setWorking(true)
      carmel.findUser(v.username, login)
      return
    }

    if (!v.password) {
      setError(login ? "Please enter your password" : "Please choose a password")
      return 
    }

    setInfo(`Creating your Carmel Account ...`)
    setWorking(true)
    carmel.register(username, v.password)
  }

  const onChangedPassword = (e: any) => {
    setPassword(e.target.value)
  }

  const renderError = () => {
    return <Alert message={error} type="error" />
  }

  const validPassword = () => {
    return password && password.length > 1
  }

  const renderAction = () => {
    if (login && username) {
      return <Form.Item key={"signature"} name="signature" style={{ width: 400, textAlign: "center" }}>
              <Upload disabled={!validPassword()} onChange={signatureUpload}>
                <Button disabled={!validPassword()} type="primary" icon={<UploadOutlined />} size="large">
                      Import Your Signature To Sign In 
                </Button>
              </Upload>
        </Form.Item>
    }

    return (<Form.Item {...tailLayout} style={{ paddingTop: 20}}>  
        <Button disabled={false} type="primary" size="large" htmlType="submit" style={{
          opacity: 1.0
        }}>
            { username ? login ? 'Sign In Now' : 'Create Account' : 'Continue'}
        </Button>
    </Form.Item>)
  }

  const renderSubAction = () => {
    return (<Form.Item {...tailLayout} style={{ paddingTop: 20}}>  
        <Button type="link" size={'small'} style={{
          backgroundColor: "#EEEEEE",
          color: "#1976D2"
        }} onClick={login ? onRegister : onLogin}> { login ? `Don't have an account yet?` : `Already have an account?` } </Button>
    </Form.Item>)
  }

  const renderWorkingProgress = () => {
    return <div style={{
        ...styles.layouts.fullscreen,
        backgroundColor: "#ffffff"
      }}>
          { renderProgress() }
      </div>
  }

  const renderDashboard = () => {
    return <div style={{
      boxShadow: "0px 0px 8px #999999",
      alignItems: "center",
      width: 600,
      display: "flex",
      flex: 1,
      flexDirection: "column",
      minHeight: 400,
      maxHeight: 600,
      margin: 20,
      justifyContent: "center",
      padding: 40,
    }}>
      <Title level={2}>
        Welcome to Carmel 
      </Title>
      <Title level={4}>
        This is your Carmel Account recovery phrase. Save it in a safe place.
      </Title>
      <div style={{
        width: "100%",
        display: "flex",
        marginTop: 20,
        marginBottom: 20,
        flex: 1, 
        flexDirection: "row"
      }}>
        <div style={{
        color: "#FDD835",
        display: "flex",
        flex: 1, 
        backgroundColor: "#263238",
        padding: 20, 
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontSize: 30,
      }}>
        { user.mnemonic }
        </div>
      </div>
      <Button type="primary" onClick={onDownload}> Save Recovery Phrase </Button>
    </div>
  }

  const renderForm = () => {    
    return <Form.Provider onFormChange={onFormChange}>
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} style={{
          boxShadow: "0px 0px 8px #999999",
          alignItems: "center",
          width: 600,
          display: "flex",
          flex: 1,
          flexDirection: "column",
          minHeight: 400,
          maxHeight: 600,
          margin: 20,
          justifyContent: "center",
          padding: 40,
      }}>
          <Avatar size="large" src={assets.images.logo} style={{ height: 96, width: 96 }}/>
          <Title level={3}>
              { login ? 'Welcome back to Carmel' : 'Welcome to Carmel' }
          </Title>
          <Paragraph>
              { login ? 'Sign in with your Carmel ID' : 'Sign up to get your FREE Carmel Account' }
          </Paragraph>
          { error && renderError() }
          <div style={{
            display: "flex", 
            flex: 1,
            marginTop: 10,
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>             
            { isWorking || renderFields() }
            { isWorking && renderProgress() }
          </div>
          { isWorking || renderAction() }   
          { isWorking || renderSubAction() }
      </Form>
      </Form.Provider>
  }

  return !isReady ? renderWorkingProgress() : user ? renderDashboard() : renderForm()
}