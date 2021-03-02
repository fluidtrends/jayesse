import React from 'react'
import { AppProps } from '../types'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { Router } from './Router'

import { containers, components } from '.'

/**
 * 
 * @param props 
 */
export const App: React.FC<AppProps> = (props) => { 
  const { store, persistor } = props 

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <Router {...props} />
      </PersistGate>
    </Provider>
  )
}