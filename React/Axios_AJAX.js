// Similar to fetch API

// Make XMLHttpRequests from the browser
// Make http requests from node.js
// Supports the Promise API
// Cancel requests

// $ npm install axios
// const axios = require('axios').default;

const axios = require('axios');

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
