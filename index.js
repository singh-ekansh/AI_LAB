const express = require('express');

const app = express(); // create express app
const port = 3000; // we will use this later

app.listen(port, () => console.log(`Server started on port ${port}`); // listen for requests