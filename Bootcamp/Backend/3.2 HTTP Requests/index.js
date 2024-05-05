import express from "express";
const app = express();
const port = 3000;

//Devuelvo una respuesta cuando hacen un get a mi pagina
app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
})

app.get("/about", (req, res) => {
    res.send("<h1>Esto es el about</h1>");
})

app.get("/contact", (req, res) => {
    res.send("<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laudantium corporis provident voluptatem illum nihil quos dolorum minima asperiores obcaecati, incidunt numquam cumque nostrum impedit odio illo veritatis veniam? A!</p>")
})

//Activo el servidor (mi pc) para que escuche en el puerto port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})