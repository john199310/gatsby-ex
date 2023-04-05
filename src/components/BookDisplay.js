import React from 'react'

const BookDisplay = props => {
  return (
    <div>
      <i>{props.title}</i> - {props.author}
      {props.thoughts && props.thoughts.length > 0 && (
        <div>{props.thoughts}</div>
      )}
    </div>
  )
}

export default BookDisplay
