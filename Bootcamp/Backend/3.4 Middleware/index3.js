import express from "express";

const app = express();
const port = 3000;

// Creo la función Middleware que luego se usara con app.use
function logger(req, res, next){
  console.log(`Metodo: ${req.method} y URL: ${req.url}`);
  next();//IMPORTANTE para que no se cuelgue el programa aqui...****
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

