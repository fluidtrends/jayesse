import React, { useEffect } from 'react'
import { hooks } from '@carmel/js/src'
import { connect, useDispatch } from 'react-redux'
import { Redirect } from "react-router-dom"
import * as globals from './Globals'
import { renderComponent } from './main/render'
import { resolveContainer } from './main/resolve'

export const Route: any = (props : any) => { 
    const { isPrivate, type, components } = props
    const { useCarmel, useViewport } = hooks
    const dispatch = useDispatch()
    const carmel = useCarmel(props, dispatch)
    const { ready, account, session } = carmel

    const viewport = useViewport()  
    const GlobalStyle = globals.styles({ viewport, theme: props.theme }) 

    if (!ready) {
        return <div/>
    }

    if (isPrivate && !account) {
        return <Redirect to={{ pathname: "/auth" }} />
    } 

    const Container = resolveContainer(type)

    if (!Container) {
        return <div/>
    }

    return (<Container {...props}>
        { components.map((component: any, i: number) => renderComponent(component, i, { ...props, account, carmel, viewport }, session)) }
        <GlobalStyle/>
    </Container>)
}