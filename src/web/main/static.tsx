import { renderApp, renderStatic } from './render'

const app = renderApp(true)

export default (options: any) => renderStatic(app, options)