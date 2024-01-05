// if file extension .tsx then return html element
// if file extension .ts then not return any html element

import React from 'react'
import { userCounter } from '../provider/Counter'

// 1st method
interface propsType {
  text: string | number | boolean;
  onClick?: () => void; // its means onClick is function which return null
  something?: boolean;
}

// 2nd method
type propsTypeDefine = {
  text: string | number | boolean;
  onClick?: () => void;
}

// 1 method create_ Generaci function
// Rect.FC -> means react function component (type of function)
const Button: React.FC<propsType> = (props) => {
  // const {text, onClick = () => {alert("Optional value")}} = props; // destructure
  const context = userCounter();
  return (
    <div>
      Button Say {props.text}
      <button onClick={props.onClick}>Click me</button>

      {/* if not null then print */}
      <h1 onClick={(e) => context?.setCount(context?.value + 1)}>{context?.value}</h1>
    </div>
  )
}

// 2 method
// const Button = (props:{text:string}) => {
//   return (
//     <div>Button Say {props.text}</div>
//   )
// }


// Give me Error
// const Button: React.FC = (props:{text:string}) => {
//     return (
//       <div>Button Say {props.text}</div>
//     )
// }
export default Button