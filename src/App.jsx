import { useState } from 'react'
import { css } from '@emotion/react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

function App() {
  const [list, setList] = useState([1, 2, 3, 4, 5])

  const handlePush = () => {
    setList([...list, Math.floor(Math.random() * 11)])
  }

  return (
    <>
      <button onClick={handlePush}>要素を追加</button>

      <TransitionGroup>
        {list.map((data, i) => (
          <CSSTransition key={i} timeout={0} unmountOnExit>
            <div css={transitionStyle}>{data}</div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  )
}

const transitionStyle = css`
  &.enter-active {
    opacity: 0;
  }

  &.enter-done {
    transition: opacity 0.3s;
    opacity: 1;
  }
`

export default App
