import React, { FC } from 'react'
import { Fade } from 'react-awesome-reveal'
import { Layout } from 'antd'

import { InfoProps } from '../../types/containers'
import * as styles from '../../styles'

const { Content } = Layout

export const Info: FC <InfoProps> = props => {
  return (
    <Fade style={{ width: "100%" }}>
      <Content style={styles.layouts.fullscreen}>
        <h1 style={styles.fonts.title}> { props.title } </h1>
        <h2 style={styles.fonts.subtitle}> { props.subtitle } </h2>
      </Content>    
    </Fade>
  )
}