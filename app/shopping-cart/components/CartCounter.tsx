'use client'
import { useState } from "react"

export const CartCounter = () => {

    const [count, setCount] = useState(99);
  return (
    <>
            <span className="text-9xl">{count}</span>
<div className="flex">
    <button onClick={ ()=> setCount( count +1)} className="flex items-center justify-center p-2 rounded-xl bg-red-200 text-pink-900 transition-all ">
+1
    </button>
    <span className="flex w-10"></span>
    <button onClick={ ()=> setCount( count -1)} className="flex items-center justify-center p-2 rounded-xl bg-red-200 text-pink-900 transition-all">
-1
    </button>
</div>
    </>
  )
}
