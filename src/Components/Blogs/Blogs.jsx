import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {

    const [cards,setCards]=useState([]);

    useEffect(()=>{
        fetch ("details.json")
        .then (res => res.json())
        .then (data => setCards(data))
    },[])



    return (
        <div className="flex flex-col lg:flex-row mb-16">

        <div  className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-3/4  '>
            {
                cards.map((card,idx)=><Blog key={idx} card={card}></Blog>)
            }
        </div>

        <div className="w-1/4">

        </div>

        </div>

    );
};

export default Blogs;