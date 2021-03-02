import React, { useRef, useEffect, createContext, useState, useCallback } from 'react'
import * as styles from '../../styles'
import { Layout, Menu, Dropdown, Switch, Typography, PageHeader, Empty, Button, Skeleton, Input, Form, Spin, Tag, Badge, Divider, List, Avatar, Space  } from 'antd'
import {
  ArrowLeftOutlined,
  UploadOutlined,
  DownOutlined,
  LikeOutlined,
  MessageOutlined,
  UserOutlined,
  CloseOutlined, 
  CheckOutlined, 
  AppstoreOutlined,
  NotificationOutlined
} from '@ant-design/icons'
import { useHistory } from "react-router-dom"
import { EditorState } from "draft-js"
import ReactQuill from 'react-quill'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu
const { Title, Text } = Typography

export const DataList: any = ({ data, title }: any) => {
    const [isWorking, setWorking] = useState(false)
    const { list } = data
    
    // const Icon = (props: any) => {
    //   const Comp = require(`@ant-design/icons`)[props.name]
    //   return <Comp/>
    // }
    
    const onEditItem = (p: any) => {
      data.list.select(p.id)
      // setPost(p)
      // form.setFieldsValue({ headline: p.title })
      // setShowEditor(true)
    }

    const onDeleteItem = (p: any) => {
      data.list.delete(p.id)
      //  await data.posts.removeRow(p.id)
      //  setPosts(data.posts.rows)
    }

    const onCreateItem = () => {
      data.list.add()
      // data.startEditing()
    }

    const renderMenu = () => {
      if (list.isEmpty()) {
        return <div/>
      }

      return <PageHeader
          style={{
            width: "100%",
            padding: 10,
            margin: 0,
            marginBottom: 20
          }}
          extra={[
            <Button style={{}} type="primary" key="add" onClick={onCreateItem}>
              { 'Create New' }
            </Button>
          ]}>
            <div style={{}}>
                <Title level={2}> { title } </Title>              
            </div>
          </PageHeader>
    }

    const renderProgress = () => {
      return <Spin style={{ marginTop: 10 }}/>
    }

    const renderList = () => {  
      if (isWorking) {
        return renderProgress()
      }  

      if (list.isEmpty()) {
        return <Empty  image={Empty.PRESENTED_IMAGE_SIMPLE}
                imageStyle={{
                  height: 60,
                }}
                description={
                  <span>
                    No posts yet
                  </span>
                }
              >
                <Button type="primary" onClick={onCreateItem}> Create New </Button>
              </Empty>
      }

      return <List
            itemLayout="horizontal"
            size="large"
            style={{
              width: "100%"
            }}
            dataSource={list.all()}
            renderItem={(item: any) => (
              <List.Item
                style={{ 
                  backgroundColor: "#ffffff", 
                  width: "100%",
                  marginBottom: 20 
                }}
                key={item.title}
                actions={[
                  <a key="list-edit" onClick={() => onEditItem(item)}> edit </a>,
                  <a key="list-edit" style={{color: "#C2185B"}} onClick={() => onDeleteItem(item)}> delete </a>
                ]}>
                <List.Item.Meta
                  title={<a href={item.href}> {item.title} </a>}
                />
                {/* <Tag style={{ width: 60, textAlign: "center" }} color={ item.status.toUpperCase() === 'DRAFT' ? 'warning' : 'success' }> 
                        { item.status.toUpperCase() } 
                </Tag>  */}
              </List.Item>
            )}
          />
    }

    const renderContent = () => {
        return  <div style={{
          ...styles.layouts.fullscreen,
           height: "100%", 
           width: "100%",
           display: "flex",
           flexDirection: "column",
           alignItems: "center",
           justifyContent: list.isEmpty() ? 'center' : 'flex-start',
           padding: 20,
           flex: 1,
           backgroundColor: "#f5f5f5" 
           }}>
             { renderMenu() }
             { renderList() }
      </div>
    }

    return renderContent()
}