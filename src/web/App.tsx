import React, { Fragment } from 'react'

import {
    AppProps,
    Navigator
} from '.'

import routes from './routes'

export const App: React.FC<AppProps> = (props) => (
    <Fragment>
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            backgroundColor: "#EEEEEE",
            height: "100vh",
            overflow: "auto",  
            padding: "20px"
        }}>
            <div style={{
                display: "flex",
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                flexDirection: "row",
                backgroundColor: "#ffffff",
                border: "1px solid #CCCCCC",
                padding: "10px"
            }}>
               <Navigator routes={routes(props.chunks)}/>   
            </div>
        </div>
    </Fragment>                
)