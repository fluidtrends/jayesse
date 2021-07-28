import React, { useRef, useEffect, createContext, useState, useCallback } from 'react'
import * as styles from '../../styles'
import { Layout, Menu, Upload, Card, Typography, PageHeader, Empty, Button, Skeleton, Input, Form, Spin, Tag, Badge, Divider, List, Avatar, Space  } from 'antd'
import {
  ArrowLeftOutlined,
  UploadOutlined,
  DownOutlined,
  LikeOutlined,
  MessageOutlined,
  InboxOutlined,
  CloseOutlined, 
  CheckOutlined, 
  AppstoreOutlined,
  NotificationOutlined
} from '@ant-design/icons'
import { useHistory } from "react-router-dom"
import { EditorState } from "draft-js"
// import ReactQuill from 'react-quill'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu
const { Title, Text } = Typography
const { Dragger } = Upload
const { Meta } = Card 

export const PostEditor: any = ({ data }: any) => {
    const post = data.list.selection()
    const [cover, setCover] = useState<any>(post.cover)
    const headline = useRef<any>(null)
    const [form] = Form.useForm()
    const [files, setFiles] = useState([])

    console.log("post:", post)
    // console.log("state:", data.state)

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
     
    const onEditBody = (e: any) => {
      data.list.updateBlob(post.id, "body", e)
    }

    const saveDraft = () => {
    //   const title =  form.getFieldValue('headline')
    //   const timestamp = Date.now()

    //   const snapshot = {
    //       body,
    //       timestamp,
    //       title
    //   }

    //   console.log(snapshot)
        data.list.push(post.id, { draft: true })

      // const { cid, size } = await carmel.session.node.push('posts_current', snapshot)

      // await data.posts.updateRow(newPostId, ({ title, cid, size, timestamp, status }))
    }

    const publish = () => {
        data.list.push(post.id, { draft: false })
    }

    const onEditHeader = (e: any) => {
        data.list.update(post.id, { title: e.target.value })
    }

    const onBackToPosts = () => {
      form.resetFields()
      data.list.deselect()
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
            <a key="save" onClick={saveDraft}>
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

    const imageToBase64 = async (file: any) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = () => resolve(reader.result)
          reader.onerror = error => reject(error)
        })
    }

    const onCoverUpload = async ({ onSuccess, file }: any) => {
        const imageData = await imageToBase64(file)
        data.list.updateBlob(post.id, "cover", imageData, "image")
        setCover(imageData)
        onSuccess(true)
    }

    const renderCoverImage = () => {
        if (!cover) {
            return <div/>
        }

        return <img alt="cover" width="100%" src={cover}/>
    }

    const renderCoverField = () => {
        return <Form.Item key={"cover"} name="cover"
                style={{ width: "100%"}}>
                     <Dragger 
                     accept="image/*"
                     showUploadList={false}
                     customRequest={onCoverUpload}
                     style={{
                        border: "none", backgroundColor: "#f5f5f5"
                     }}>
                         <Card
                            hoverable
                            style={{ width: "100%" }}
                            cover={renderCoverImage()}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p>
                                Click or drag to edit the cover image
                            </p>
                        </Card>
                    </Dragger>
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
      return <div/>
      // return (<div style={{
      //   width: "100%",
      //   backgroundColor: "#ffffff",
      //   height: "70vh",
      //   padding: 0,
      //   margin: 0,
      //   overflowY: "scroll"
      // }}>
      //     <ReactQuill
      //       style={{
      //       width: "100%",
      //       backgroundColor: "#ffffff",       
      //       paddingBottom: 42,         
      //       height: "100%"
      //       }}
      //       formats={formats}
      //       modules={modules}
      //       value={post.body || ""}
      //       onChange={onEditBody}
      //   />
      // </div>)
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
            { renderCoverField () }
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