import  { useState, useEffect } from 'react'; 
import './App.css'
import Nav from './components/nav';
function App() {
  
  const [count , setCount] = useState(0)
  const [color,setColor]= useState("red")
   {/* useEffect */}
    useEffect(() => {
     alert("welcome to my first app")
    }, [])

    useEffect(() => {
     alert("count is changed")
    
    }, [count])

    
  return (
   <>
   <Nav/>
    <h1>hello worlddd from react vite</h1>

    { /* useState */}
    <div>this is  {count}</div>
    <button onClick={()=>{setCount(count+1)}}>update count </button>
     
      <button className='txt' style={{backgroundColor: color}} onClick={()=>setColor("green")}>this is color state</button>
   
    
  </>

  )
}

export default App
