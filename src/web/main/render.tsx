import React from 'react'
import { render } from 'react-dom'
import { resolveComponent } from './resolve'
import { StaticRouter, BrowserRouter } from "react-router-dom"
import { App } from '..'
import { resolveWeb } from '@carmel/js/src'
import rawAssets from '../../assets'

export const renderComponent = (component: any, i: number, route: any, session: any) : any => {
    const Component = resolveComponent(component, route, session)

    if (!Component) {
        return <div/>
    }

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
        }} key={`${i}`}>
            <Component/>
        </div>)
}

// export const renderStatic = (app: any, options: any = {}) => {
//     <StaticRouter location="/">
//         <App { ...app.props } />
//     </StaticRouter>
// }

export const renderApp = (isStatic: boolean = false) => {
    process.env.DEBUG="carmel*"

    let basename = '/'

    if (isStatic) {
        const segments = window?.location?.pathname.split('/')

        if (segments && segments.length > 3 && ['ipfs', 'ipns'].includes(segments[1])) {
            basename = `/${segments[1]}/${segments[2]}/`
        }
    }

    const props = resolveWeb()
    const locale = props.locale || 'en'
    const assets = rawAssets(basename, locale)

    // const app = (<BrowserRouter basename={basename}>
    //     <App {...props} basename={basename} assets={assets}/>
    // </BrowserRouter>)

    const app = <App {...props} basename={basename} assets={assets}/>

    // const site = <StaticRouter location={basename}>
    //      <App { ...props } basename={basename} assets={assets} />
    // </StaticRouter>

    return { app, props, locale, assets }
}