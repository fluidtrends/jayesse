import React from 'react'
import { Button, Affix } from 'antd'
import { useHistory } from "react-router-dom"
import { HeaderProps, MenuItemProps, Cover, styles } from '.'

export const Header: React.FC<HeaderProps> = props => {
  const history = useHistory()

  const changePage = (item: MenuItemProps) => {
    window.scroll({ top: 0, behavior: 'smooth' })
    history.push(item.path)
  }

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

  const render = () => (
    <Affix offsetTop={0} style={{ width: "100%" }}>
      <div style={{ ...styles.header.header, ...(inverted && styles.header.headerInverted) }}>
        <img src={`assets/logo${inverted ? '-inverted' : ''}.png`} style={styles.header.logo}/>
        <div style={ styles.header.menu }>
          { props.items.map((item: any) => renderMenuItem(item)) }
        </div>
      </div>
    </Affix>  
  )

  return props.cover ? (<Cover {...props.cover}> 
    { render() } 
  </Cover>) : render()
}