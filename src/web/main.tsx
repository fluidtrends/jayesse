import React from 'react'
import ReactDOM from 'react-dom'

import { 
    App,
    AppProps
} from '.'

/**
 * The main app renderer
 */
export const renderApp = async (props: AppProps) => {
    ReactDOM.render(<App {...props} />, document.getElementById('app'))
}