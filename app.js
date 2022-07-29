
const cors=require("cors")
const express = require('express')
const app = express()
const port = 80

app.use(
    cors(  //{
        //origin: "https://copywrite-frontend-llane.herokuapp.com/",
        //credentials: true,
        //methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE','PATCH'],
        //allowedHeaders: *
        
    //}  
    )
)

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
