require("dotenv").config();
const express = require ("express");

const app = express();
const cors = require("cors");
const connection = require("./db");

connection()

app.use(express.json())
app.use(cors());
app.set("view engine", "ejs");

const port = process.env.PORT || 3000


app.listen(port, ()=> {
    console.log(`Running on port ${port}`);
});

app.get('/', (req,res) => {
    res.render('pages/index');
    
})

app.get('/login', (req, res) => {
    res.render('pages/login');
});

app.get('/register', (req, res) => {
    res.render('pages/register');
});