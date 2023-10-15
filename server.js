/*  EXPRESS */
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin:'http://localhost:3000'
}));

var access_token = "";

const port = 2400;
app.listen(port , () => console.log('App listening on port ' + port));

const axios = require('axios')


const clientID = '0661798dd8b17b1f2412'
const clientSecret = '76c355ce64ad47d96ff2555ae90e37542a9fcba6'

// Function to authorize user's Github

app.get('/authenticate/:code', (req, res) => {

  const requestToken=req.params.code;
  console.log(req.query);
  
  axios({
    method: 'post',
    url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
    // Set the content type header, so that we get the response in JSON
    headers: {
         accept: 'application/json'
    }
  }).then((response) => {
    access_token = response.data.access_token
    console.log(response.data)
    res.send({token:access_token});
  })
})


