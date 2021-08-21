const mongoose = require("mongoose");
const dotenv = require("dotenv");


// NOTE UNCAUGHTEXCEPTIONS SHOULD BE AT THE TOP BEFORE ANY OTHER CODE EXCUTED
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTIONS!..💥💥");
  console.log(`Error ==> ${err.stack}`);
  process.exit(1);
  //ALERT IN PRODUCTION YOU WILL NEED TO RESTAST THE APPLICATION
  // SOME PROVIDERS DO IT BY DEFAULT BUT YOU NEED TO MAKE SURE OF IT
});

dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:true
  })
  .then(console.log("database connected successfully"));


// start server
const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});


