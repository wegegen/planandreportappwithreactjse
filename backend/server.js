
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "planandreports"
});

app.post('/signup', (req, res) => {
  const sql = "INSERT INTO signup (fullname, username, password) VALUES (?, ?, ?)";
  const values = [
    req.body.fullname,
    req.body.username,
    req.body.password
  ];

  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json({ error: "Error" });
    }
    return res.json(data);
  });
});


app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM signup WHERE username = ? AND password = ?";
  const values = [username, password];

  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json({ error: "Error" });
    }

    if (data.length > 0) {
      const userRole = getUserRole(username);

      if (userRole === 'otheruser') {
        return res.json({ success: "otheruser" });
      } else if (userRole === 'staff') {
        return res.json({ success: "staff" });
      } else {
        return res.json({ error: "Invalid role" });
      }
    } else {
      return res.json({ error: "Fail" });
    }
  });
});

function getUserRole(username) {
  if (username.startsWith('wour/')) {
    return 'student';
  } else if (username.startsWith('tech/')) {
    return 'staff';
  } else {
    return null;
  }
}


app.listen(8081, () => {
  console.log("The server is listening on port 8081");
});
