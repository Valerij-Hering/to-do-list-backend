const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./ToDoRoutes');
const cors = require('cors');

require('dotenv').config();

mongoose.set('strictQuery', false)

app.use(express.json());
app.use(cors());

const PORT = 9000 || process.env.port

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('WE WERE CONNECTED TO MONGO'))
.catch((err) => console.log(err))

app.use(routes)

app.listen(PORT, () => {
    console.log(`I'AM LISTENNING ON PORT ${PORT}`)
})