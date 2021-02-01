import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"

import { App } from '..'
import { resolveWeb } from '@carmel/js'
import rawAssets from '../../assets'

const basename = '/'
const props = resolveWeb()
const locale = props.locale || 'en'
const assets = rawAssets(basename, locale)

ReactDOM.render(<BrowserRouter basename={basename}>
    <App {...props} basename={basename} assets={assets}/>
</BrowserRouter>, document.getElementById('app'))