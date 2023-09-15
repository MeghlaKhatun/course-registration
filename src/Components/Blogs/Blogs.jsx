import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import Calculate from "../Calculate/Calculate";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

        // total hour part
        const isAdd=courseName.find(item=>item.id == course.id);
        let count=course.credit;

        if(isAdd){
       
        return toast.error("Already added")
        }
        else{
            courseName.forEach(credit=>{
                count =count + credit.credit;

            })


            // Credit hour remaining part

            const totalRemaining=20-count;
            if(count >20){

               return toast.warning("The limit is over")
            }else{

                setTotalSum(count);
            
                setRemaining(totalRemaining)

                setCourseName([...courseName,course])

            }      
        }     
        }
   
    

    return (
        <div className="flex flex-col lg:flex-row mb-16 gap-6 px-8  lg:px-0">

        <div  className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-full lg:w-3/4 '>
            {
                cards.map((card,idx)=><Blog key={idx} card={card} handleCourseName={handleCourseName} ></Blog>)
            }
            <ToastContainer
            position="top-center"
            theme="light"
            />
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