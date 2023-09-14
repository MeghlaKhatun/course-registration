import PropTypes from 'prop-types';

const Calculate = () => {
    return (
        <div  className='p-4 rounded-lg drop-shadow-2xl bg-white'>
            
            
            <h1 className='text-[18px] font-bold text-[#2F80ED]'>Credit Hour Remaining 20 hr</h1>
            <div className=' border-b-2 my-4'>
            </div>
            <h1 className='text-xl font-bold'>Course Name</h1>

            <div className=' border-b-2 my-4'>
            </div>
            <h1 className='text-[16px] font-medium'>Total Credit Hour : </h1>
            
        </div>
    );
};

Calculate.propTypes={
    card:PropTypes.object,
}

export default Calculate;