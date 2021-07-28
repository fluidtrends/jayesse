import React from 'react'
import { Layout,Result, Button, } from 'antd'
import { SlideProps, SlideSetProps } from '../../types/components'
import { Text } from '../components'
import { useHistory } from "react-router-dom"
import { CommentOutlined, GithubOutlined, NotificationOutlined } from '@ant-design/icons'

const { Content } = Layout

export const Community: React.FC<any> = props => {
  const { username, hash } = props 

  return (<div style={{
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#ffffff",
        flexDirection: "column"
    }}>
  <Result
    status="success"
    title="Come join the conversation"
    subTitle="Make your voice heard in the Carmel Community"
    extra={[
      <Button type="primary" icon={<NotificationOutlined />} key="1" href="http://t.me/carmelplatform">
        Telegram
      </Button>,
       <Button type="primary" icon={<CommentOutlined />}  key="2" href="https://forums.eoscommunity.org/c/carmel/31">
        EOSCommunity
     </Button>,
      <Button type="primary" icon={<GithubOutlined />}  key="3" href="https://github.com/fluidtrends/carmel">
        GitHub
      </Button>
    ]}
  />
    </div>)
  }


