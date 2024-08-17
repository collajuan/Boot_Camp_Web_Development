import express from 'express'

const app = express()
const port = 3000


app.get("/", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>Hola</h1> <a href='http://localhost:3000/contact'>Contacto</a>")    
})

app.get("/contact", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>Contacto</h1>")    
})

app.get("/about", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>About</h1>")    
})

app.listen(port, () => {
    console.log(`Listen in port ${port}`);
    
})