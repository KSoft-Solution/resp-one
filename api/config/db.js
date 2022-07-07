const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI, {})
    .then((uri) =>
      console.log(
        `database connected successfully with ${uri.connection.port}-${uri.connection.name}`
      )
    )
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};

module.exports = connectDB;
