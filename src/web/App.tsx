import React from 'react'

import {
   Switch,
   Route
} from "react-router-dom"

import { Containers, Components } from '.'
import { AppProps, Containers as ContainersProps } from '../types'
import { useViewport } from '../hooks'

import * as globals from './Globals'

/**
 * 
 * @param props 
 */
export const App: React.FC<AppProps> = (props) => {  
  const viewport = useViewport()

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
      <Comp {...props} viewport={viewport} {...compProps}/>
    </div>)
  }

  const Container = (route: any) => {
    const containerId: keyof typeof Containers = (route.type || "main").charAt(0).toUpperCase() + (route.type || "main").toLowerCase().substring(1)
    const Cont = Containers[containerId] 

    return (<Cont {...props} {...route}>
       { route.components.map((component: any) => renderComponent(component) )}
    </Cont>)
  }

  console.log(">>", props)

  return (
      <Switch>
         { props.routes.map((route: any, i: number) => {
            return (<Route strict sensitive exact={route.path === '/'} key={`${route.id}`} path={route.path}>
                <Container {...route} />
                <style jsx global> { globals.styles({ viewport, theme: props.theme }) } </style>
            </Route>)
         })}
         <Route key={`_notfound`} render={() => (
            <Containers.Info {...props.notfound } />
         )}/>
      </Switch>
)}