import { useState } from 'react'


function App() {
  const [color,setColor]=useState("olive")

  return (
    <div className="w-full h-screen  duration-1000" 
    style={{ backgroundColor : color}}
    > 
    <div className="fixed flex flex-wrap justify-center
    bottom-12 inset-x-0 px-2">
       <div className=" flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-xl ">
        <button onClick={ ()=>setColor("red")}
        className="outerline-none px-4 py-1 rounded-full text-white "style={{backgroundColor:"red"}}>
          reddd
        </button>

        <button onClick={ ()=>setColor("yellow")}
        className="outerline-none px-4 py-1 rounded-full text-white "style={{backgroundColor:"yellow"}}>
        yellow
        </button>
        <button onClick={ ()=>setColor("blue")}
         className="outerline-none px-4 py-1 rounded-full text-white "style={{backgroundColor:"blue"}}>
        blue
        </button>
        <button onClick={ ()=>setColor("black")}
        className="outerline-none px-4 py-1 rounded-full text-white "style={{backgroundColor:"black"}}>
          black
        </button>
        
        
        
        </div> 
        </div>
    </div>
  )
}

export default App
