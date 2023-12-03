const express = require('express');
const pino = require('pino');
const expPino = require('express-pino-logger');

const logger = pino({
    level: 'info', prettyPrint: false, useLevelLabels: true
});

const expLogger = expPino({
    logger: logger
});

const app = express();

app.use(expLogger);

app.get('/health', (req, res) => {
    var stat = {
        app: 'OK',
    };
    res.json(stat);
});

app.get('/', (req, res) => {
    res.json({message: 'Hello World from catalog'});
});

const port = process.env.CATALOG_SERVER_PORT || '8080';
app.listen(port, () => {
    logger.info('Started on port', port);
});