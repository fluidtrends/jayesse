import React from 'react'
import { Layout, Button, } from 'antd'
import { SlideProps, SlideSetProps } from '../../types/components'
import { Text } from '../components'

const { Content } = Layout

export const Slide: React.FC<SlideProps> = props => {
  const { imageFirst, text, image, viewport, action, assets } = props
  const { isSmall, isPortrait } = viewport
  const layout = {
      backgroundColor: "#ffffff",
      ...props.layout 
  }

  const renderText = () => (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: props.image && !props.viewport.isSmall ? "flex-start" : "center"
    }}>
      <Text {...props} source={text} 
      heading={{
        textAlign: props.image ? "left" : "center"
      }}
      paragraph={{
        textAlign: props.image ? "left" : "center"
      }}
      style={{
        display: 'flex',
        flex: 1  
      }}/>
       <Button 
            type="primary"
            size="large" 
            style={{ 
              minWidth: 300,
              margin: props.image && !props.viewport.isSmall ? "-20px 0 40px 40px" : "-20px 0 40px 0px"
            }}>
            { assets.string(action.label) }
      </Button>
    </div>
  )

  const renderImage = () => (
    <img src={props.assets.image(image)} style={{
        display: 'flex',
        width: props.viewport.isSmall || !props.image ? "100%" : "40%",
        margin: 20,
        flex: 1
    }}/>
  )

  return (
    <Layout style={{ 
            width: "100%", 
            backgroundColor: "#fffff",
            alignItems: "center",
            padding: props.depth ? 20 : 0,
            justifyContent: "center"
        }}>
        <Content style={{ 
            display: 'flex',
            boxShadow: props.depth ? "0 0 10px #CCCCCC" : 0,
            justifyContent: "center",
            alignItems: "center",
            ...layout,
            width: "100%", 
            padding: 40,
            flexDirection: props.viewport.isSmall ? 'column' : 'row'   
        }}>
            { (imageFirst || (isSmall)) && props.image && renderImage() }
            { renderText() }
            { !(imageFirst || (isSmall)) && props.image && renderImage() }
        </Content>
    </Layout>
    )
}

export const SlideSet: React.FC<SlideSetProps> = props => {
  const { slides } = props 

  return (<div style={{
      display: 'flex',
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
  }}>
    { slides.map((slide: SlideProps) => (
        <Slide {...slide} {...props}/>
    ))}
  </div>)
  }