const mongoose = require('mongoose');

// mongo connection url.
const MONGO_URL = 'mongodb://127.0.0.1:27017/blogs-v2';

//mongo connection through mongoose
mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});