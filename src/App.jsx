
import { useState } from "react";
import './App.css'
import Blogs from './Components/Blogs/Blogs'

function App() {


  const [courseName,setCourseName]=useState()
  const handleCourseName=(course)=>{
    console.log("adding",course)
  }

  return (
    <div className='max-w-7xl mx-auto'>
      
      <h1 className="text-[32px] text-center mt-[50px] mb-[32px] font-bold">Course Registration</h1>
      <Blogs handleCouseName={handleCourseName}></Blogs>

    </div>
   
  )
}

export default App
