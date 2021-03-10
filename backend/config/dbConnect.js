const mongoose = require('mongoose');

require('dotenv').config();
const uri = process.env.ATLAS_URI;
const mongo_ok_msg = process.env.MONGO_CONNECTION_OK_MSG;

mongoose.connect(uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    }).then(() => console.log(mongo_ok_msg)).catch(console.error);