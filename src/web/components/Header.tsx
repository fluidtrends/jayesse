import React, { useState } from 'react'
import { Button, Affix, Drawer } from 'antd'
import { useHistory } from "react-router-dom"
import { MenuFoldOutlined } from '@ant-design/icons'
import MediaQuery from 'react-responsive'
import { HeaderProps, MenuItemProps } from '../../types/components'
import { Cover } from '.'
import * as styles from '../../styles'

export const Header: React.FC<HeaderProps> = props => {
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

  const needsDepth = props.inverted
  const inverted = props.inverted || props.cover === undefined

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
      props.current === item.id ? 
        <p key={item.id} style={{ ...styles.header.menuDrawerItem, ...styles.header.menuDrawerItemCurrent  }}> 
          { item.name } 
        </p> :
        <Button type="link" key={item.id} onClick={() => changePage(item) }
                style={{ ...styles.header.menuDrawerItem }}>
            { item.name }
        </Button>
  )

  const toggleDrawer = () => setDrawerVisibility(!drawerVisible)

  const renderDrawer = () => (
    <Drawer
          placement="left"
          closable={true}
          bodyStyle={styles.header.drawer}
          onClose={toggleDrawer}
          visible={drawerVisible}
          key={"drawer"}
        >
           { props.items.map((item: any) => renderDrawerMenuItem(item)) }
    </Drawer>
  )

  const renderAction = () => (
    props.action ? <Button type="link" key={'action'} href={ props.action && props.action!.link}
          style={{ ...styles.header.menuItemIcon, ...styles.header.menuRight,  ...(inverted && styles.header.menuItemInverted) }}>
        <Icon name={props.action!.icon}/>
    </Button> : <div/>
  )

  const render = () => (
    <Affix offsetTop={0} style={styles.header.top}>
      <div style={{ ...styles.header.header, ...(inverted && styles.header.headerInverted), ...(needsDepth && styles.header.headerDepth) }}>
        <MediaQuery maxWidth={768}>
          <Button type="link" key={'menu'} onClick={toggleDrawer}
                style={{ ...styles.header.menuItemIcon, ...(inverted && styles.header.menuItemInverted) }}>
            <MenuFoldOutlined />
          </Button>
        </MediaQuery>
        <img src={`/assets/logo${inverted ? '-inverted' : ''}.png`} style={styles.header.logo}/>
          <MediaQuery maxWidth={768}>
            { renderAction() }
          </MediaQuery>
          <MediaQuery minWidth={768}>
            <div style={ styles.header.menu }>
            { props.items.map((item: any) => renderMenuItem(item)) }
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={768}>
          { renderDrawer() }
          </MediaQuery>
        </div>
    </Affix> 
  )
  
  return props.cover ? (<Cover {...props.cover}> 
    { render() } 
  </Cover>) : render()
}