const express = require('express');
const pino = require('pino');
const expPino = require('express-pino-logger');


const db = require("./src/repository")

const logger = pino({
    level: 'info', prettyPrint: false, useLevelLabels: true
});

const expLogger = expPino({
    logger: logger
});

db.client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

const app = express();

app.use(expLogger);

app.get('/health', (req, res) => {
    var stat = {
        app: 'OK',
    };
    res.json(stat);
});


app.get('/catalog', async (req, res) => {
    try {
        const result = await db.client.query('SELECT * FROM catalog');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erreur lors de la récupération des données');
    }
});




app.get('/', (req, res) => {
    res.json({message: 'Hello World from catalog'});
});


const port = process.env.CATALOG_SERVER_PORT || '8080';
app.listen(port, () => {
    logger.info('Started on port', port);
});