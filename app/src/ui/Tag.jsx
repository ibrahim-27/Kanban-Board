import React from 'react'

const Tag = (props) => {

    
  return (
    <span className={`bg-tag-${props.tag.toLowerCase()} text-white px-2 py-1 rounded-lg`}>
        {props.tag}
    </span>
  )
}

export default Tag