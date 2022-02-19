import { ClienteCreateModal } from "../../components/ClienteCreateModal"
import { ClientesTable } from "../../components/ClientesTable"
import {useDispatch, useSelector} from 'react-redux'
import {setModalOpenedState} from '../../store/ui/modalClienteCreateSlice'
import { useEffect } from "react"
import {fetchAllClientes} from '../../store/cliente/clienteSlice'
import {Loader} from '../../components/Loader'
export const Index = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllClientes())
  }, [dispatch])


  const loading = useSelector((state) => state.clienteSlice.loading.index)

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between mt-4">
        <span className="title">Lista de clientes</span>
        {
          loading && <Loader />
        }
        <button className="btn-primary" onClick={() => dispatch(setModalOpenedState(true))} >
          + Agregar cliente
        </button>
      </div>
      <ClientesTable />

      <ClienteCreateModal />

    </div>
  )
}