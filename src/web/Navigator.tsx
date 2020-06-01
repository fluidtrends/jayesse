import React from 'react'

import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom"
  
import {
    NavigatorProps,
} from '.'

export const Navigator: React.FC<NavigatorProps> = (props) => {
  const renderLink = (props: any) => (
    <li key={props.id}>
      <Link to={props.path}>{props.title}</Link>
    </li>
  )

  const renderRoute = (props: any) => (
    <Route key={props.id} exact path={props.path} component={props.screen}/>
  )

  const makeRoutes = (chunks: any): any[] => {
    let routes: any[] = []
  
    for(let chunkName in chunks) {
      const screens = chunks[chunkName] && chunks[chunkName].screens

      if (!screens || screens.length === 0) return []
  
      for(let screenName in screens) {
        routes.push({
          id: screenName,
          name: screenName, 
          screen: screens[screenName],
          title: screenName,
          path: screenName
        })
      }
    }
    return routes
  }

  const routes = makeRoutes(props.chunks)

    return (
        <div>
        <BrowserRouter>
          <div>
            <nav>
              <ul>
              { routes.map((route: any) => renderLink(route)) }
              </ul>
            </nav>
            <Switch>
            { routes.map((route: any) => renderRoute(route)) }
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
}