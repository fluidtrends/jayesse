import React, { useState } from 'react'
import { Button, Affix, Drawer, Avatar } from 'antd'
import { MenuFoldOutlined, CloseOutlined } from "@ant-design/icons"
import { useHistory } from "react-router-dom"
import { HeaderProps, MenuItemProps } from '../../types/components'
import { Cover } from '.'
import * as styles from '../../styles'
import { useScroll, useViewport } from '../../hooks'

export const Header: React.FC<HeaderProps> = props => {
  const viewport = useViewport()
  const { isSmall, isPortrait } = viewport
  const scroll = useScroll() 

  const history = useHistory()
  const [drawerVisible, setDrawerVisibility] = useState(false)
  
  const changePage = (item: MenuItemProps) => {
    window.scroll({ top: 0, behavior: 'smooth' })
    item.path && history.push(item.path)
  }

  const Icon = (props: any) => {
    const Comp = require(`@ant-design/icons`)[props.name]
    return <Comp/>
  }

  const needsDepth = scroll.isScrolled
  const inverted = scroll.isScrolled || props.cover === undefined

  const renderMenuItem = (item: MenuItemProps) => {
    return (
      props.current === item.id ? 
        <p key={item.id} style={{ ...styles.header.menuItemCurrent, ...(inverted && styles.header.menuItemCurrentInverted)  }}> 
          { item.name } 
        </p> :
        <Button type="link" key={item.id} onClick={() => changePage(item) }
                style={{ ...styles.header.menuItem, ...(inverted && styles.header.menuItemInverted) }}>
            { item.name }
        </Button>
  )}

  const renderDrawerMenuItem = (item: MenuItemProps) => (
    <Button
      onClick={() => props.current === item.id || changePage(item)}
      size="large"
      type="link"
      style={{ 
        color: "#333333", 
        backgroundColor: "#ffffff" 
      }}>
      { item.name }
    </Button>
  )

  const toggleDrawer = () => setDrawerVisibility(!drawerVisible)

  const renderDrawer = () => (
    <Drawer
      placement="left"
      closable={true}
      closeIcon={<CloseOutlined style={{
        fontSize: viewport.fonts.l
      }}/>}
      bodyStyle={styles.header.drawer}
      onClose={toggleDrawer}
      visible={drawerVisible}
      width="50vw"
      key={"drawer"}>
          { props.items.map((item: any) => renderDrawerMenuItem(item)) }
    </Drawer>
  )

  const renderAction = () => (
    props.action ? <Button type="link" key={'action'} href={ props.action && props.action!.link}
          style={{ ...styles.header.menuItemIcon, ...styles.header.menuRight,  ...(inverted && styles.header.menuItemInverted) }}>
        <Icon name={props.action!.icon}/>
    </Button> : <div/>
  )

  const logo = (inverted ? props.assets.images.logo : props.assets.image('logo-light.png'))
  
  const renderDrawerButton = () => {
    return (
      <div style={styles.header.menuItemIcon}>
        <Button
          onClick={toggleDrawer}
          size="large"
          style={{ color: inverted ? "#333333" : "#ffffff" }}
          icon={<MenuFoldOutlined/>}
          />
      </div>
    )
  }

  const renderMenuItems = () => {
    return (
      <div style={ styles.header.menu }>
        { props.items.map((item: any) => renderMenuItem(item)) }
      </div>
    )
  }

  const render = () => (
    <Affix offsetTop={0} style={styles.header.top}>
      <div style={{ 
        ...styles.header.header, 
        ...(inverted && styles.header.headerInverted), 
        ...(needsDepth && styles.header.headerDepth),
        ...(isSmall && isPortrait && styles.header.headerLarge),
        }}>
          { isSmall && isPortrait && renderDrawerButton() }
             <Avatar
                size="large"
                src={logo}
            />
            
            { isSmall && isPortrait && renderAction() }
            { (isSmall && isPortrait) || renderMenuItems() }           
            { isSmall && isPortrait && renderDrawer() }
        </div>
    </Affix> 
  )
  
  return props.cover ? (<Cover {...props.cover} {...props}> 
    { render() } 
  </Cover>) : render()
}