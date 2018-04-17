const log = console.log;

// 1a)
function sum(x, y) {
  //check data types first and throw error
  if (typeof x !== "number" || typeof y !== "number") {
    throw "The type is not a number.";
  }
  return x + y;
}

// 1b)
try {
  sum("1", "2");
} catch (err) {
log(err);
}

// 2a)
var user = {
  username: "sam",
  password: "123abc"
};

function login(username, password) {
  if (username !== user.username) {
    throw "Incorrect Username";
  } else if (password !== user.password) {
    throw "Incorrect Password";
  } else {
    log("Login successful!")
  }
}

// 2b)
try {
  login("sam", "123ab")
} catch (err) {
log(err);
}