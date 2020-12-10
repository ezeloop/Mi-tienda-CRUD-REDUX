import React from 'react';
//actions del redux
import { useDispatch, useSelector } from 'react-redux'
import { crearNuevoProductoAction } from '../actions/productoActions';

const NuevoProducto = () => {

    //utilizar use dispatch  y te crea una funcion
    const dispatch = useDispatch();

    const agregarProducto = () => dispatch( crearNuevoProductoAction() )

    //cuando el usuario haga submit
    const submitNuevoProducto = e =>{
        e.preventDefault();

        //validar formulario

        //revisar que no haya errores

        //crear el nuevo producto
        agregarProducto();
    } 
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">Agregar Nuevo Producto</h2>
                        <form 
                            onSubmit={submitNuevoProducto}
                        >
                            <div className="from-group">
                                <label>Nombre Producto</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Producto"
                                    name="nombre"
                                />
                            </div>

                            <div className="from-group">
                                <label>Precio Producto</label>
                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio Producto"
                                    name="precio"
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Agregar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NuevoProducto;