let fs = require("fs");
let path = require("path");


class Contenedor {
    constructor(archivo) {
        this.archivo = archivo;
    }

    async getAll() {
        try {
            let objeto = await fs.promises.readFile(`${this.archivo}`, `utf-8`);
            //console.log(JSON.parse(objeto));
            return (JSON.parse(objeto));
        }
        catch (error) {
            console.log('No se pudo leer el archivo');
        }
    }


}

module.exports = Contenedor
