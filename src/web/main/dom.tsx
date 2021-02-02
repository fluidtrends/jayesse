import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"
import { AppContainer } from 'react-hot-loader'

import { App } from '..'
import { resolveWeb } from '@carmel/js/src'
import rawAssets from '../../assets'

const basename = '/'
const props = resolveWeb()
const locale = props.locale || 'en'
const assets = rawAssets(basename, locale)

const render = () => {
    ReactDOM.render(<AppContainer>
        <BrowserRouter basename={basename}>
            <App {...props} basename={basename} assets={assets}/>
        </BrowserRouter>
    </AppContainer>, document.getElementById('app'))
}
  
render()