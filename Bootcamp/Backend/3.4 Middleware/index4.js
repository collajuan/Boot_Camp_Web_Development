import express from "express";
import bodyParser from "body-parser";
// Las siguientes tres lineas resuelven la ubicacion relativa de los archivos
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  
  console.log(req.body.street + " " + req.body.pet); 
  res.send(`<h1>Your Band name is:</h1>
    <h3>${req.body.pet}${req.body.street}</h3>`)  
})



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//Hacer el get para devolver la pagina inicial
//gestioner el submit con POST
