import React, { Fragment } from 'react'

import {
    AppProps,
    Navigator
} from '.'

export const App: React.FC<AppProps> = (props) => {
    return (
        <Fragment>
            <Navigator chunks={props.chunks}/>
        </Fragment>
    )
}