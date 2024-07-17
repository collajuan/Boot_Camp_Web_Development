import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';

const app = express();
const port = 3000;

//Conexion con DB
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "Teclado_23",
  port: "5432"
})
db.connect()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries")

  let countries = []
  result.rows.forEach(country => {
    countries.push(country.country_code)
  })
  console.log(countries);
  return countries
}


app.get("/", async (req, res) => {
  const countries = await checkVisisted()
  res.render("index.ejs", { countries: countries, total: countries.length })
  // db.end()
});


//Inster new country
app.post("/add", async (req, res) => {
  let input = req.body["country"]
  console.log(input);
  input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
  console.log(input);
  
  //Se busca el código de pais con el nombre ingresado por el usuario
  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE country_name = $1",
      [input]
    );
    console.log(result.rows);
    //Si existe el código, se guarda en tabla de visitados
    const data = result.rows[0]
    const countryCode = data.country_code
    try {
      await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)",
        [countryCode])
      res.redirect("/")
    } catch (err) {
      console.log(err);
      const countries = await checkVisisted()
      res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        error: "Country has already been added, try again."
      })
    }
  } catch (err) {
    console.log(err);
    const countries = await checkVisisted()
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      error: "Country name does not exist, try again."
    })
  }
})




app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
