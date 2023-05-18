// npm init y - package.json
// npm install express
const express = require('express');
const app = express();

//git init ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + 'views'));

//body-parser
app.use(express.urlencoded({extended:true}))
app.use(express.json());

//npm install mongodb@3.6.4
const MongoClient = require('mongodb').MongoClient;

const PORT = 8080;


app.get("/", function (req, res) {
    res.render("index");
})

app.listen(PORT, function() {
    console.log(`http://localhost:${PORT}`);
})

//jquery
//    <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
// npm install axios
//    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
