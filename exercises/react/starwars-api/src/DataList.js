import React from 'react';
import Person from "./Person.js"

function DataList(props) {
    const { people } = props;
    const peopleComponents = people.map((person, i) => <Person key={person.name + i} {...person} />)
    return (
        <ul>
            {peopleComponents}
        </ul>
    )
}

export default DataList;