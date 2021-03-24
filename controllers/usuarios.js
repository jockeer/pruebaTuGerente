const { response, request } = require('express')

const usuariosGet = (req = request, res = response) => {

    const {q,nombre, apikey = 'no api'}  = req.query
    res.json({message: 'peticion get - Controlador', q,nombre,apikey})
}   
const usuariosPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        ok:true, 
        message: 'peticion put - Controlador',
        id
        
    })
}
const usuariosPost = (req, res = response) => {

    const body = req.body;
    res.status(201).json({
        ok:true, 
        message: 'peticion post - Controlador',
        body
    })
} 
const usuariosDelete = (req, res = response) => {
    res.json({ok:true, message: 'peticion delete - Controlador'})
}  
const usuariosPatch = (req, res = response) => {
    res.json({ok:true, message: 'peticion patch - Controlador'})
}  

module.exports = { 
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}