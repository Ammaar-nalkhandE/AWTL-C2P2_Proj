const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
// Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '202201495',
    database: 'loginsystem'
});

db.connect((err) => {
    if (err) {
        console.log("Error connecting to database:", err);
        return;
    }
    console.log("Connected to database");
});

app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:3001"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.execute(
        "SELECT * FROM users WHERE username = ? AND password = ?",
        [username, password],
        (err, result) => {
            if (err) {
                res.status(500).send({ error: err });
                return;
            }

            if (result.length > 0) {
                res.send(result);
            } else {
                res.status(401).send({ message: "Wrong username/password combination!" });
            }
        }
    );
});

app.listen(3001, () => {
    console.log("Running server on port 3001");
});
