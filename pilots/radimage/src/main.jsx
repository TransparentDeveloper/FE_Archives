import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './libs/styled-components/global-styles'
import { HomePage } from './pages'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <HomePage />
  </React.StrictMode>,
)
