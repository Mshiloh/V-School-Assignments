import React from 'react'

function Pet(props) {
    return (
        <li>
            <h4>Pet Name: {props.pet.petname}</h4>
            <h4>Breed: {props.pet.breed}</h4>
            <hr className="hrSub" />
            {/* all the other info */}
        </li>
    )
}

export default Pet;