import React, { useRef, useEffect, useState, useCallback } from 'react'
import { Layout, Avatar, Spin } from 'antd'
import { SlideProps, SlideSetProps } from '../../types/components'
import { Text, Cover } from '../components'
import { useHistory, useLocation } from "react-router-dom"
import { Fade } from 'react-awesome-reveal'
import { CoverProps } from '../../types/components'
import * as styles from '../../styles'
import ProgressiveImage from 'react-progressive-image'
import { hooks } from '@carmel/js/src'

const { useScroll, useViewport } = hooks 
const { Content } = Layout

export const Article = (props: any) => {
  const { assets } = props 
  const [data, setData] = useState<any>()
  const [isLoading, setIsLoading] = useState(true)
  const [notFound, setIsNotFound] = useState(false)
  const { authors, posts, post } = assets 
  const history = useHistory()
  const location = useLocation()
  const slug = location.pathname.substring(props.path.substring(0, props.path.indexOf(':')).length)
  const { isSmall, scale, isPortrait, isMobile } = useViewport()
  const { string, cover } = assets 

  useEffect(() => {
    const found = posts.find((post: any) => post.slug === slug)

    if (!found)  {
      setIsNotFound(true)
      setIsLoading(false)
      return
    }

    setData(found)
    setIsLoading(false)
  }, [])

  const coverImage = `${cover("top")}/${isPortrait ? 'portrait': 'landscape'}@${scale}x.png`
  const coverPlaceholder = `${cover("top")}}/placeholder.png`

  const renderCover =  () => {
    return  <Fade style={{ width: "100%" }}>
                <ProgressiveImage src={coverImage} placeholder={coverPlaceholder}>
                  {(src: any) => (<Content style={{
                      ...styles.layouts.fullscreen, 
                      ...styles.layouts.cover,
                      backgroundImage: `url(${src})`
                      }}>
                      </Content>
                  )}
                 </ProgressiveImage>
        </Fade>
  }

  const renderText = () => {
    return <Text {...props} isPost source={`posts/${slug}`} 
      heading={{
        textAlign: "left"
      }}
      paragraph={{
        textAlign: "left"
      }}
      layout={{
        ...props.layout,
        backgoundColor: "#ffffff",
        maxWidth:  props.image ? "60vw" : "90vw",
      }}
      style={{
        display: 'flex',
        flex: 1  
      }}/>
  }

  const renderAuthor = () => {
    return <div style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}>
        <Avatar src={authors[data.author].image}
          size={{ xs: 60, sm: 60, md: 60, lg: 64, xl: 80, xxl: 100 }}
          style={{
        }}/>
        <span> { `${authors[data.author].fullname} on ${data.date}`} </span>
      </div>
  }

  const renderPost = () =>  {
      return <div style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: props.image && !props.viewport.isSmall ? "flex-start" : "center"
          }}>
            { renderCover()  }
            { renderAuthor() }
            { renderText() }
          </div> 
  }
  
  const renderLoading = () =>  {
    return <Spin size="large" />
  }

  const renderNotFound = () =>  {
    return <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center"
    }}>
      <h2> Post not found </h2>
    </div>
  }
      
  return (<div style={{
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        width: "100%",
        overflow: "auto",
        flexDirection: "column"
    }}>
      { isLoading ? renderLoading() : (notFound ? renderNotFound() : renderPost()) }
    </div>)
  }