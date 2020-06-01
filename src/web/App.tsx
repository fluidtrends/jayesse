import React, { Fragment } from 'react'

import {
    AppProps,
    Navigator
} from '.'

export const App: React.FC<AppProps> = (props) => {
    return (
        <Fragment>
            <p style={{  }}> config: { props.config }) </p>
            <p style={{  }}> chunks: { props.chunks }) </p>
            <Navigator/>
        </Fragment>
    )
}