const env = require("dotenv").config(),
  app = require("./app"),
  port = process.env.PORT || 3000,
  fs = require("fs"),
  httpsOptions = {
    key: fs.readFileSync("./config/key.pem"),
    cert: fs.readFileSync("./config/cert.pem"),
    // requestCert: false,
    // rejectUnauthorized: false,
  };

// let http = require("http").Server(app),
//   io = require("../controllers/socketDocs.controller")(http);

let https = require("https").Server(httpsOptions, app),
  io = require("../controllers/socketDocs.controller")(https);

https.listen(port, (err) => {
  !err
    ? console.log(`The service is running at https://localhost:${port}/`)
    : console.log(`the service is not working`);
});
