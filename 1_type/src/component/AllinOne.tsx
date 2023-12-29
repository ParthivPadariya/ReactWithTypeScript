// simple pass and optional msg
type t1 = {
    name:string;
    email:string;
    msg?:string // optional
}

// object pass
type t2 = {
    p1:{
        name:string;
        email:string;
    }
}

// pass array
type t3 = {
    p1: {
        name: string;
        email:string;
    }[]
}

// child pass
type t4 = {
    children : React.ReactNode;
}

// define specific value
type t5 = {
    check: "Loading" | "Login"
}

// also we have use interface same work
interface typeCheck {
    name:string;
    email:string;
}

import React from 'react'

export const AllinOne = () => {
  return (
    <div>AllinOne</div>
  )
}
