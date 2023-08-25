// db connection
const mongoose = require("mongoose");
const connection = () => {
  let dbConnectionString = `mongodb+srv://irfanmaryam32:upsji6Ek4vp8vy0E@cluster0.qkgmrgk.mongodb.net/School-Management-System?retryWrites=true&w=majority`;
  //   console.log('dbConnectionString ', dbConnectionString);

  mongoose
    .connect(`${dbConnectionString}`, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("database is connected");
    })
    .catch((err) => {
      console.log("error ... in db connection ");

      console.log(err);
    });
};
// using mongoose promise
mongoose.Promise = global.Promise;

module.exports = connection;
