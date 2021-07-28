import React from 'react'
import { Layout, Button, } from 'antd'
import { SlideProps, SlideSetProps } from '../../types/components'
import { Text } from '../components'
import { useHistory } from "react-router-dom"

const { Content } = Layout

export const Slide: React.FC<SlideProps> = props => {
  const { imageFirst, horizontal, text, image, viewport, action, assets } = props
  const { isSmall } = viewport
  const history = useHistory()

  const layout = {
      ...props.layout 
  }

  const onMainAction = () => {
    if (!action.link) return 
     action.link.startsWith("http") ? window.location.replace(action.link!) : history.push(action.link)
  }

  const renderAction = () => (
    <Button 
    type="primary"
    size="large" 
    onClick={onMainAction}
    style={{ 
      minWidth: 300,
      margin: props.image && !props.viewport.isSmall ? "-20px 0 40px 40px" : "-20px 0 40px 0px"
    }}>
      { assets.string(action.label) }
    </Button>
  )

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
      layout={{
        ...props.layout,
        maxWidth:  props.image ? "60vw" : "90vw",
      }}
      style={{
        display: 'flex',
        flex: 1  
      }}/>
        { props.action && renderAction() }
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
            flexDirection: props.viewport.isSmall || horizontal ? 'column' : 'row'   
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
      width: "100%",
      flexDirection: "column"
  }}>
    { slides.map((slide: SlideProps, i: number) => (
        <Slide key={`${i}`} {...slide} {...props}/>
    ))}
  </div>)
  }