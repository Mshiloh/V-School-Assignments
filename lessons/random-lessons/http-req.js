//request to star wars api
request("https://swapi.co/api/people/1/", function (err, response, body) {
    if (!err && respose.statusCode === 200) {
        var data = JSON.parse(body);
        console.log(data);
    }
})