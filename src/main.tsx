import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './global-style'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
