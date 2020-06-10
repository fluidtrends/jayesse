import React, { useState, useCallback, useRef, CSSProperties } from 'react'
import { Layout, Button } from 'antd'
import { useHistory } from "react-router-dom"
import {
    ScreenProps,
    MenuItemProps,
    Navigator
} from '.'

const { Footer, Content } = Layout
const coverOpacity = 0.5

const styles = {
    layout: {
      display: "flex",
      alignItems: "center",
      justifyContent: "top",
      flexDirection: "column",
      backgroundColor: "#000000",
      overflow: "auto",  
      padding: 0,
      margin: 0
    } as CSSProperties,
    menu: {
      display: "flex",
      backgroundColor: `rgba(0,0,0, ${coverOpacity})`,
      border: 'none',
      margin: 0,
      padding: 0,
      justifyContent: "flex-end"
    } as CSSProperties,
    menuItemCurrent: {
      color: "#ffffff",
      margin: "10px",
      borderBottom: "2px solid #ffffff",
      padding: "5px",
      fontSize: "14px"
    } as CSSProperties,
    menuItem: {
      color: "#ffffff",
      margin: "10px",
      padding: "5px",
      fontSize: "14px"
    } as CSSProperties,
    cover: {
      width: "100%",
      height: "400px",
      flex: 1,
      backgroundImage: `url("assets/cover.r.png")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%'
    } as CSSProperties,
    coverContent: {
      display: "flex",
      alignItems: "center",
      height: "100%",
      justifyContent: "center",
      flexDirection: "column",
      backgroundColor: `rgba(0,0,0, ${coverOpacity})`,
      overflow: "auto",  
      color: "#ffffff",
      textShadow: "0px 1px 3px #000000",
      padding: 0,
      margin: 0
    } as CSSProperties,
    coverTitle: {
      color: "#ffffff",
      fontSize: "40px"
    } as CSSProperties,
    main: {
      width: "100%",
      flex: 1,
      display: "flex",
      alignItems: "center",
      height: "100%",
      backgroundColor: "#ffffff",
      justifyContent: "center",
      flexDirection: "column",
      overflow: "auto",  
      padding: 0,
      margin: 0
    } as CSSProperties
}

export const Screen: React.FC<ScreenProps> = props => {
  const [route, setRoute] = useState(props.route)
  const history = useHistory()

  const changePage = (item: MenuItemProps) => {
    history.push(item.path)
  }

  const menuItem = (item: MenuItemProps) => {
    return (
      route.id === item.id ? <p key={item.id} style={styles.menuItemCurrent}> { item.name } </p> :
      <Button type="link" key={item.id} style={styles.menuItem} onClick={() => changePage(item) }>
         { item.name }
      </Button>
  )}

  const menu = () => (
    <div style={styles.menu}>
      { props.routes.map((route: any) => menuItem(route)) }
    </div>
  ) 
  
  const cover = () => {
   return (
      <div style={styles.cover}>
        { menu() }
        <div style={styles.coverContent}>            
            <h1 style={styles.coverTitle}> { route.title } </h1>
        </div>
    </div>
  )}

return ( 
  <Layout style={styles.layout}>
      { cover () }
    <Content style={styles.main}>
        <route.component {...route} />
    </Content>
    <Footer style={{ textAlign: 'center', width: "100%" }}> Made with love with Carmel </Footer>
   </Layout>
  )
}