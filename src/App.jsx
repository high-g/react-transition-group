import { css } from '@emotion/react'

function App() {
  return (
    <div>
      <p css={pCss}>test</p>
    </div>
  )
}

const pCss = css`
  color: red;
`

export default App
