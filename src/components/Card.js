import React, { useEffect } from 'react'
import "../assets/scss/Card.scss";
import { classes } from '../assets/data/DataClass';

const Card = ({id, title, content, onDelete}) => {
    const handleDeleteClick = () => {
        onDelete(id);
      };
  return (
    <div className='wrapper'>
        <span className='className'>{title}</span>
        <br></br>
        <span className='content-of-class'>{content}</span>
        <div className='buttons'>
            <button>edit</button>
            <button onClick={handleDeleteClick}>delete</button>
        </div>
    </div>
  )
}

export default Card