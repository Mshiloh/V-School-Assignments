var lyrics = ["This", "hit", "that", "ice", "cold",
    "Michelle", "Pfeiffer", "that", "white",
    "gold", "This", "one", "for", "them",
    "hood", "girls", "Them", "good", "girls",
    "straight", "masterpieces", "Stylin'",
    "whilen'", "livin'", "it", "up", "in",
    "the", "city", "Got", "Chucks", "on",
    "with", "Saint", "Laurent", "Gotta", "kiss",
    "myself", "I'm", "so", "pretty"
];

//#1
var cleanLyrics = lyrics.join(", ");

console.log(cleanLyrics);

//#2
var reversedLyrics = lyrics.reverse();

var reversedAndCleaned = reversedLyrics.join(", ");

console.log(reversedAndCleaned);

//#3
var arrEveryOtherLyric = [];

for (var i = 0; i < lyrics.length; i++) {
  if (i % 2 === 0) {
    arrEveryOtherLyric.push(lyrics[i]);
  } 
}

var reverseBackLyric = arrEveryOtherLyric.reverse();

console.log(reverseBackLyric);