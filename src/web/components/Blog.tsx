import React, { useRef, useEffect, useState, useCallback } from 'react'
import { Layout, Typography, Card, List, Avatar, Space, Skeleton, Spin } from 'antd'
import { SlideProps, SlideSetProps } from '../../types/components'
import { Text } from '../components'
import { useHistory, useLocation } from "react-router-dom"
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons'
const { Title } = Typography 

const { Content } = Layout
const { Meta } = Card

const IconText = ({ icon, text }: any) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
)

export const Blog: React.FC<SlideSetProps> = props => {
  const { assets } = props 
  const [isLoading, setIsLoading] = useState(true)
  const { authors, posts, post } = assets 
  const history = useHistory()

  useEffect(() => {
    setIsLoading(false)
  }, [])

  const onPostSelected = (post: any) => {
     history.push(`${location.pathname}/${post.slug}`)
  }

  const renderPost = (post: any) => {
    return <Card
    hoverable
    onClick={() => onPostSelected(post)} 
    style={{
      margin: 10,
      width:  "80vh",
      maxWidth: 800
    }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    >
    <Meta
      avatar={<Avatar src={authors[post.author].image} />}
      title={<p style={{}}> { post.title } </p>}
      description={<span style={{ }}> { `${authors[post.author].fullname} on ${post.date}`}</span>}
    />
  </Card>
  }

  const renderPos2t = (post: any) => {
    return <Card 
        hoverable
        onClick={() => onPostSelected(post)} style={{
          margin: 10,
          maxWidth: 800
        }}>
        <List.Item
          key={post.title}
          actions={[
          ]}
          extra={
            <img
              width={272}
              alt="cover"
              src={post.cover}
            />
          }
        >
        
          <List.Item.Meta
            avatar={<Avatar src={authors[post.author].image} />}
            title={<p style={{ color: "#333333" }}> ?????{ post.title } </p>}
            description={`written by ${authors[post.author].fullname} on ${post.date}`}
          />
            {post.preview}
        </List.Item>
      </Card>
  }

  const renderPosts = () =>  {
    return <List
    itemLayout="vertical"
    size="large"
    dataSource={posts}
    renderItem={renderPost}/>
  }

  const renderLoading = () =>  {
    return  <Spin size="large" />
  }

  return (<div style={{
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        marginTop: 50,
        width: "100%",
        backgroundColor: "#ffffff",
        flexDirection: "column"
    }}>
         { isLoading ?  renderLoading() : renderPosts() }
    </div>)
  }


