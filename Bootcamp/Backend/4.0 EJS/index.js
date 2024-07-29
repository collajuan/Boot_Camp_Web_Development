import express from 'express'


const app = express()
const port = 3000

app.get("/", (req, res) => {
    const today = new Date()
    let day = today.getDay()
    let type = (day === 0 || day === 6) ? 'the weekend' : 'a weekday'
    let adv = (day === 0 || day === 6) ? "it`s time to have some fun" : "it`s time to work hard"

    res.render("index.ejs", {
        dayType: type,
        advice: adv
    })
})



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})