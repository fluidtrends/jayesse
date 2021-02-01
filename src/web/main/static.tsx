import React from 'react'
import ReactDOM from 'react-dom'
import { StaticRouter, BrowserRouter } from "react-router-dom"

import { App } from '..'
import { resolveWeb } from '@carmel/js'
import rawAssets from '../../assets'

let basename = '/'
const props = resolveWeb()
const locale = props.locale || 'en'

const segments = window?.location?.pathname.split('/')

if (segments && segments.length > 3 && ['ipfs', 'ipns'].includes(segments[1])) {
    basename = `/${segments[1]}/${segments[2]}/`
}

const assets = rawAssets(basename, locale)

ReactDOM.render(<BrowserRouter basename={basename}>
    <App {...props} basename={basename} assets={assets}/>
</BrowserRouter>, document.getElementById('app'))

export default (options?: any) => {
    <StaticRouter location="/">
        <App { ...props } />
    </StaticRouter>
}