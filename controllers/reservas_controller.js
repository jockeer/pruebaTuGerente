const { response, request } = require('express')
const moment = require('moment')
const Reserva = require('../models/reserva')
const Reservas = require('../models/reservas')

const reservas = new Reservas()

const obtenerReservas = (req = request, res = response) => {

    //! consulta a la bd para traer las reservas con estado que se especifique por los queryparams
    const {estado = '' } = req.query
    try {
        const datos = reservas.obtenerReservar(estado)
        res.status(200).json({
            ok:true,
            reservas:datos
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Error con el servidor contactese con el Administrador: +59176597228'
        })
    }

}
const agregarReservas = (req = request, res = response) => {
    const { idHabitacion,
        fechaInicio,
        fechaFin,
        montoPagado = 0, 
        metodoPago= 'Efectivo', 
        ciCliente,
        nombreCliente } = req.body
        
        
    //! realizar un insert a la bd para agregar una nueva reserva
    const diasEstadia = moment( new Date(fechaFin)).diff(new Date(fechaInicio),'days')

    const nuevaReserva = new Reserva( 
        idHabitacion,
        moment(new Date(fechaInicio)).format('YYYY-MM-DD'), 
        moment(new Date(fechaFin)).format('YYYY-MM-DD'), 
        montoPagado === 0 ?'Pendiente':'Pagado', 
        diasEstadia, 
        montoPagado,
        montoPagado === 0 ? 'Pendiente' : metodoPago, 
        ciCliente,
        nombreCliente)
    try {
        reservas.addReserva(nuevaReserva)
    
        res.status(200).json({
            ok:true,
            nuevaReserva
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Error con el servidor contactese con el Administrador: +59176597228'
        })
    }    
}

const eliminarReserva = (req = request, res = response) => {

    const { idReserva } = req.params

    try {
         //! realizar un update a la bd para cambiar el estado de la reversa a eliminado
         const reserva = reservas.eliminarReserva(idReserva)
     
         res.status(200).json({
             ok:true,
             reserva
         })
         
     } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Error con el servidor contactese con el Administrador: +59176597228'
        })
     }
}
const actualizarReserva = (req = request, res = response) => {

    const { idReserva } = req.params
    const {fechaInicio,fechaFin,...resto} = req.body
    
    const datinit = moment(new Date(fechaInicio)).format('YYYY-MM-DD') 
    const dateFin = moment(new Date(fechaFin)).format('YYYY-MM-DD') 

    const diasEstadia = moment( new Date(fechaFin)).diff(new Date(fechaInicio),'days')

    const datos = {...resto, fechaInicio: datinit, fechaFin: dateFin, diasEstadia }
    try {
        //! realizar un update a la bd para los datos de la reserva
       const reserva = reservas.actualizarReserva(idReserva, datos)
   
       res.status(200).json({
           ok:true,
           reserva
       })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Error con el servidor contactese con el Administrador: +59176597228'
        })
    }
}

const pagarReserva = (req = request, res = response) => {

    const { idReserva } = req.params
    const { monto, metodoPago } = req.body

     //! realizar un update a la bd para cambiar el estado de la reversa a eliminado
     try {
         const reservaPagada = reservas.pagarReserva(idReserva,monto,metodoPago)
         console.log(reservaPagada);
     
         res.status(200).json({
             ok:true,
             reservaPagada
         })
         
     } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Error con el servidor contactese con el Administrador: +59176597228'
        })
     }
}

module.exports = {
    obtenerReservas,
    agregarReservas,
    eliminarReserva,
    actualizarReserva,
    pagarReserva
}

