import React from 'react';
import './Process.css';

const Process = (props) => {
   const {name, title, price} = props.course;
    const handleAddCourse = props.handleAddCourse;
    return (
        <div className="process">
                <h2 className="heading">{name}</h2>
                <br/>
                <h4>Title: {title}</h4>
                <p><small>Price:{price}</small></p>
                <button className="main-button" onClick={() => handleAddCourse(props.course)}>Enroll Now</button>
        </div>
    );
};

export default Process;