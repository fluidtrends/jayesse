import React from 'react'
import ReactDOM from 'react-dom'

import { 
    App,
    AppProps
} from '.'

const defaultProps = {
    name: "app"
} as AppProps

(async () => {
    const propsPath = '__webapp'
    const props = await import(`${propsPath}`) || defaultProps
    ReactDOM.render(<App {...props} />, document.getElementById('app'))
})()

