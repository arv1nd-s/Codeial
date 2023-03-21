const express = require('express');
const port = 8000;

const app = express();

app.listen(port, function(err){
    if(err){
        console.error(`Error starting the server: ${err}`);
    }else{
        console.log(`Server started running on port: ${port}`);
    }
});