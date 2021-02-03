const express = require('express');
const path = require("path");
const app = express();

//Serve website
app.use(express.static(path.join(__dirname, "public")));


app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname, "public", "index.html"), err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});
