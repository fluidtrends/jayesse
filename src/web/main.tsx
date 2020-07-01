import React from 'react'
import ReactDOM from 'react-dom'

import { App } from '.'
import resolve from '../resolve'

ReactDOM.render(<App { ...resolve('web') } />, document.getElementById('app'))