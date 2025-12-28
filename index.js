let express = require("express");
let socket = require("socket.io");

/**______ App setup  ______*/
let app = express();


/**______ Server setup  ______*/
let port = 4000;

let server = app.listen(port, () => {
   console.log(`Server is running on localhost: ${port}`);
});


/**______ Route setup  ______*/
app.get("/", (res, req) => {
   req.sendFile(__dirname + "/public/index.html");
});


/**______ Socket setup  ______*/
let io = socket(server);
io.on("connection", (socket) => {
    socket.on("chat", (data) => {
      io.emit("chat", data);
    });
});