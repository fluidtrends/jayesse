import React from 'react'

import {
   Switch,
   Route
} from "react-router-dom"

import { Containers } from '.'
import { AppProps } from '../types'

/**
 * 
 * @param props 
 */
export const App: React.FC<AppProps> = (props) => {
 
  return (
      <Switch>
         { props.routes.map((route: any, i: number) => (
            <Route strict sensitive exact={route.path === '/'} key={`${route.id}`} path={route.path}>
                <Containers.Main {...props} {...route} />
            </Route>
         ))}
         <Route key={`_notfound`} render={() => (
            <Containers.Info {...props.notfound } />
         )}/>
      </Switch>
)}