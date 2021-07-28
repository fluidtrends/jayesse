import React from 'react'
import { render } from 'react-dom'
import { renderToStaticMarkup } from "react-dom/server"
import { renderApp } from './render'
// import prettier from "prettier"

const { app } = renderApp() 

render(app, document.getElementById('app'))

export default (options: any) => renderToStaticMarkup(app)
