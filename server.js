const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
app.use(express.static("client/public"));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "../client/build/index.html"));
});
// Add routes, both API and view
app.use(routes);
// Start the API server
app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}!`);
});