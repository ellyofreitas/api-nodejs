const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/config'); 

//string conexao --> mongodb+srv://ellyofreitas:<password>@clusterapi-omdzw.mongodb.net/test?retryWrites=true
const url = config.bd_string;
const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true };

mongoose.connect(url, options);
mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', (err) => console.log('Erro na conexão com o banco de dados: ' + err));

mongoose.connection.on('disconnected', () => console.log('Aplicação desconectada do banco de dados!'));

mongoose.connection.on('connected', () => console.log('Banco de dados conectado com sucesso!'));

//BodyParser

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const indexRoute = require('./Routes/index');
const usersRoute = require('./Routes/users');

app.use('/', indexRoute);
app.use('/users', usersRoute);

app.listen(port);

module.exports = app;