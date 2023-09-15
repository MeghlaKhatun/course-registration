import PropTypes from 'prop-types';

const Course = ({name}) => {
  const {course_name}=name
   
    return (
        <div>
            <ol>
                <li>{course_name}</li>
            </ol>
        </div>
    );
};

Course.propTypes={
    name:PropTypes.object,
    
}

export default Course;