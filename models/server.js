const express = require('express')
const cors = require('cors')
class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();

        //Rutas de mi app

        this.routes();

    }

    middlewares () {

        //CORS
        this.app.use( cors() )

        // Lectura y Parseo del body
        this.app.use( express.json() );

        //direcctorio publico
        this.app.use( express.static('public') );
    }

    routes () {
        this.app.use('/api/reservas', require('../routes/reservas'));
    }

    listen () {
        this.app.listen(this.port, ()=>{
            console.log(`Aplicacion en el puerto ${ this.port } `);
        })
    }

}

module.exports = Server