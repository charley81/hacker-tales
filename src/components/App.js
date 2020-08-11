/** @jsx jsx */
import React from 'react'
import InputWithLabel from './InputWithLabel'
import Header from './Header'
import List from './List'
import { initialStories } from '../utilities/utilities'
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

const useSemiPersistentState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem('key') || initialState
  )

  React.useEffect(() => {
    localStorage.setItem('key', value)
  }, [value, key])

  return [value, setValue]
}

const getAsyncStories = () =>
  new Promise(resolve =>
    setTimeout(() => resolve({ data: { stories: initialStories } }))
  )

const App = () => {
  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'React')
  const [stories, setStories] = React.useState([])

  React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [isError, setIsError] = React.useState(false)

  React.useEffect(() => {
    setIsLoading(true)

    getAsyncStories()
      .then(result => {
        setStories(result.data.stories)
        setIsLoading(false)
      })
      .catch(() => setIsError(true))
  }, [])

  const handleRemoveStory = item => {
    const newStories = stories.filter(story => item.objectId !== story.objectId)
    setStories(newStories)
  }

  const handleSearch = e => {
    setSearchTerm(e.target.value)
  }

  const searchedStories = stories.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div css={app}>
      <Header title={'Hacker Stories'} />
      <div className='wrapper'>
        <InputWithLabel
          id='search'
          value={searchTerm}
          isFocused
          onInputChange={handleSearch}
        >
          <strong>Search:</strong>
        </InputWithLabel>
        <hr />
        {isError && <p>Something went wrong</p>}
        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          <List list={searchedStories} onRemoveItem={handleRemoveStory} />
        )}
      </div>
    </div>
  )
}

export default App
