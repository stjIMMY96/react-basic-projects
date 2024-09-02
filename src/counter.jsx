import {useState} from 'react';

//let counter = 13;


function Counter(props){
    console.log(props);
    const [count, setCount] = useState(16);
    if(count <15) setCount(15);
    
    function add(){
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    }

    function subtract(){
        setCount((prev)=> prev - 1);
        setCount((prev)=> prev - 1);
        setCount((prev)=> prev - 1);
        setCount((prev)=> prev - 1);
    }
    return(
        <>
        <h2 className='text-3xl bg-green-500 rounded-md text-center'>Counter: {count}</h2>
        <button onClick={add}>Add</button> {" "}
        <button onClick={subtract}>Subtract</button>
        </>

    )
}

export default Counter;