import React, { FC } from 'react'
import { Layout, ConfigProvider } from 'antd'

import { MainProps } from '../../types/containers'
import * as styles from '../../styles'
import { Header } from '../components'
import { useScroll } from '../../hooks'

const { Footer, Content } = Layout

export const Main: FC <MainProps> = props => {
  const hasFooter = props.footer !== undefined && props.footer
  const scrollPosition = useScroll() 
  const scrollTrigger = 5

  return ( 
    <Layout style={{ 
      ...styles.layouts.fullscreen 
      }} >
      <ConfigProvider>
        <Header current={props.id} { ...props.header } cover={props.cover} inverted={scrollPosition > scrollTrigger} items={props.routes}/>
        <Content style={styles.layouts.content}>
          <props.component {...props} style={styles.layouts.content}/>
        </Content>
        { hasFooter && 
          <Footer style={styles.layouts.footer}> 
            { props.footer.watermark }
          </Footer> 
        }
      </ConfigProvider>
    </Layout>
  )
}

