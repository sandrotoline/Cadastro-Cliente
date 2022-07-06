const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get('/',function(req,res){
    res.json({message:'It`s alive'})
});

app.listen(port,function(){
    console.log(`Server running on port ${port}`)
});