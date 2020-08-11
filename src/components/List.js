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

const List = ({ list, onRemoveItem }) =>
  list.map(item => (
    <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
  ))

const Item = ({ item, onRemoveItem }) => {
  function handleRemoveItem() {
    onRemoveItem(item)
  }

  return (
    <div css={storyList}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      <span>
        <button type='button' onClick={() => onRemoveItem(item)}>
          Remove
        </button>
      </span>
    </div>
  )
}

export default List
