import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(10)
function check(){
  if(count==0){
    console.log("unable to decrement");
  }
  else{
    setCount(count-1);
  }

}
  return (
   <div className=' h-screen  items-centerflex flex-wrap  justify-center gap-2 '>
    <div>counter:{count}</div>
   <div className=" flex flex-wrap justify-center  gap-2 p-0 px-2 rounded-2xl"style={{backgroundColor:'white'}}> 
    <button
    onClick={()=>setCount(count+1)}
    className="flex flex-wrap px-3"> 
      increment++

    </button>
    <button  onClick={()=>check()
    }   className="flex flex-wrap px-3"> 
     decrement--

    </button>
   </div>
   </div>
  )
}

export default App
