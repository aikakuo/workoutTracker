// const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const express = require('express');
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));


mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// require(apiRoute)(app);
require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});