const express = require('express');
const app = express();
const port = 8000;

// use router
app.use('/', require('./routes'));

app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function(err){
    if(err){
        console.error(`Error starting the server: ${err}`);
    }else{
        console.log(`Server started running on port: ${port}`);
    }
});