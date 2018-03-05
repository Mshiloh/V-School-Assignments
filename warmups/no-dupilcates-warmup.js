var input = "bookkeeper larry";

function removeDupeChar(str) {
    let output = {
        uniqueChar: "",
        dupeChar: ""
    }
    for (var i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === i) {
            output.uniqueChar += str[i];
        } else {
            output.dupeChar += str[i];
        }
    }
    return output;
}

console.log(removeDupeChar(input));