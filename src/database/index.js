const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/nodeRest",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
);
mongoose.Promise = global.Promise;

module.exports = mongoose;
