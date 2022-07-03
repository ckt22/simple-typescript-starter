import express from 'express';
import cluster from 'cluster';

const app = express();

app.use(express.json());

// npm install --save-dev @types/node@16 @types/express@4
app.get('/', function(req, res) {
    console.log('Hello world!');
    res.send('Hello World');
});

app.listen(3000);
