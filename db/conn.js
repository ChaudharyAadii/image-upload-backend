const mongoose = require('mongoose');

const DB = "mongodb+srv://chaudharyaditya1232:Aditya@cluster0.aaxsawq.mongodb.net/ImgUpload?retryWrites=true&w=majority"

mongoose.connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected");
}).catch((error) => {
    console.log("Error", error);
});