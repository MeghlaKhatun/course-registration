import PropTypes from 'prop-types';

const Blog = ({card,handleCourseName}) => { 
    const {details,course_name,price,credit,img,book_img}=card;
    return (
            <div>
            <div className='p-4 rounded-lg drop-shadow-2xl bg-white justify-center items-center'>
            <img className='w-full' src={img} />
            <div>
                <h1 className='text-[18px] font-semibold my-4'>{course_name}</h1>
                <p className='text-[14px] font-normal'>{details}</p>
                <div className='flex justify-between items-center mt-[19px] mb-6'>
                    <h1 className='text-[22px]'>$</h1>
                    <p className='text-[16px] font-medium'>Price : {price}</p>
                    <img src={book_img} alt="" />
                    <p className='text-[16px] font-medium'>Credit: {credit}hr</p>
                </div>

                <div>
                <button onClick={()=>handleCourseName(card)} className='bg-[#2F80ED] text-white text-center w-full py-[9px] text-[18px] font-semibold rounded-[8px]'>Select</button>
                </div>

            </div>
           
        </div>
        </div>
        
    );
};


Blog.propTypes={
    card:PropTypes.object,
    handleCourseName:PropTypes.func
}
export default Blog;