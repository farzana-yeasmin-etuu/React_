import React, { useState } from 'react'; 
function App() {
  
  const [count , setCount] = useState(0)

  return (
    <>
    <h1>hello worlddd from react vite</h1>
    <div>this is {count}</div>
    <button onClick={()=>{setCount(count+1)}}>update count </button>
  </>

  )
}

export default App
