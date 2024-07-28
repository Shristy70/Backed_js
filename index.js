const express = require("express");
const app = express();
// console.dir(app);

let port = 3000;
app.listen(port, () => {
  console.log(`your port is : ${port}`);
});

app.use((req, res) => {
  console.log(req);
  console.log("res get");
  res.send({
    name: "shristy",
    age: 20,
  });
});
