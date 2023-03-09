const mongoose = require("mongoose");

// const { MONGO_URI } = process.env;
const password = "EbukA300$";
exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(
      `mongodb+srv://williams:${password}@cluster0.cskai0m.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    //     useCreateIndex: true,
    //     useFindAndModify: false,
      }
    )
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};
