import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Layout, Typography, Button } from 'antd'
import { CoverProps } from '../../types/components'
import * as styles from '../../styles'
import ProgressiveImage from 'react-progressive-image'
import { useScroll, useViewport } from '../../hooks'

const { Content } = Layout
const { Title } = Typography

export const Cover: React.FC<CoverProps> = props => {
  const { title, image, assets, subtitle, action, viewport } = props
  const { isSmall, scale, isPortrait } = useViewport()

  const { string, cover } = assets 

  const coverImage = `${cover(image)}/${isPortrait ? 'portrait': 'landscape'}-${scale}x.jpg`
  const coverPlaceholder = `${cover(image)}/placeholder.jpg`

  const onMainAction = () => {

  }

  return (
      <Fade style={{ width: "100%" }}>
                <ProgressiveImage src={coverImage} placeholder={coverPlaceholder}>
                  {(src: any) => (<Content style={{
                      ...styles.layouts.fullscreen, 
                      ...styles.layouts.cover,
                      backgroundImage: `url(${src})`
                      }}>
                         { props.children }
                         <Content style={{
                          ...styles.layouts.overlay,
                          marginTop: (isSmall && isPortrait) ? -30 : 0,
                          }}>
                          <Title level={1} style={{ color: "#ffffff"}}> { string(title) } </Title>
                          <Title level={3} style={{ color: "#ffffff" }}> { string(subtitle) } </Title>
                          <Button 
                              onClick={onMainAction}
                              type="primary"
                              size="large" 
                              style={{ 
                              }}>
                                  { string(action.title) } 
                          </Button>
                         
                        </Content>
                      </Content>
                  )}
                 </ProgressiveImage>
        </Fade>
    )
}