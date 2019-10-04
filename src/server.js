const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const port = process.env.PORT || 3000;

const app = express();

mongoose.connect('mongodb+srv://finndatabase:Finndb2019@databasefinn-gxxdn.mongodb.net/databaseFinn?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//por padrao o express nao recebe json, então declaramos dessa forma abaixo!
app.use(express.json());
app.use(routes)

app.listen(port, function () {
    console.log('listening on port ' + port)
})