import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import Calculate from "../Calculate/Calculate";



const Blogs = () => {

    const [cards,setCards]=useState([]);
    const [courseName,setCourseName]=useState([])


    useEffect(()=>{
        fetch ("details.json")
        .then (res => res.json())
        .then (data => setCards(data))
    },[])


    const handleCourseName =(course)=>{
        const newCourse=[...courseName,course]
        setCourseName(newCourse)
    }
   
    

    return (
        <div className="flex flex-col lg:flex-row mb-16 gap-6">

        <div  className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-3/4  '>
            {
                cards.map((card,idx)=><Blog key={idx} card={card} handleCourseName={handleCourseName} ></Blog>)
            }
        </div>

            <div>
                <Calculate names={courseName}></Calculate>
            </div>
       
        
       </div>
      

    );
};




export default Blogs;