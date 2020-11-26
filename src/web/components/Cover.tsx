import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Layout, Typography, Button } from 'antd'
import { CoverProps } from '../../types/components'
import * as styles from '../../styles'
import ProgressiveImage from 'react-progressive-image'
import { useViewport } from '../../hooks'
import { useHistory } from "react-router-dom"

const { Content } = Layout
const { Title } = Typography

export const Cover: React.FC<CoverProps> = props => {
  const { title, image, assets, subtitle, action } = props
  const { isSmall, scale, isPortrait, isMobile } = useViewport()
  const history = useHistory()

  const { string, cover } = assets 

  const coverImage = `${cover(image)}/${isPortrait ? 'portrait': 'landscape'}@${scale}x.png`
  const coverPlaceholder = `${cover(image)}/placeholder.png`

  const onMainAction = () => {
    if (!action.link) return 
     action.link.startsWith("http") ? window.location.replace(action.link!) : history.push(action.link)
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