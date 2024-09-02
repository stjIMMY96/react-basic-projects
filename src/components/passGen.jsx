import { useState, useCallback, useEffect, useRef } from "react";

function Generator(){
    // 4 things on the basis of state will be changing
    const [length, setLength] = useState(7);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState('');
    const passwordRef = useRef(null);
    
    const generatePassword = useCallback(() =>{
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(numberAllowed){
            str = str+"0123456789";
        }
        if(charAllowed){
            str = str+"!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
        }

        for(let i = 0; i<length; i++){
            const char = Math.floor(Math.random()*str.length + 1);
            pass+=str.charAt(char);
        }

        setPassword(pass);
    }, [length, numberAllowed, charAllowed]);

    useEffect(() =>{
        generatePassword();
    }, [length, numberAllowed, charAllowed]);

    function copyPasswordToClipBoard(){
        window.navigator.clipboard.writeText(password);
        passwordRef.current.select();
    }

    return(
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
            <h1 className="text-white text-center my-3">Password Generator</h1>
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
                <input type="text" value={password} placeholder="Password" readOnly ref={passwordRef} className="outline-none w-full py-1 px-3" />
                <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPasswordToClipBoard}>Copy</button>
            </div>
            <div className="flex text-sm gap-x-2">
                <div className="flex item-center gap-x-1">
                    <input type="range" name="" id="" min={6} max={20} value={length} className="cursor-pointer" onChange={(e) => setLength(e.target.value)}/>
                    <label htmlFor="length">Length: {length}</label>
                </div>
                <div className="flex item-center gap-x-1">
                    <input type="checkbox" name="" id="" defaultChecked = {numberAllowed} onChange={() =>{
                        setNumberAllowed((prev) =>!prev)
                    }}/>
                    <label htmlFor="numbers">Number</label>
                </div>

                <div className="flex item-center gap-x-1">
                    <input type="checkbox" name="" id="" defaultChecked = {charAllowed} onChange={() =>{
                        setCharAllowed((prev) =>!prev)
                    }}/>
                    <label htmlFor="character">Character</label>
                </div>
            </div>
        </div>
    )
}

export default Generator;