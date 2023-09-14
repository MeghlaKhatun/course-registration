import { useEffect } from "react";
import PropTypes from 'prop-types';
import { useState } from "react";
import Blog from "../Blog/Blog";
import Calculate from "../Calculate/Calculate";


const Blogs = ({handleCourseName}) => {

    const [cards,setCards]=useState([]);
    

    useEffect(()=>{
        fetch ("details.json")
        .then (res => res.json())
        .then (data => setCards(data))
    },[])



    return (
        <div className="flex flex-col lg:flex-row mb-16 gap-6">

        <div  className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-3/4  '>
            {
                cards.map((card,idx)=><Blog key={idx} card={card} handleCourseName={handleCourseName}></Blog>)
            }
        </div>

        <div >
        <Calculate></Calculate>
        </div>
            
        </div>

    );
};


Blogs.propTypes={
    
    handleCourseName:PropTypes.func
}

export default Blogs;