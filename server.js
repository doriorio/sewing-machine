const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;


app.listen(port, ()=> console.log(`Listening on port ${port}`));

app.get('/backend', (req, res) => {
    res.send({ express: 'Your express backend is connected to react'});
})

//https://www.section.io/engineering-education/how-to-setup-nodejs-express-for-react/