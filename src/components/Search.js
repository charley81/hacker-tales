/** @jsx jsx */
import React from 'react'
import { jsx, css } from '@emotion/core'
import { colors } from '../utilities/utilities'

const search = css`
  margin: 2rem 0;

  label {
    font-size: 1.3rem;
  }

  input {
    padding: 0.5rem;
    width: 100%;
  }
`

const Search = ({ handleChange }) => (
  <div css={search}>
    <label>
      Search:
      <input
        type='text'
        placeholder='Enter your search'
        onChange={handleChange}
      />
    </label>
  </div>
)

export default Search
