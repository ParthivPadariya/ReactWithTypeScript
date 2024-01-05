import React, { useState } from 'react'


interface Book {
    name:string;
    price?:number;
}

export const Increment:React.FC = (props) => {

    // implacting casting
    const [im,setIm] = useState(1); // automatically assign number type

    // Explicit typecasting
    // Generic way to define type
    const [count,setCount] = useState<string>("a");
    
    const [countNumber,setCountNumber] = useState<number>(0);
    
    // Given a object
    const [value,setValue] = useState<Book>({
        name:"One",
        price:10
    })
    const [name, setName] = useState<string | undefined>();

    // event type
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    // using hover we can also find type of event
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e);
    }
    return (
    <div>
        Increment
        {count}
        <button onClick={() => {setCount(count+1)}}>Increment</button>

        {countNumber}
        <button onClick={() => {setCountNumber(countNumber+1)}}>Increment</button>
    
        {value.name}

        {name}
        <input type="text" onChange={handleChange}/>
    
        <form onSubmit={handleSubmit}>
            <input type="text"  onChange={handleChange}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
