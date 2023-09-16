import PropTypes from 'prop-types';
import Course from '../Course/Course';

const Calculate = ({names,sum,total,remain}) => {
  
console.log(names)
    
    return (
        <div  className='p-4 rounded-lg drop-shadow-2xl bg-white'>
            
            
            <h1 className='text-[18px] font-bold text-[#2F80ED]'>Credit Hour Remaining {remain} hr</h1>
            <div className=' border-b-2 my-4'>
            </div>
            <h1 className='text-xl font-bold'>Course Name</h1>

            <ol className='list-decimal list-inside'>
            {
                names.map((course,idx)=><Course key={idx} name={course}></Course>)
             }
            </ol>
                    

            <div className=' border-b-2 my-4'>
            </div>
            <h1 className='text-[16px] font-medium'>Total Credit Hour : {sum} </h1>

            <div className=' border-b-2 my-4'>
            </div>
            <h1 className='text-[16px] font-medium'>Total Prices : {total} USD </h1>

            
        </div>
    );
};

Calculate.propTypes={
    names:PropTypes.array,
    sum:PropTypes.number,
    remain:PropTypes.number,
    total:PropTypes.number,

}

export default Calculate;