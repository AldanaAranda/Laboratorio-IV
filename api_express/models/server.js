const express = require('express')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT || 3000
        this.rutas()
    }

    rutas () {
        this.app.use('/api/v1/peliculas', require('../routes/peliculas'))
    }

    listen () {
        this.app.listen(this.port, () => {
          console.log(`La API esta escuchando en el PORT ${this.port}`)
        })
      }
}

module.exports = Server