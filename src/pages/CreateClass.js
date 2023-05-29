import React from 'react';
import "../assets/scss/CreateClass.scss"

const CreateClass = () => {
    const handleAddClass = () => {
        console.log("add new");
    }
  return (
    <div className='create-class-container'>
        <input placeholder='title'></input>
        <textarea placeholder='content'></textarea>
        <button onClick={handleAddClass} className='create-class'>create</button>
    </div>
  )
}

export default CreateClass