const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const beer = require("./routes/api/beer");

const app = express();

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use routes

app.use("/api/beer", beer);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
