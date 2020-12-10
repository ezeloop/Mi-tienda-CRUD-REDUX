import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types'

//crear nuevos productos

export function crearNuevoProductoAction() {
    return () => {
        console.log('desde action')
    }
}
//ahora la uso en el componente, me voy a nuevo producto