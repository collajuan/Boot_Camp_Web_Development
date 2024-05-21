import express from "express";
import bodyparser from "body-parser";//Leo el body y lo puedo fragmentar para tener los datos
//Para encontrar la direccion del index.html
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

app.use(bodyparser.urlencoded({extended: true}));
//Custom Middleware para tener en un string ambos campos del formulario
function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}
//ejecuto el Middleware luego de hacer el bodyparser
app.use(bandNameGenerator);

//Respondo el index.html cuando hace get al localhost:3000
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//POST a submit lo hace el formulario del index.html
app.post("/submit", (req,res)=>{
  res.send(`<h1>Your band name si:</h1><h2>${bandName}</h2>`);
})

//Defino el puerto por el que estoy escuchando
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
