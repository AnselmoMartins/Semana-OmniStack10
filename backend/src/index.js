    const express = require('express');
    const mongoose = require('mongoose');
    const routes = require('./routes');

    const app = express();

    mongoose.connect('mongodb+srv://anselmo:hbjz2rcn@cluster0-y4gds.mongodb.net/week10?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    app.use(express.json());
    app.use(routes);
    app.listen(3333);
    
