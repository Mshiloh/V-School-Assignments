// Using JavaScript to get values from your form:

// Because JavaScript is JavaScript and HTML is HTML there are many different ways to 
// get the value from an input box.

// By id:
// * With the id attribute of the input box
// * With the name attribute of the form, and the name attribute of the input box
// We know that we can select anything in our HTML (more accurately the DOM) with the id:

// <div id="first-name">Georgette</div> 

document.getElementById("first-name")

// Once we've selected that element, we can look at it's attributes. Using the above example:

document.getElementById("first-name").innerHTML //=> Morgan  

// We can do this same sort of thing with .value. We are going to select the input box by 
// it's id and then get the value from it.

// <input id="first-name"/>  

document.getElementById("first-name").value

// By name Any form that we've named becomes part of the document. So we can select this 
// form:

// <form name="info">  
//     <input name="age"/>
// </form>  
// as easily as:

document.info
// and any input in that form as easily as:

document.info.age

// and it's value like so:

document.info.age.value

// Follow along as we create a little mad lib game. If you haven't played mad libs before, 
// we will have the user pick a noun and a verb and put those into a potentially silly 
// sentence.

// First, our HTML form. It will have an input for a noun, a verb, and an adjective.

// <form name="words">  
//     <input name="noun" placeholder="noun"/>
//     <input name="adverb" placeholder="adverbe"/>
//     <input name="verb" placeholder="verb"/>
// </form>  
// We would love to be able to grab the values from each of those input boxes and then print 
// our silly sentence. Let's alert() it now, for simplicity.

// It would be nice if we could just:

var noun = document.words.noun.value
var adverb = document.words.adverb.value
var verb = document.words.verb.value

alert("The " + noun + " did " + adverb + " " + verb + " in it's home")

// But, if you try this out, the alert happens right away and all these variables are empty 
// strings. This is because we haven't given our user any time to type in their response.

// The appropriate user experience should be: they type their response, and then click a 
// button.

// For that, we'll add a button to our HTML and some event listener stuff.

// 
document.words.addEventListener("submit", function (e) {
    e.preventDefault()

    var noun = document.words.noun.value
    var adverb = document.words.adverb.value
    var verb = document.words.verb.value

    alert("The " + noun + " did" + adverb + " " + verb + " in it's home")
})

//   Concerning the button, the submit event, the event object, and event.preventDefault(), 
//   a very brief explanation:

// A button in a form defaults to that forms submit button. Web developers use to submit forms 
// and refresh the page by default. This is archaic and dumb, and now we overwrite that 
// functionality with event.preventDefault() using the event object itself.

// The submit stuff it nice for the user, because they can submit a form with the Enter key.