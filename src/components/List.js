/** @jsx jsx */
import React from 'react'
import { stories, colors } from '../utilities/utilities'
import { jsx, css } from '@emotion/core'

const storyList = css`
  padding: 1rem;
  border-radius: 3px;

  p {
    margin-bottom: 1rem;
  }

  .story {
    padding: 0.5rem;
    color: ${colors.darkColor};
    margin: 0.5rem 0;
    border-radius: 3px;
    border-bottom: 1px dashed ${colors.darkColor};

    span {
      padding: 0 0.5rem;

      a {
        color: ${colors.darkColor};
      }
    }
  }
`

const List = ({ searchTerm, list }) =>
  list.map(item => <Item key={item.objectID} item={item} />)

const Item = ({ item }) => (
  <div css={storyList}>
    <span>
      <a href={item.objectID}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </div>
)

export default List
