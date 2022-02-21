const mongoose = require('mongoose');

const dbName = "Products";
mongoose.connect(`mongodb://localhost/${dbName}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log("You are connected to the database!"))
    .catch(err => console.log("Something went wrong connecting to the database", err));