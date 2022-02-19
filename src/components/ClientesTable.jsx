import { useDispatch, useSelector } from 'react-redux'
import { deleteCliente } from '../store/cliente/clienteSlice'
export const ClientesTable = () => {
    const items = useSelector((state) => state.clienteSlice.list)

    const dispatch = useDispatch()

    return (
        <div className="my-4 ">
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden">
                        <table className="table">
                            <thead >
                                <tr>
                                    <th scope="col">Nombres</th>
                                    <th scope="col">Apellidos</th>
                                    <th scope="col">Fecha de nacimiento</th>
                                    <th scope="col">Edad</th>
                                    <th scope="col" className="p-4">
                                        <span className="sr-only">Acciones</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map(item => 
                                    <tr key={item.id}>
                                        <td className="">{item.nombres}</td>
                                        <td className="">{item.apellidos}</td>
                                        <td className="">{item.fecha_nacimiento_formatted}</td>
                                        <td className="">{item.age}</td>
                                        <td className="text-right">
                                            <button onClick={() => window.confirm('¿Está seguro?') && dispatch(deleteCliente(item.id))} className="transition  ease-out duration-300 hover:-translate-y-1 hover:scale-110">
                                                <img alt="delete" style={{width: '20px'}} src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-trash-mintab-for-ios-becris-lineal-becris.png"/>
                                            </button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}