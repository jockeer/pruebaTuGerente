const { v4: uuid } = require('uuid');

class Reserva {
    constructor( idHabitacion, fechaInicio, fechaFin, estado, diasEstadia, montoPagado, metodoPago, ciCliente, nombreCliente ){
        this.id= uuid()
        this.estado = estado // Pendiente, Pagado y Eliminado.
        this.idHabitacion = idHabitacion
        this.fechaInicio = fechaInicio
        this.fechaFin = fechaFin
        this.diasEstadia = diasEstadia
        this.montoPagado = montoPagado
        this.metodoPago = metodoPago
        this.ciCliente = ciCliente,
        this.nombreCliente = nombreCliente
    }
}

module.exports = Reserva