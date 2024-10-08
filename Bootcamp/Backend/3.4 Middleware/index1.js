import express from "express";
import bodyParser from "body-parser";
// Las siguientes tres lineas resuelven la ubicacion relativa de los archivos
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Le da propiedad Body el request para poder utilizar las etiquetas y sus valores
// La función app.use() en Express.js agrega middleware al proceso de procesamiento de solicitudes de la aplicación.
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  
  console.log(req.body.street + " " + req.body.pet);   
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
