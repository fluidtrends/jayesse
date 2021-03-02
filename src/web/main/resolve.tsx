import { containers, components } from '..'
import { connect } from 'react-redux'
import { resolveState } from '@carmel/js/src'

export const resolveComponent = (component: any, route: any, session: any) : any => {
  const Component = "function" === (typeof component) ? component : components[component.id as keyof typeof components]
  const props = "function" === (typeof component) ? {} : component

  return connect(resolveState(session, { ...route, ...props }))(Component)
}

export const resolveContainer = (type: any) : any => {
    const containerId: keyof typeof containers = (type || "main").charAt(0).toUpperCase() + (type || "main").toLowerCase().substring(1)
    return containers[containerId] 
}

