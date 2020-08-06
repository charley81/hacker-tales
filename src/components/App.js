/** @jsx jsx */
import React from 'react'
import Search from './Search'
import Header from './Header'
import { list } from '../utilities/utilities'
import { jsx, css } from '@emotion/core'

const app = css``

function App() {
  return (
    <div css={app}>
      <Header />
      <Search />
      {list.map((item) => (
        <div key={item.objectId}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span> {item.author}</span>
          <span> {item.num_comments}</span>
          <span> {item.author}</span>
        </div>
      ))}
    </div>
  )
}

export default App
