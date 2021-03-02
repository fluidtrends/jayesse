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

export const PostEditor: any = ({ data }: any) => {
    const [value, setValue] = useState('')
    const [post, setPost] = useState(data.list.selection())

    // const [content, setContent] = useState('')
    // // const [post, setPost] = useState<any>(data.posts.current)
    // const [newPostId, setNewPostId] = useState<any>()
    // const [postContent, setPostContent] = useState<any>('')
    // // const [showEditor, setShowEditor] = useState(data.posts.current)
    // const [editorState, setEditorState] =  useState(EditorState.createEmpty())
    // const [isWorking, setWorking] = useState(false)
    // const [section, setSection] = useState("profile")
    // const [saveTimer, setSaveTimer] = useState<any>()

    const headline = useRef<any>(null)

    // const history = useHistory()
    const [form] = Form.useForm()
    // const [posts, setPosts] = useState<any>([])
    
    const Icon = (props: any) => {
      const Comp = require(`@ant-design/icons`)[props.name]
      return <Comp/>
    }
    
    const layout = {
      wrapperCol: { span: 24 }
    }

    const tailLayout = {
      wrapperCol: {  span: 24 }
    }
     
    const onChange = (e: any) => {
      setValue(e)
    }

    const save = async (status: string = "live") => {
      // const title =  form.getFieldValue('headline')
      // const timestamp = Date.now()

      // const { cid, size } = await carmel.session.node.push('posts_current', {
      //   body: value,
      //   timestamp,
      //   status,
      //   title
      // })

      // await data.posts.updateRow(newPostId, ({ title, cid, size, timestamp, status }))
    }

    const publish = () => {

    }

    const onEditHeader = (e: any) => {
        data.list.update(post.id, { title: e.target.value })
    }

    const onEditPost = (p: any) => {
      // setPost(p)
      // form.setFieldsValue({ headline: p.title })
      // setShowEditor(true)
    }

    const onDeletePost = (p: any) => {
      //  await data.posts.removeRow(p.id)
      //  setPosts(data.posts.rows)
    }

    const onBackToPosts = () => {
      // if (!form.getFieldValue('headline')) {
        // await data.posts.removeRow(newPostId)
      // } else {
        // await save()
      // }

      // setPost('')
      // setPostContent('')
      // setNewPostId('')
      // form.setFieldsValue({ headline: '' })
      // setPosts(data.posts.rows)

      form.resetFields()
      data.list.deselect()
    //   setShowEditor(false)
    //   data.posts.stopEditing()
    }

    const onFinish = (v: any) => {
    }

    const renderMenu = () => {
      return <PageHeader
          title={ <Text type="secondary" style={{ fontWeight: 300 }}> { 'back to posts' } </Text>}
          onBack={onBackToPosts}
          backIcon={<ArrowLeftOutlined style={{color: "#1E88E5", fontSize: 20, fontWeight: 700 }}/>}
          style={{
            width: "100%",
            padding: 10,
            margin: 0,
            marginBottom: 20
          }}
          extra={[
            <a key="save" onClick={() => save('draft')}>
              { 'Save Draft' }
            </a>,
            <Button style={{
            }} type="primary" key="editor" onClick={publish}>
              { 'Publish Live'  }
            </Button>
          ]}>
            <div style={{}}>
              <Title level={2}>
                  { post ? 'Edit post' : 'Create a new post' } </Title>              
             </div>
          </PageHeader>
    }

    const renderHeadlineField = () => {
      return <Form.Item key={"headline"} name="headline" initialValue={ post ? post.title : "" }
              style={{ width: "100%"}}>
                  <Input 
                        ref={headline}
                        onChange={onEditHeader}
                        style={{ 
                          height: 48
                        }}
                  placeholder={ "Enter a headline for this post" }/>
      </Form.Item>
    }

    const modules = {
      toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
      ],
    }
  
    const formats = [
      'header',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image'
    ]

    const renderEditor = () => {
      return (<div style={{
        width: "100%",
        backgroundColor: "#ffffff",
        height: "70vh",
        padding: 0,
        margin: 0,
        overflowY: "scroll"
      }}>
          <ReactQuill
            style={{
            width: "100%",
            backgroundColor: "#ffffff",       
            paddingBottom: 42,         
            height: "100%"
            }}
            formats={formats}
            modules={modules}
            value={value}
            onChange={onChange}
        />
      </div>)
    }

    const renderCompose = () => {    
      return <Form.Provider>
          <Form {...layout} form={form} name="container" onFinish={onFinish} style={{
            alignItems: "center",
            width: "100%",
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            padding: 0,
            margin: 0
          }}>
            { renderHeadlineField() }
            { renderEditor() }
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
           justifyContent: 'flex-start',
           padding: 20,
           flex: 1,
           backgroundColor: "#f5f5f5" 
           }}>
             { renderMenu() }
             { renderCompose() }
      </div>
    }

    return renderContent()
}