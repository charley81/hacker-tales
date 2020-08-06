/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import { colors } from '../utilities/utilities'

const header = css`
  background: red;
  padding: 1rem;
  text-align: center;
  background: ${colors.primaryColor};
`

function Header() {
  return (
    <header css={header}>
      <h1>Hacker Stories</h1>
    </header>
  )
}

export default Header
