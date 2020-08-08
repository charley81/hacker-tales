/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { colors } from '../utilities/utilities'

const header = css`
  padding: 1rem;
  text-align: center;
  background: ${colors.darkColor};
  color: ${colors.lightColor};
`

function Header() {
  return (
    <header css={header}>
      <h1>Hacker Stories</h1>
    </header>
  )
}

export default Header
