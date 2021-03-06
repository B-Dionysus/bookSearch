// A template for the backend portion was provided to the class by Paul Cwik in order to facilitate an easier deployment to heroku and github.

// Dependencies
const express = require("express");
const routes = require("./routes");
const path = require("path");
const connectDB = require("./config/db");

// Express instance
const app = express();

// connect to db
connectDB();

// Variable Port
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API and View Routes
app.use(routes);

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

// Start the server
app.listen(PORT, () => {
  if (process.env.NODE_ENV !== "production") {
    console.log(`Server listening at http://localhost:${PORT}`);
  }
});
 