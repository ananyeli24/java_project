const express = require('express')
const app = express()
const mysql = require("mysql")
const bodyParser = require("body-parser")
const cors = require("cors")
const dotenv = require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    user: process.env.NODE_USER ,
    host:process.env.NODE_HOST ,
    password: process.env.NODE_PASSWORD ,
    database: process.env.NODE_DATABASE 
  })
  db.connect(function (err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });
  app.post("/api/contactinfo", (req, res) => {
    const fullname = req.body.fullname;
    const phonenumber = req.body.phonenumber;
    const email = req.body.email;
  
    const sqlInsert =
      "INSERT INTO Friends (fullname, email, phonenumber) VALUES (?, ?, ?)";
    db.query(sqlInsert, [fullname, email, phonenumber], (err, result) => {
      console.log(err);
    });
  });
  // app.get("/api/friends", async (req, res) => {
  //   res.set({
  //     "Content-Type": "application/json",
  //     "Access-Control-Allow-Origin": "*",
  //   });
  
  //   db.getConnection((err, conn) => {
  //     if (err) throw err;
  
  //     try {
  //       const qry = `SELECT * FROM Friends`;
  //       conn.query(qry, (err, result) => {
  //         conn.release();
  //         if (err) throw err;
  //         res.send(JSON.stringify(result));
  //       });
  //     } catch (err) {
  //       console.log(err);
  //       res.end;
  //     }
  //   });
  // });
app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(3001, ()  => {
    console.log('running on port 3001')
})