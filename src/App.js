import React from 'react';
import './App.css';
import fakeData from '../src/fakeData/courses.js'
import { useState } from 'react';
import Process from './component/Process/Process';
import Cart from './component/Cart/Cart';

function App() {
 const [courses, setCourses] = useState(fakeData)
 const [cart, setCart] = useState([])

const handleAddCourse = (course) =>{
  const newCart = [...cart, course]
  setCart(newCart);
}
  return (
    <div style={{display:"flex"}} className="main-container">
      <div className="course-container">
          {
            courses.map(course => <Process course={course} handleAddCourse={handleAddCourse}></Process>)
          }
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
      
    </div>
  );
}

export default App;
