import React, { useState } from 'react'
import Card from '../components/Card';
import "../assets/scss/ShowClass.scss";
import { useActionData, useNavigate } from 'react-router-dom';
import { classes } from '../assets/data/DataClass';

const ShowClass = () => {
    const [classCopy, setClassCopy] = useState(classes);

    const navigate= useNavigate();
    const handleDeleteCard = (id) => {
        const newClasses = classes.filter((card) => card.id !== id);
        setClassCopy(newClasses);
    }
    return (
        <>
            <div className='show-class-container'>
                {classCopy.map(item => 
                    <div id={item.id}>
                        <Card title={item.title} content={item.content} onDelete = {handleDeleteCard}/>
                    </div>)}
            </div>
            <button onClick={() => navigate("/blogs/create")} className='go-create-page'>Create Page</button>
        </>

    )
}

export default ShowClass