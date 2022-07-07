const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI, {})
    .then((uri) =>
      console.log(
        `database connected successfully with ${uri.connection.port}-${uri.connection.name}`
          .cyan.bold
      )
    )
    .catch((err) => {
      console.log(`${error}`.red.bold);
      process.exit(1);
    });
};

module.exports = connectDB;
