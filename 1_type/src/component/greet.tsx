import React from 'react'

type GreeProps = {
    name:string;
    id:string;
    isLoggedIn:boolean
}

export const Greet = (props:GreeProps) => {
    return (
        <div>
            <h1>Hello Good Morning {props.name}, id: {props.id}</h1>
        </div>
    )
}

  
// (props:any)
// (props:{name:string})
// (props:GreeProps) => Best approach