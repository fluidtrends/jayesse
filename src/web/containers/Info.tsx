import React, { FC } from 'react'
import { Fade } from 'react-awesome-reveal'
import { Layout, Typography } from 'antd'

import { ContainerProps } from '../../types/containers'
import * as styles from '../../styles'

const { Content } = Layout
const { Title } = Typography 

export const Info: FC <ContainerProps> = props => {
  console.log(props)
  return (
    <Fade style={{ width: "100%" }}>
      <Content style={{
        ...styles.layouts.fullscreen
        }}>
        <Title level={1}> { props.title } </Title>
        <Title level={3}> { props.subtitle } </Title>
      </Content>    
    </Fade>
  )
}