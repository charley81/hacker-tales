/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import { colors } from '../utilities/utilities'

const search = css`
  max-width: 500px;
  margin: 2rem auto;

  label {
    font-size: 1.3rem;
  }

  input {
    padding: 0.5rem;
    width: 100%;
  }
`

function Search() {
  return (
    <div css={search}>
      <label>
        Search:
        <input type='text' placeholder='Enter your search' />
      </label>
    </div>
  )
}

export default Search
