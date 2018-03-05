var input = "bookkeeper larry";

function removeDupeChar(str) {
    let output = {
        dupeChar: "",
        uniqueChar: ""
    }
    for (var i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === i) {
            output.dupeChar += str[i];
        } else {
            output.uniqueChar += str[i];
        }
    }
    return output;
}

console.log(removeDupeChar(input));