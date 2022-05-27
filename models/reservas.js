const Reserva = require("./reserva");


class Reservas {
    constructor(){
        this.reservas = [
            {
                "id": "1",
                "estado": "Pagado",
                "idHabitacion": 3,
                "fechaInicio": "2022-05-30",
                "fechaFin": "2022-06-20",
                "diasEstadia": 21,
                "montoPagado": 100,
                "metodoPago": "Efectivo",
                "ciCliente": "6804315",
                "nombreCliente": "Daniel Gorianz"
            },
            {
                "id": "2",
                "estado": "Pendiente",
                "idHabitacion": 2,
                "fechaInicio": "2022-06-16",
                "fechaFin": "2022-06-20",
                "diasEstadia": 4,
                "montoPagado": 0,
                "metodoPago": "Pendiente",
                "ciCliente": "6804315",
                "nombreCliente": "Fernando"
            },
            {
                "id": "3",
                "estado": "Eliminado",
                "idHabitacion": 2,
                "fechaInicio": "2022-06-16",
                "fechaFin": "2022-06-20",
                "diasEstadia": 4,
                "montoPagado": 300,
                "metodoPago": "Efectivo",
                "ciCliente": "6804315",
                "nombreCliente": "Maria"
            },
        ]
    }

    addReserva( reserva = new Reserva()){
        this.reservas.push(reserva)
    }

    obtenerReservar(estado){
        if (estado === '') {
            return this.reservas
        }
        return this.reservas.filter(reserva => reserva.estado === estado)
        
    }

    eliminarReserva( id ){
        this.reservas = this.reservas.map( reserva => {
            if ( id === reserva.id ) {
                reserva.estado = 'Eliminado'
                return reserva
            }
            return reserva
        });

        const reserva = this.reservas.find( reserva => reserva.id === id)
        return reserva
    }

    actualizarReserva( id = '', data ){
        this.reservas = this.reservas.map( reserva => {
            if ( id === reserva.id ) {
                const datos = {...reserva,...data}

                reserva = {...datos}
                console.log(reserva);
            }
            return reserva
        });
        const reserva = this.reservas.find( reserva => reserva.id === id)
        return reserva
    }

    pagarReserva( id, monto, metodoPago ){
        this.reservas = this.reservas.map( reserva => {
            if ( id === reserva.id ) {
                reserva.estado = 'Pagado'
                reserva.montoPagado= monto
                reserva.metodoPago= metodoPago
                
                return reserva
            }
            return reserva
        });
        const reserva = this.reservas.find( reserva => reserva.id === id)

        return reserva
    }
}

module.exports = Reservas