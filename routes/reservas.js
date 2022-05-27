const { Router } = require("express");
const { check } = require("express-validator");
const { obtenerReservas, agregarReservas, eliminarReserva, pagarReserva, actualizarReserva } = require("../controllers/reservas_controller");
const { validateFields } = require("../middlewares/validateFields");

const router = Router()

router.get('/', obtenerReservas)

router.post('/',[
    check('idHabitacion','El codigo de la Habitacion es obligatorio').notEmpty(),
    check('ciCliente','El carnet del cliente es obligatorio').notEmpty(),
    validateFields
], agregarReservas)

router.delete('/:idReserva', eliminarReserva)
router.put('/pagarReserva/:idReserva',[
    check('monto','El monto es obligatorio').notEmpty(),
    check('metodoPago','El metodo de pago es obligatorio').notEmpty(),
    validateFields
], pagarReserva)
router.put('/actualizarReserva/:idReserva', actualizarReserva)



module.exports = router