import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import {
  NotFound,
  AppProps,
  Screen
} from '.'

/**
 * 
 * @param props 
 */
export const App: React.FC<AppProps> = (props) => {
  return (
    <Router>
      <Switch>
         { props.routes.map((route: any, i: number) => (
            <Route exact key={`${route.id}`} path={route.path} render={navProps => (
                <Screen {...navProps} {...props} {...route} />
            )}/>
         ))}
         <Route key={`_notfound`} render={() => (
            <NotFound {...props.notfound } />
         )}/>
      </Switch>
  </Router>
)}