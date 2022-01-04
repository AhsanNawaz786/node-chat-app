const { dirname } = require('path');
const path = require('path');
const express = require('express')

const port = process.env.port || 3000;
const publicpath = path.join(__dirname, '../public');
const app = express();

app.use(express.static(publicpath));

app.listen(port,()=>{
    console.log("Server has been started on port 3000")
})

