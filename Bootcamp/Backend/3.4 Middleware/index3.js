import express from "express";

const app = express();
const port = 3000;

const logger = (req, res, next) => {
  console.log(`Metodo: ${req.method} y URL: ${req.url}`);
  //! SIEMPRE DEBE IR AL FINAL DEL MIDDLEWARE
  next() 
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
