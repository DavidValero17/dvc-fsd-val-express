const express = require('express');
require('dotenv').config();
const db = require('./config/db.js');
const router = require('./router');



const app = express();

app.use(router)


const PORT = process.env.PORT || 3000

db()
    // .then(() => {
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
// })
// .catch((error) => {
    // console.log("DB not working");
// })