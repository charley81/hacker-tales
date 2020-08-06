/** @jsx jsx */
import React from 'react'
import Search from './Search'
import Header from './Header'
import List from './List'
import { jsx, css } from '@emotion/core'

const app = css`
  .wrapper {
    padding: 1rem;
    max-width: 700px;
    margin: auto;

    p {
      margin-bottom: 1rem;
    }
  }
`

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState('')

  const handleChange = e => setSearchTerm(e.target.value)

  return (
    <div css={app}>
      <Header />
      <div className='wrapper'>
        <Search handleChange={handleChange} />
        <List searchTerm={searchTerm} />
      </div>
    </div>
  )
}

export default App
