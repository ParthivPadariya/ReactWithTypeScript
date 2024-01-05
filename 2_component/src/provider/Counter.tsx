import Rect, {createContext, useState, useContext} from 'react'

interface CounterProviderProps {
    children: Rect.ReactNode
}

interface CounterContextValue{
    value: number;
    setCount: (num:number) => void;
}

const CounterContext = createContext<CounterContextValue | null>(null);

export const userCounter = () => {
    return useContext(CounterContext);
}
export const CounterProvider = (props:CounterProviderProps) => {

    const [count, setCount] = useState(1);
    return(
        // only add number becausse typer is number
        <CounterContext.Provider value={{value:count,setCount:setCount}}>
            {props.children}
        </CounterContext.Provider>
    )
} 