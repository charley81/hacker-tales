/** @jsx jsx */
import React from 'react'
import Search from './Search'
import Header from './Header'
import List from './List'
import { stories } from '../utilities/utilities'
import { jsx, css } from '@emotion/core'

const app = css`
  .wrapper {
    padding: 1rem;
    max-width: 1000px;
    margin: auto;

    p {
      margin-bottom: 1rem;
    }
  }
`

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState('Beer')

  const handleChange = e => setSearchTerm(e.target.value)

  const searchedStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div css={app}>
      <Header title={'Hacker Stories'} />
      <div className='wrapper'>
        <Search searchTerm={searchTerm} handleChange={handleChange} />
        <List searchTerm={searchTerm} list={searchedStories} />
      </div>
    </div>
  )
}

export default App
