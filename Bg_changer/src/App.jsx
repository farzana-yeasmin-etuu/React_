import { useState } from "react"


function App() {
  const [color, setColor] = useState("pink")

  return (
   
      <div className="w-full h-screen duration-200"
        style={{backgroundColor: color}}>
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-amber-100 px-3 py-3 rounded-3xl">
              <button onClick={()=>setColor("white")}
              className="outline-none px-4 py-1 rounded-3xl shadow-2xl " style={{backgroundColor:"white"}}>White</button>

              <button onClick={()=>setColor("black")}
              className="outline-none px-4 py-1 rounded-3xl shadow-2xl text-white " style={{backgroundColor:"black"}}>Black</button>

              <button onClick={()=>setColor("blue")}
               className="outline-none px-4 py-1 rounded-3xl shadow-2xl  text-white " style={{backgroundColor:"blue"}}>Blue</button>

              <button onClick={()=>setColor("green")}
               className="outline-none px-4 py-1 rounded-3xl shadow-2xl  text-white " style={{backgroundColor:"Green"}}>Green</button>

              <button onClick={()=>setColor("red")}
               className="outline-none px-4 py-1 rounded-3xl shadow-2xl  text-white " style={{backgroundColor:"red"}}>Red</button>

              <button onClick={()=>setColor("purple")}
               className="outline-none px-4 py-1 rounded-3xl shadow-2xl  text-white " style={{backgroundColor:"purple"}}>Purple</button>

              <button onClick={()=>setColor("Pink")}
               className="outline-none px-4 py-1 rounded-3xl shadow-2xl " style={{backgroundColor:"Pink"}}>Pink</button>

              <button onClick={()=>setColor("Yellow")}
               className="outline-none px-4 py-1 rounded-3xl shadow-2xl " style={{backgroundColor:"Yellow"}}>Yellow</button>
            </div>
          </div>
      </div>
      
    
  )
}

export default App
