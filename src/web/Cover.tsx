import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Layout } from 'antd'
import { CoverProps, styles } from '.'
const { Content } = Layout

export const Cover: React.FC<CoverProps> = props => {
  return (
    <Fade style={{ width: "100%" }}>
        <Content style={styles.cover.container}>
          { props.children }
          <Content style={styles.cover.content}>            
            <h1 style={styles.cover.title}> { props.title } </h1>
            <h2 style={styles.cover.subtitle}> { props.subtitle } </h2>
          </Content>
        </Content>    
      </Fade>
  )
}