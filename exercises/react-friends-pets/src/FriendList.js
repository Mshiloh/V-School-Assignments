import React from "react";
import Friend from "./Friend";
// import Pets from "./Pets";

const friends = [
    {
        name: "Eric Clapton",
        age: 72,
        pets: [
            {
                petname: "Cocaine",
                breed: "French Poodle"
            }, {
                petname: "Жанна",
                breed: "Russian Woman"
            }
        ]
    }, {
        name: "B.B. King",
        age: -3,
        pets: [
            {
                petname: "Princess III",
                breed: "Poison Dart Frog"
            }, {
                petname: "Princess",
                breed: "King Boa"
            }, {
                petname: "Queen",
                breed: "Freddie Mercury"
            }
        ]
    }, {
        name: "Jerry Seinfeld",
        age: 63,
        pets: [
            {
                petname: "Popeye's",
                breed: "Crawdad"
            }, {
                petname: "Airline Food",
                breed: "Cockroach"
            }, {
                petname: "Sneaky",
                breed: "Old Sock"
            }
        ]
    }, {
        name: "Betty White",
        age: 96,
        pets: [
            {
                petname: "Mr. Clean",
                breed: "Sphynx Cat"
            }
        ]
    }, {
        name: "Lenny Pepperbottom",
        age: 25,
        pets: [
            {
                petname: "Aspen",
                breed: "Tree"
            }, {
                petname: "Neat Bird",
                breed: "I don't know, a bird."
            }, {
                petname: "Rusty",
                breed: "Mounatin Beast"
            }
        ]
    }, {
        name: "Han Solo",
        age: 33,
        pets: [
            {
                petname: "Prince",
                breed: "Ragdoll Cat"
            }, {
                petname: "Nelson Meowndela",
                breed: "Long-Haired Domestic Cat"
            }, {
                petname: "Luna",
                breed: "Holland Lop Rabbit"
            }
        ]
    }
];

function FriendList() {
    const list = friends.map((person, i) => <Friend key={person + i} human={person} pets={person.pets}/>);
    return (
        <div>
            {list}
        </div>
    )
};

export default FriendList;