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
    border: none;
    border-bottom: 1px solid ${colors.darkColor};
    margin-top: 1rem;
  }
`

const InputWithLabel = ({
  id,
  children,
  onInputChange,
  value,
  type = 'text',
  isFocused
}) => {
  const inputRef = React.useRef()

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isFocused])

  return (
    <div css={search}>
      <label htmlFor={id}>
        {children}
        <input
          ref={inputRef}
          type={type}
          id={id}
          placeholder='Enter your search'
          value={value}
          autoFocus={isFocused}
          onChange={onInputChange}
        />
      </label>
    </div>
  )
}

export default InputWithLabel
