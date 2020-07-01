import React, { useCallback } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons'

import { MenuProps, MenuItemProps } from '../../types/components'
import * as styles from '../../styles'

const { SubMenu, Item } = Menu
const { Header, Content, Sider } = Layout

export const SideMenu: React.FC<MenuProps> = props => {

    const onSelect = useCallback((item: any) => {
        props.onSelect && props.onSelect(item.key)
    }, [])
    
    const renderMenuItems = (items: MenuItemProps[]) => {
        return props.items.map((item: MenuItemProps) => renderMenuItem(item))
    }

    const renderSubMenuItems = (item: MenuItemProps) => {
        return (
            <SubMenu key={item.path} title={item.name}>
                { item.items!.map((item: MenuItemProps) => renderMenuItem(item)) }
            </SubMenu>
        )
    }

    const renderMenuItem = (item: MenuItemProps) => {
        return item.items ? renderSubMenuItems(item) :
                (<Item key={item.path}> 
                    { item.name } 
                </Item>)
    }
    
    return (
        <Sider width={160} className="site-layout-background" style={{
        }}>
            <Menu
                mode="inline"
                onSelect={onSelect}
                defaultSelectedKeys={[props.selected]}
                style={{ height: '100%', borderRight: 0
            }}>
                { renderMenuItems(props.items) }
            </Menu>
        </Sider>
    )
}