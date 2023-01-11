import React from 'react';
import CardLandingPad from './CardLandingPad';

function CardContainer({animals}) {

    const showAnimals = animals.map((oneAnimal) => {
        return <AnimalCard key={oneAnimal.id} oneAnimal={oneAnimal} />
    })

    return (
        <div className='card-container'>
            <div className='card-holder'>
                <CardLandingPad/>
            </div>
        </div>
    )
}

export default CardContainer