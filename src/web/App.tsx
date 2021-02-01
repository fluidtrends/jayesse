import React from 'react'
import {
   Switch,
   Redirect,
   Route
} from "react-router-dom"
import { Containers, Components } from '.'
import { AppProps, Containers as ContainersProps } from '../types'
import { useViewport } from '../hooks'
import { hooks } from '@carmel/js'
import * as globals from './Globals'
import { Spin } from 'antd'
import * as styles from '../styles'

const { useCarmel } = hooks

/**
 * 
 * @param props 
 */
export const App: React.FC<AppProps> = (props) => {  
  const viewport = useViewport()
  const carmel = useCarmel(props)

  const renderComponent = (component: any) => {
    const Comp = "function" === (typeof component) ? component : Components[component.id as keyof typeof Components]
    const compProps = "function" === (typeof component) ? {} : component

    return (<div style={{
      backgroundColor: "#ffffff",
      width: "100%",
      margin: 0,
      padding: 0,
      display: "flex",
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Comp {...props} carmel={carmel} viewport={viewport} {...compProps}/>
    </div>)
  }

  const Container = (route: any) => {
    const containerId: keyof typeof Containers = (route.type || "main").charAt(0).toUpperCase() + (route.type || "main").toLowerCase().substring(1)
    const Cont = Containers[containerId] 

    return (<Cont {...props} {...route}>
       { route.components.map((component: any) => renderComponent(component) )}
    </Cont>)
  }

  const renderRoute = (route: any) => {
     if (!carmel.ready) {
        return <div style={{
           ...styles.layouts.fullscreen
        }}>
           <Spin/>
        </div>
     }

     if (route.isPrivate && !carmel.account) {
        return <Redirect to={{ pathname: "/auth" }} />
     }

     return  [<Container {...route} />, <style jsx global> { globals.styles({ viewport, theme: props.theme }) } </style>]
  }

  return (
      <Switch>
         { props.routes.all.map((route: any, i: number) => (<Route 
                        strict 
                        sensitive 
                        exact={route.path === '/'} 
                        key={`${route.id}`} 
                        render={props => renderRoute(route)}
                        path={route.path}/>))
         }

         <Route key={`_notfound`} render={() => (
            <Containers.Info {...props.notfound } />
         )}/>
      </Switch>
)}