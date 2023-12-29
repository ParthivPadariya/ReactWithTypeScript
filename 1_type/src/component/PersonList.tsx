import React from 'react'
type PersonListProps = {
    name: {
        first:string;
        last:string;
    }[]
}
const PersonList = (props:PersonListProps) => {
  return (
    <div>
        {
            props.name.map((e)=>{
                return <h1 key={e.first}>{e.first} {e.last}</h1>
            })
        }
    </div>
  )
}

export default PersonList
