import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Context as ResponsiveContext } from 'react-responsive'

import { App } from '..'
import resolve from '../../resolve'

export default (options?: any) => {
    const html = ReactDOMServer.renderToString(
        <ResponsiveContext.Provider value={{ width: 500 }}>
            <App { ...resolve('web') } />
        </ResponsiveContext.Provider>)

    console.log("********")
    console.log(options, html)
    console.log("********")

    return html
}
