const db = require("./models/db")


db.sync({
    force: true
  })
  .then(() => {
    console.log("jujuiii")
    db.close()
  })
  .catch((err) => console.log(err))
//Prueba de conexion
// db.authenticate()
// .then(()=>console.log("Iniciado!"))
// .catch((err)=>console.log(`Error: ${err}`))




