import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderApp } from './render'

process.env.DEBUG="carmel*"

import { App } from '..'
import { resolveWeb } from '@carmel/js/src'
import rawAssets from '../../assets'

const main = () => {
    const basename = '/'
    const props = resolveWeb()
    const locale = props.locale || 'en'
    const assets = rawAssets(basename, locale)

    return <BrowserRouter basename={basename}>
        <App {...props} basename={basename} assets={assets}/>
    </BrowserRouter>
}

render(main(), document.getElementById('app'))
