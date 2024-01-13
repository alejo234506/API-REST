const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


let array = [];

app.use(bodyParser.json());

// mostrar
app.get('/', (req, res) => {
    res.send(array)
    
    
})
// crear
app.post('/', (req, res) => {
    array.push(req.body.name);
    array.push(req.body.apellido);
    array.push(req.body.email);
    array.push(req.body.telefono);
    
    res.status(200);
    res.send('mensaje agregado correctamente');
})

// actualizar
app.put('/:name', (req, res) => {
    array[(req.params.name)].name = req.body.name;
    res.status(200);
    res.send('se actualizo el mensaje correctamente');
});

// eliminar
app.delete('/:number', (req, res) => {
    array.splice(req.params.number, 0);

    res.status(200);
    res.send('se elimino correctamente');
})

app.listen(port, () => {
    console.log('Its working');
});