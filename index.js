const app = require ('express')();
const PORT = 8080;

app.listen( PORT,
() => console.log(`it's alive on http://localhost:${PORT}'`)
)

app.get('/tshirt');//i dont understand this shit