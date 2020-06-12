import React from 'react'
import ReactDOM from 'react-dom'

import { App, Guide, GuideProps } from '.'
import resolve from '../resolve'

const guide = {
    steps: [{
        message: "Hey there, welcome to Carmel. I'm Chunky, your Carmel guide. Ready to get started?",
        action: "Yeah, let's do this",
        onAction: 1
    },
    {
        message: "Cool so let's do this then",
        action: "Download now"
    }]
} as GuideProps

// ReactDOM.render(<Guide {...guide}>
//     <App { ...resolve('web') } />
// </Guide>, document.getElementById('app'))

ReactDOM.render(<App { ...resolve('web') } />, document.getElementById('app'))