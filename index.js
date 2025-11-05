const app = require ('express')();
const PORT = 8080;

app.listen( PORT,
() => console.log(`it's alive on http://localhost:${PORT}'`)
)

app.get('/tshirt', (req, res) => {
res.status(200).send({
tshirt: 'tshirt', size: 'large'})
});

app.post('/tshirt/:id', (req, res) => {
const {id} = req.params;
const {logo} = req.body;

    if (!logo){
        res.status(418).send({message: 'Logo needed'})
    }

    res.send({
        tshirt: `tshirt with your ${logo} and ID of ${id}`),
    });
});