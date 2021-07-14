var mongoose = require('mongoose');
var onlineurl = "mongodb+srv://raam:ramm1234@cluster0.gihj1.mongodb.net/projectdata?retryWrites=true&w=majority";
var url= "mongodb://localhost:27017/projectdata";
mongoose.set('useCreateIndex', true);
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },function(err, db) {
  if (err) throw err;
  console.log("Database created!");
});

