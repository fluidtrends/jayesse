import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import {
    NavigatorProps,
    Screen
} from '.'

/**
 * 
 * @param route 
 */
const renderRoute = (route: any, routes: any) => {
  return (
    <Route
      exact
      key={`${route.id}`}
      path={route.path}
      render={props => (
          <Screen {...props} route={route} routes={routes} />
      )}
    />
)}

/**
 * 
 * @param props 
 */
export const Navigator: React.FC<NavigatorProps> = (props) => {
  return (
    <Router>
      <Switch>
        { props.routes.map((route: any, i: number) => (
          renderRoute(route, props.routes)
        ))}
      </Switch>
  </Router>
)}