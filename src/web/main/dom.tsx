import React from 'react'
import { render } from 'react-dom'
import { renderApp } from './render'

const { app } = renderApp() 

import { setup } from 'twind';

const twindConfig =  {
  theme: {
    extend: {
      colors: {
        primary: '#00BCD4',
        'primary-100': '#B2EBF2',
        'primary-800': '#00838F',
      },
      fontFamily: {
        sans: `Inter, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
            sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      },
    },
  },
}

if (typeof window !== `undefined`) {
  setup(twindConfig)
}

render(app, document.getElementById('app'))
