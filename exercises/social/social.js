var petOwner = {
    name: "Morgan",
    ownerGreeting: function () {
        console.log("Hello " + this.name + ", welcome to your pet profile!");
    },
    age: 22,
    city: "Salt Lake City",
    state: "Utah",
    pets: [{
            petName: "Luna",
            type: [{
                typeOfPet: "rabbit",
                breed: "Holland Lop"
            }],
            gender: "female",
            favoriteThings: [{
                treats: ["pea pods", "Morgan's brand-new books", "fresh timothy hay", "sometimes Morgan's hair when she's not paying attention..."],
                toys: ["toilet paper rolls stuffed with hay", "Kaytee hanging wood chews"],
                hangoutSpots: ["under the kitchen window", "under the bed", "on top of the air vent"],
                cuddlesAndSunggles: ["petting my cheeks", "eskimo kisses", "face nuzzles", "soft behind the ear scratches"]
            }]
        },
        {
            petName: "Nelson Meowndela",
            type: [{
                typeOfPet: "cat",
                breed: "rescue"
            }],
            gender: "male",
            favoriteThings: [{
                treats: ["just my hard food"],
                toys: ["feather stick", "my nice leather chair", "anything that Morgan is paying more attention to than me"],
                hangoutSpot: ["on top of black clothes", "by the bedroom window", "Morgan's lap", "on top of whatever Morgan is using or doing"],
                cuddlesAndSunggles: ["scratching behind the ears", "belly rubs", "curled up in the crook of Morgan's arm while drooling"]
            }]
        },
        {
            petName: "Prince",
            type: [{
                typeOfPet: "cat",
                breed: "part Ragdoll"
            }],
            gender: "male",
            favoriteThings: [{
                treats: ["deli meat", "Temptations chicken flavored treats", "Tasty Treasures and Sauce Sensations wet food", "cat nip"],
                toys: ["the world around me", "Morgan's socks"],
                hangoutSpots: ["in Morgan's lap", "by Morgan's side", "sprawled across Morgan's face", "anywhere with Morgan"],
                cuddlesAndSunggles: ["belly rubs", "face nuzzles", "being held close", "nap time snuggles all through the night"]
            }]
        }
    ]
};

petOwner.ownerGreeting();