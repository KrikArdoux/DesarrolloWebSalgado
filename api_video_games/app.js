const express = require("express");
const app = express();

const PORT = 3000;

const games=[
    {"id" : 1, "Name:":"Among us", "Genre": "Strategy"},
    {"id" : 2, "Name:":"The Legend of Zelda", "Genre": "Adventure"},
    {"id" : 3, "Name:":"Clash Royale", "Genre": "Strategy"}
];

app.get("/games" , (req, res)=>{
    res.json(games);
});

app.listen(PORT , ()=>{
    console.log("App is running on port " + PORT)
});