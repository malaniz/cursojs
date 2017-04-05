const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.get('/', (req, res) => {
    // listar desde una collection
    res.send('Hola');
});
app.post('/insert', (req, res) => {
    console.log(req.body);
    // insertar en la collection 
    // req.body
    // return el _id de mongo
    res.send('estoy en post insert');
});

app.get('/delete', (req, res) => {
    // if (req.query.id) 
    //   delete de la collection
    // else
    //  necesito el id
    res.send('estoy en el delete');
})

app.post('/update/?id=lkajdsfkjhdfkj', (req, res) => { 
    // if  (req.query.id)
    // if (req.body)
    // update({_id: id}, req.body, functionjk
    res.send('estoy en otro');
});


app.listen(4444, () => console.log('server runing http://localhost:4444'))
