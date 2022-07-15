import React from 'react';
import Card from './Card';
import './CardList.css'

const CardList = ({ people }) => {
    return(
        <div >
            {
                people.map((user, i) => {
                    return (
                        <div className='tc'>
                            <Card key={i} 
                            id={people[i].id} 
                            name={people[i].name} 
                            email={people[i].email}/>
                        </div>
                    );
                })

            }
        </div>
    );
} 

export default CardList;