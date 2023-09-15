import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import Calculate from "../Calculate/Calculate";



const Blogs = () => {

    const [cards,setCards]=useState([]);
    const [courseName,setCourseName]=useState([]);
    const [totalSum,setTotalSum]=useState(0);
    const [remaining,setRemaining]=useState(20);
   


    useEffect(()=>{
        fetch ("details.json")
        .then (res => res.json())
        .then (data => setCards(data))
    },[])


    const handleCourseName =(course)=>{


        console.log(course)
        const isAdd=courseName.find(item=>item.id == course.id);
        let count=course.credit;
    
      
        if(isAdd){
           return alert ("already adding")
        }
        else{
            courseName.forEach(credit=>{
                count =count + credit.credit;

            })

            const totalRemaining=20-count;
            if(count >20){
                return alert("Dont show")
            }else{

                setTotalSum(count);
            
                setRemaining(totalRemaining)

                setCourseName([...courseName,course])

            }
                   
           
        }

        
        }
   
    

    return (
        <div className="flex flex-col lg:flex-row mb-16 gap-6">

        <div  className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-3/4  '>
            {
                cards.map((card,idx)=><Blog key={idx} card={card} handleCourseName={handleCourseName} ></Blog>)
            }
        </div>

            <div>
                <Calculate names={courseName}
                sum={totalSum}
                remain={remaining}></Calculate>
            </div>
       
        
       </div>
      

    );
};




export default Blogs;