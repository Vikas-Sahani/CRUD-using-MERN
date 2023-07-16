const mongoose = require("mongoose");

const db = process.env.DATABASE;
mongoose
  .connect(db)
  .then(() => console.log("connection is succesfull"))
  .catch((error) => {
    // for dbERR => https://stackoverflow.com/questions/55499175/how-to-fix-error-querysrv-erefused-when-connecting-to-mongodb-atlas
    let dbErr = "querySrv EREFUSED _mongodb._tcp.cluster0.w0op9ug.mongodb.net";
    if (error.message === dbErr) {
      console.log("db related error : - ", error.message);
    }
    console.log(error.message);
  });
