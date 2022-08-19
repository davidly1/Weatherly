import React from 'react'

export default function InputCity(props) {
  return (
    <input
      type="text"
      value={props.location}
      onChange={props.onChangeInput}
      onKeyPress={props.findLocation}
      placeholder='Enter a location'
      className="search-bar"
    />
  )
}
