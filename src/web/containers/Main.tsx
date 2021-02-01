import React, { FC } from 'react'
import { Layout, Typography, ConfigProvider } from 'antd'

import { ContainerProps } from '../../types/containers'
import * as styles from '../../styles'
import { Header } from '../components'

const { Footer, Content } = Layout
const { Paragraph } = Typography

export const Main: FC <ContainerProps> = props => {
  const hasHeader = true
  const hasContent = true 
  const hasFooter = props.footer !== undefined && props.footer

  const renderHeader = () => (
    <Header {...props} current={props.id} { ...props.header } cover={props.cover} items={props.routes.public}/>
  )

  const renderContent = () => (
    <Content style={{
      ...styles.layouts.content
      }}>
        { props.children }
    </Content>
  )

  const renderFooter = () => (
    <Footer style={styles.layouts.footer}> 
      <Paragraph>
        { props.footer.watermark }
      </Paragraph>
    </Footer> 
  )

  return ( 
    <ConfigProvider>
      <Layout style={{ 
        ...styles.layouts.fullscreen
        }} >
          { hasHeader && renderHeader() }
          { hasContent && renderContent () }
          { hasFooter && renderFooter() }
      </Layout>
    </ConfigProvider>
  )
}

