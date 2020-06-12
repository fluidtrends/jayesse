import React, { useState, useCallback, useEffect, CSSProperties } from 'react'
import { Layout, Button, Affix } from 'antd'
import {
    ScreenProps,
    styles,
    Header
} from '.'

const { Footer, Content } = Layout
const scrollTrigger = 5

export const Screen: React.FC<ScreenProps> = props => {
  const [scrollPosition, setScrollPosition] = useState(0)

  const onScroll = () => {
    const { scrollTop } = document.documentElement || document.body
    setScrollPosition(scrollTop)
  }

  const hasFooter = props.footer !== undefined && props.footer

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    
    return () => window.removeEventListener('scroll', onScroll)  
  }, [])

  return ( 
    <Layout style={styles.screen.container}>
      <Header current={props.id} cover={props.cover} inverted={scrollPosition > scrollTrigger} items={props.routes}/>
      <Content style={styles.screen.main}>
        <props.component {...props} />
      </Content>
      { hasFooter && 
        <Footer style={styles.screen.footer}> 
          { props.footer.watermark }
        </Footer> 
      }
    </Layout>
  )
}

