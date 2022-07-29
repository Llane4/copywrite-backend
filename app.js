
const cors=require("cors")
const express = require('express')
const app = express()
const port = 80


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://copywrite-frontend-llane.herokuapp.com'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  }); 

app.use(
    cors(  {
        origin: "https://copywrite-frontend-llane.herokuapp.com",
        credentials: true,
        methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE','PATCH'],
        allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'authorization']
    }  )
)

app.get('/', (req, res) => {
    res.send("HOLAMUNDO")
})
app.get('/iecho', (req, res) => {
    const pattern = new RegExp('^[A-Z]+$', 'i')
    console.log(req.query)
    var {text}=req.query
    if(typeof text !== "string" || text==="" || !pattern.test(text)){
        var error={
            error: "no text"
        }
        res.set('Content-Type','application/json')
        res.status(400).send(error)

    } else
    {
        var aux=((text.split("")).reverse()).join("")
        console.log(aux)
        var response={
            text: aux
        }
        res.set('Content-Type','application/json')
        res.status(200).send(response)
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
