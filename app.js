const mongoose = require('mongoose');
const express = require('express');
const app = express();
const routes = require('./routes/bookRoutes');
const port = process.env.PORT || 5000 ;
const cors = require('cors')
const DATABASE = process.env.DATABASE

// middlewares 

app.use(cors());
app.use(express.json());
app.use('/books', routes);

mongoose.connect(DATABASE)
.then(() => {
    console.log('Database Connected...')
})
.then(() => {
    app.listen(port, () => {
        console.log(`Server is listening at http://127.0.0.1:${port}`)
    })
})