import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Layout } from 'antd'
import { NotFoundProps, styles } from '.'
const { Content } = Layout

export const NotFound: React.FC<NotFoundProps> = props => {
  return (
    <Fade style={{ width: "100%" }}>
      <Content style={styles.notfound.container}>
        <h1 style={styles.notfound.title}> { props.title } </h1>
        <h2 style={styles.notfound.subtitle}> { props.subtitle } </h2>
      </Content>    
    </Fade>
  )
}