import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import {
    NavigatorProps,
} from '.'

/**
 * 
 * @param route 
 */
const renderRoute = (route: any) => (
    <Route
      path={route.path}
      render={props => (
          <route.component {...props} routes={route.routes} />
        )}
    />
)

export const Navigator: React.FC<NavigatorProps> = (props) => (
  <Router>
      <Switch>
        { props.routes.map((route: any, i: number) => (
          renderRoute(route)
        ))}
      </Switch>
  </Router>
)
