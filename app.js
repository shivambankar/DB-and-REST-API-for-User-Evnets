var express = require("express");
var app = express();

app.get("/user", (req, res, next) => {
    res.json(["uid: 1","name:shivam", "gender:male", "email:ss@gmail.com"] );    
});
app.get("/event", (req, res, next) => {
    res.json(["id: 1","uid:2", "name:tech", "occurence:weekly","startDate:1-10-21","startDate:31-10-21"] );    
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});