import fetch from 'node-fetch';

import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express();
app.use(cors());

// const port = process.env.PORT || 5000;
const port = 5000;


app.listen(port, ()=> console.log(`Listening on port ${port}`));

app.get('/api', (req, res) => {
    console.log(fetch);
    // res.send({ express: 'Your express backend is connected to react'});
    fetch('https://type.fit/api/quotes', { method: 'GET' })
    .then(res => res.json())
    .then(json => res.send({json}));

});



//https://www.section.io/engineering-education/how-to-setup-nodejs-express-for-react/
//https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine