import React from 'react'
import ReactDOM from 'react-dom'
import emotionReset from 'emotion-reset'
import { Global, css } from '@emotion/react'
import App from './App'

ReactDOM.render(
  <>
    <Global
      styles={css`
        ${emotionReset}
      `}
    />
    <App />
  </>,
  document.getElementById('root')
)
