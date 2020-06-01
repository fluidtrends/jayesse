import React from 'react'
import ReactDOM from 'react-dom'

import { 
    App,
    AppProps
} from '.'

import * as product from './product'

ReactDOM.render(<App {...product.props} />, document.getElementById('app'))

