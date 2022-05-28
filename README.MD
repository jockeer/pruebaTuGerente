# Api Reservas

Recuerden que deben ejecutar ``` npm install ``` para reconstruir los modulos de Node.Js

``Endpoints Creados: ``
* ```Obtener reservas```: este endpoint es un metodo ``GET`` que puede o NO recibir un parametro llamado ``estado`` de tres tipos ```Pendiente, Eliminado, Pagado``` , trae todas las reservas de acuerdo al parametro indicado, si no se pasa el parametro traera todas las reservas con todos los estados.
```localhost:4000/api/reservas?estado=Pendiente``` donde ?estado="Pendiente" es opcional

* Agregar reserva: este endpoint es un metodo ``POST`` que se le tiene q pasar un objeto JSON por su body 
{
    "idHabitacion": 1,
    "fechaInicio":"2022-5-30",
    "fechaFin":"2022-6-20",
    "montoPagado": 0,
    "ciCliente": "6804315",
    "nombreCliente":"Fernando"
}
que se calculara mendiante la fecha de inicio y la fecha fin los dias de estadia y si el monto pagado es 0 el estado de la reserva sera ``Pendiente`` y el metodo de pago sera igual ``Pendiente`` y si se realiza el pago sera el estado sera ``Pagado`` y el metodo de pago si no se especifica sera automaticamente ``Efectivo``
```localhost:4000/api/reservas```

* ```Eliminar reserva:``` ```localhost:4000/api/reservas/id```
este recibe un id de alguna reserva el cual modifica el estado a ``Eliminado``

* ```Pagar Reserva:```  ```localhost:4000/api/reservas/pagarReserva/id```
este recibe un id de alguna reserva y recibe en su body 2 parametros
{
    "monto":300,
    "metodoPago":"Efectivo"
}
y actualiza el pago y el metodo de pago

* ```Actualizar Reserva:```  ```localhost:4000/api/reservas/actualizarReserva/id```
Recibe un id de la reserva y recibe los parametros que se desea actualizar de la reserva menos el id 
{
    "estado":"Pendiente",
    "idHabitacion":2,
    "fechaInicio": "2022-6-16",
    "fechaFin": "2022-6-20"
}

Al no esta directamente conectada con ninguna base de datos use objetos para rellenear en una lista las reservas agregadas y trabajar con esas reservas.

Se debe mostrar al cliente los cuartos disponibles del hotel. una vez el cliente elija la habitacion se pasara a realizar la reserva pidiento al cliente sus datos y eligiendo las fechas de la reserva.
Luego se pasara a pagar la reserva







