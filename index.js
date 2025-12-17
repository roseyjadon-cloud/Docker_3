// import express

const express = require('express');

// create an express app
const app = express();
app.get('/', (req, res) => {
    return res.send("<h1>Hello World</h1>");
})
//listen
app.listen(5001, () => {
    console.log('Server is running on port 5001');
})