const express = require('express');
const blogRouter = require('./router/blog');
require('./db/mongoose');

const port = process.env.PORT || 3000; // port for express you can set env too.


const app = express();
app.use(express.json())

// registering router here.
app.use(blogRouter);


app.listen(port, () => {
    console.log(`serving up on ${port}`)
});