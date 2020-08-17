import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"

import { App } from '..'
import resolve from '../../resolve'
import rawAssets from '../../assets'

const basename = '/'
const props = resolve('web')
const locale = props.locale || 'en'
const assets = rawAssets(basename, locale)

ReactDOM.render(<BrowserRouter basename={basename}>
    <App {...props} basename={basename} assets={assets}/>
</BrowserRouter>, document.getElementById('app'))