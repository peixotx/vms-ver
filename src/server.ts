import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    return response.sent('Hello World');
    console.log('Acessou a rota');
})


//localhost:3333/users

app.listen(3333);