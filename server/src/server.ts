import express, { request, response } from 'express';

const app = express();

app.get('/users', (request, response) => {
  response.json({name: 'Neylanio', telefone: '88 99956-6961'});
});

app.listen('3333', () => {
  console.log('Back-end');
})