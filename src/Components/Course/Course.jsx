import PropTypes from 'prop-types';

const Course = ({name}) => {
  const {course_name}=name
   
    return (
        <div>
           
                <li>{course_name}</li>

               
           
        </div>
    );
};

Course.propTypes={
    name:PropTypes.object,
    
}

export default Course;