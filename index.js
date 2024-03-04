import http from 'http'
import fs from 'fs'
import axios from 'axios'


fs.writeFile('datas.txt', 'Hello World', (err) => {
    console.log('Fichier crée');
});


fs.readFile('datas.txt', 'utf8', (err, data) => {
    console.log(data);
});


const server = http.createServer((req, res) => {
    res.end('<h1>Hello World</h1>');
});


server.listen(8000, () => {
    console.log('Serveur sur http://localhost:8000');
});


axios.get('http://www.google.com')
    .then(response => {
        fs.writeFile('google.html', response.data, (err) => {
            console.log('Contenu google recupéré.');
        });
    })