import React from 'react'
type optionalData = {
    message:string;
    messageCount?:number; // if tjis filed is not availabe then allowed
    age:number
}

const Optinal = (props:optionalData) => {
  return (
    <div>
        <h1>If messageCount Not Pass</h1>
    </div>
  )
}

export default Optinal
