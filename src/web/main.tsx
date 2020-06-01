import React from 'react'
import ReactDOM from 'react-dom'

import { 
    App,
    AppProps
} from '.'

export const renderApp = (props: AppProps) => ReactDOM.render(<App {...props} />, document.getElementById('app'))
