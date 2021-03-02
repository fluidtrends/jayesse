import React from 'react'
import { render } from 'react-dom'
import { resolveComponent } from './resolve'
import { StaticRouter, BrowserRouter } from "react-router-dom"
import { App } from '..'
import { resolveWeb } from '@carmel/js'
import rawAssets from '../../assets'

process.env.DEBUG="carmel*"

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

// export const renderApp = (isStatic: boolean = false) => {
//     let basename = '/'

//     if (isStatic) {
//         const segments = window?.location?.pathname.split('/')

//         if (segments && segments.length > 3 && ['ipfs', 'ipns'].includes(segments[1])) {
//             basename = `/${segments[1]}/${segments[2]}/`
//         }
//     }

//     const props = resolveWeb()
//     const locale = props.locale || 'en'
//     const assets = rawAssets(basename, locale)

//     const App = (<BrowserRouter basename={basename}>
//         <Main {...props} basename={basename} assets={assets}/>
//     </BrowserRouter>)

//     return { props, locale, assets, App }
// }

export const renderApp = () => {
    const basename = '/'
    const props = resolveWeb()
    const locale = props.locale || 'en'
    const assets = rawAssets(basename, locale)

    return <BrowserRouter basename={basename}>
        <App {...props} basename={basename} assets={assets}/>
    </BrowserRouter>
}