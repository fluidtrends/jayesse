import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Layout, Typography, Button } from 'antd'
import { CoverProps } from '../../types/components'
import * as styles from '../../styles'

const { Content } = Layout
const { Title } = Typography

export const Cover: React.FC<CoverProps> = props => {
  const { title, subtitle, action } = props

  return (
    <Fade style={{ width: "100%" }}>
        <Content style={{
            ...styles.layouts.fullscreen, 
            ...styles.layouts.cover,
            backgroundImage: `url(${props.assets.covers[props.image]})`
            }}>
          { props.children }
          <Content style={styles.layouts.overlay}>      
            <Title level={1} style={styles.fonts.title}> { title } </Title>
            <Title level={4} style={styles.fonts.subtitle}> { subtitle } </Title>
            <Button type="primary" href={action.link}> { action.title } </Button>
          </Content>
        </Content>    
      </Fade>
  )
}