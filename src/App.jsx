import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(10)
function check(){
  if(count==0){
    // console.log("unable to decrement");
    alert("not possilbe")
  }
  else{
    setCount(count-1);
  }

}
  return (
   <div className='h-screen  bg-sky-300 items-center flex flex-wrap justify-center gap-2'>
    
    <div className='bg-pink-200 rounded-2xl px-1 text-3xl'>counter:{count}</div>
   <div className=" flex  flex-wrap justify-center  gap-2 p-0 px-2 rounded-2xl"style={{backgroundColor:'orangered'}}> 
    <button 
    onClick={()=>setCount(count+1)}
    className="flex  bg-black text-white rounded-2xl flex-wrap px-3"> 
      increment++

    </button>
    <button  onClick={()=>check()
    }   className="flex bg-black text-white rounded-2xl flex-wrap px-3"> 
     decrement--

    </button>
   </div>
   </div>
  )
}

export default App
