import React, { Fragment } from 'react'

import {
    AppProps,
    Navigator
} from '.'

export const App: React.FC<AppProps> = (props) => {
    return (
        <Fragment>
            <p style={{  }}> app name: { props.name }) </p>
            <Navigator/>
        </Fragment>
    )
}