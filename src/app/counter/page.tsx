"use client"
import React, { useState } from "react"

export default function Counter(){

    const [count, setCount] = useState(0)

    return (
        <div className="text-center ">

        <button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count+1)}>+</button>
        <p>{count}</p>
        <button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
        onClick={() => setCount(count-1)}>-</button>






        </div>

        
        
    )
}