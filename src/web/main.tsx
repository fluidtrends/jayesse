import React from 'react'
import ReactDOM from 'react-dom'

import { 
    App,
    AppProps
} from '.'

const props: AppProps = {
    name: "app"
}

ReactDOM.render(<App {...props} />, document.getElementById('app'))

