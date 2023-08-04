const express  = require("express");
const app = express();
require("./db/conn");
const router= require('./routes/router');
const cors = require("cors");

const port = 8000;


app.use(express.json());
app.use(cors());
app.use(router);

// with this whenever the user routes to upload then all the data in the upload folder will be shown.
app.use("/uploads", express.static("./uploads"));


app.listen(port, () => {
    console.log(`Server started at port ${port}`); 
})

