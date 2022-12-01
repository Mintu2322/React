// good practice
import React, { useState } from "react";

// import css
import "./calculator.css";
// always give 1st letter of function Capital (CamelCase)

export default function Add() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [res, setRes] = useState(0);
    function hanldeAdd (){
        const ans = Number(num1) + Number(num2);
        setRes(ans)
    }
    function hanldeSub (){
        const ans = Number(num1) - Number(num2);
        setRes(ans)
    }

    function hanldeMul (){
        const ans = Number(num1) * Number(num2);
        setRes(ans)
    }

    function hanldeDivi (){
        const ans = Number(num1) /  Number(num2);
        setRes(ans)
    }
    return(
        <>
        <h1>Addition</h1>
        <br />
        <br />
        <br />
        <label>Number 1</label>
        <br />
        <input value={num1} type="number" name="num1" onChange={(e) => setNum1(e.target.value)} />
        <br />
        <br />
        <br />
        <label>Number 2</label>
        <br />
        <input value={num2} type="number" name="num2" onChange={(e) => setNum2(e.target.value)} />
        
        <br />
        <br />
        <br />
        <button onClick={() => hanldeAdd()}>+</button>
        <button onClick={() => hanldeSub()}>-</button>
        <button onClick={() => hanldeMul()}>*</button>
        <button onClick={() => hanldeDivi()}>/</button>
        
        <br />
        <br />
        {/* tertiary operators */}
        <h1>Result is: {res ? res : 'No results yet'}</h1>
        <br />
        <br />
        <h2>Num 1 value is: {num1}</h2>
        <br />
        <h2>Num 2 value is: {num2}</h2>
        </>
    )    
}