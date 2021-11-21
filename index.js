let fs = require("fs");
let express = require("express");
let app = express();
let path = require("path");
const PORT = 8080;
let archivo = "./productos.txt"
let Contenedor = require("./contenedor");


let demostracion = new Contenedor(archivo);


app.get("/", (req, res, next) => {
    res.send("Home / server with express");
});
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
app.get("/productos", async (req, res) => {
    let data = await demostracion.getAll();
    res.send(data);
});

app.get("/random", async (req, res) => {
    let data = await demostracion.getAll();
    id = parseInt(Math.random() * data.length);
    res.send(data[id]);
});