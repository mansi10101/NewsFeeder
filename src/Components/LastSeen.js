import React from 'react'
import ReactTimeAgo from 'react-time-ago'

const LastSeen = ({date}) => {
  return (
    <div>
      <ReactTimeAgo date={date} locale="en-US"/>
    </div>
  )
}

export default LastSeen
