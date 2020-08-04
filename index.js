require("dotenv").config({ path: __dirname + "/.env" }); //load env variables
const express = require("express");
const connectDB = require("./lib/db");

const app = express();

// Fontend
app.use(express.static('client/build'))

// Init Middleware
//extended: true ->support parsing of application/x-www-form-urlencoded post data
app.use(express.json({ extended: false }));

// Define routes
app.use("/api", require("./routes/index"));

// UI
app.get("/*", (req, res) => {
  res.sendFile("client/build/index.html", { root: __dirname });
});

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
