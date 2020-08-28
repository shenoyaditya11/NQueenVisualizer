const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
//app.use(express.static('src')); /* this line tells Express to use the public folder as our static folder from which we can serve static files*/


app.listen(3000, function(){
  console.log("Listening on port 3000!")
});


app.get('/', (req, res)=> {
   res.sendFile(path.join(__dirname, 'public', 'index.html'));
});