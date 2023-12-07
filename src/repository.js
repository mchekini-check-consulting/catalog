const { Client } = require('pg')
const fs = require('fs');

const client = new Client({
    user: 'postgres',
    host: process.env.DB_HOST,
    database: 'postgres',
    password: 'postgres',
    port: 5432,
})


const runSqlScript = () => {
    fs.readFile('./src/init_data.sql', 'utf8', (err, sql) => {
        if (err) {
            console.error('Erreur lors de la lecture du fichier SQL:', err);
            return;
        }

        client.query(sql, (err, res) => {
            if (err) {
                console.error('Erreur lors de l\'exécution du script SQL:', err);
            } else {
                console.log('Script SQL exécuté avec succès.');
            }
        });
    });
};
runSqlScript();


exports.client = client