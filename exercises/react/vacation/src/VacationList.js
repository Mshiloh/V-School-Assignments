import React from "react";
import Cards from "./Cards";
// import Pets from "./Pets";

let vacationSpots = [
    {
        place: "Meridian, Idaho",
        price: 40,
        timeToGo: "Spring"
    }, {
        place: "Cancun",
        price: 900,
        timeToGo: "Winter"
    }, {
        place: "China",
        price: "1,200",
        timeToGo: "Fall"
    }, {
        place: "Russia",
        price: "1,100",
        timeToGo: "Summer"
    }, {
        place: "Lebanon",
        price: 400,
        timeToGo: "Spring"
    }
];

function VacationList() {
    const list = vacationSpots.map((vaycaySpot, i) => <Cards key={vaycaySpot + i} spot={vaycaySpot} />);

    return (
        <div>
            <h1 className="title">Vacation Spots</h1>
            <br />
            {list}
        </div>
    )
};

export default VacationList;