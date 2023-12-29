import React from 'react'

type childType = {
    children : React.ReactNode
}
const Child = (props:childType) => {
  return (
    <div>
      {
        props.children
      }
    </div>
  )
}

export default Child
