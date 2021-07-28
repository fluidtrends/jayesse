import React, { Fragment } from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route as RawRoute} from "react-router-dom"
import { Route } from '.'
import { createBrowserHistory } from 'history'

export const Router: any = (props : any) => { 
    const { routes, history } = props    
    return (<ConnectedRouter history={history}>
            <Switch>
                { routes.all.map((route: any, i: number) => (<RawRoute 
                    strict={false}
                    sensitive 
                    exact={true} 
                    key={`${route.id}`} 
                    render={() => <Route {...props} {...route}/>}
                    path={route.path}/>))
                }
                <RawRoute key={`_notfound`} render={() => (
                    <h1> { 'Oops' } </h1>
                )}/>
            </Switch>     
        </ConnectedRouter>)
  }