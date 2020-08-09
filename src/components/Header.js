/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { colors } from '../utilities/utilities'

const header = css`
  padding: 1rem;
  text-align: center;
  background: ${colors.darkColor};
  color: ${colors.lightColor};
`

const Header = ({ title }) => (
  <header css={header}>
    <h1>{title}</h1>
  </header>
)

export default Header
