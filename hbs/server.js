const express = require("express");
const handlebars = require("express-handlebars");
const router = require('./routes/productos');
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("hbs", handlebars.engine({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "/views/layouts"
}))

app.set("view engine", "hbs");
app.set("views", "./views");

app.use('/', router);

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
server.on('error', () => console.log(`Error: ${err}`));

