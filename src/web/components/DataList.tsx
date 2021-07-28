import React, { useState } from 'react'
import * as styles from '../../styles'
import { Typography, PageHeader, Spin, Empty, Button, List  } from 'antd'

const { Title, Text } = Typography

export const DataList: any = ({ data, title }: any) => {
    const [isWorking, setWorking] = useState(false)
    const { list } = data
    
    const onEditItem = (p: any) => {
      data.list.select(p.id)
    }

    const onDeleteItem = (p: any) => {
      data.list.delete(p.id)
    }

    const onCreateItem = () => {
      data.list.add()
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

    const renderItemTags = (tags: string[]) => {
            // {/* <Tag style={{ width: 60, textAlign: "center" }} color={ item.status.toUpperCase() === 'DRAFT' ? 'warning' : 'success' }> 
            //             { item.status.toUpperCase() } 
            //   </Tag>  */}
        return <div/>
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
                { renderItemTags (item) }
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