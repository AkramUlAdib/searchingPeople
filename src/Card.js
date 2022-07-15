import React from 'react';
// import img1 from './images/1.jpg'
import './Card.css'


const Card = ({name, id ,email}) => {
    return(
        <div className='img_edit'>
            <img   src={id}  alt='people' width="250" height="350"/>
            <div className='txt'>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;
