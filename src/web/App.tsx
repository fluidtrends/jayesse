import React from 'react'

import {
    AppProps,
    Navigator
} from '.'

export const App: React.FC<AppProps> = (props) => {
    return (
        <div>
        <p style={{  }}> Jayesse Web App ({ props.name }) </p>
        <Navigator/>
        </div>
    )
}