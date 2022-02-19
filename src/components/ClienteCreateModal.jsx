import { useSelector, useDispatch } from 'react-redux'
import { setModalOpenedState } from '../store/ui/modalClienteCreateSlice'
import { storeCliente } from '../store/cliente/clienteSlice'

import {Formik, Form, ErrorMessage, Field} from 'formik'
import * as Yup from 'yup';

import {Loader} from './Loader'

export const ClienteCreateModal = () => {

    const modalOpened = useSelector((state) => state.modalClienteCreate.modalOpened)
    const loading = useSelector((state) => state.clienteSlice.loading.store)

    const dispatch = useDispatch()

    const save = ({nombres, apellidos, fecha_nacimiento}) => {
        dispatch(storeCliente({nombres, apellidos, fecha_nacimiento}))
        dispatch(setModalOpenedState(false))
    }

    return (
        <div
            className={`overlay ${!modalOpened && 'hidden'}  animate-fadeIn`}
            id="my-modal"
        >
            <div className="relative p-5 mx-auto card top-20 w-96" > 
                <div className="flex justify-between">
                    <div className="py-2">
                        <span className="text-lg font-bold text-gray-600">Registro de cliente</span>
                    </div>
                    <button onClick={() => dispatch(setModalOpenedState(false)) }>
                        X
                    </button>
                </div>
                <Formik
                    initialValues={{nombres: '', apellidos: '', fecha_nacimiento: ''}}
                    onSubmit={(values, {setSubmitting}) =>{
                        save(values)
                        setSubmitting(false)
                    }}
                    validationSchema={Yup.object().shape({
                        nombres: Yup.string().required('El nombre es requerido'),
                        apellidos: Yup.string().required('El apellido es requerido'),
                        fecha_nacimiento: Yup.date().required('La fecha de nacimiento es super requerido')
                    })}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <div className="py-2">
                                <label htmlFor="nombres"  className="input-label">Nombres</label>
                                <Field autoComplete="off" name="nombres" className="input-field" placeholder="Ingrese los nombres" />
                                <ErrorMessage className="text-red-500" name="nombres" component="div" />
                            </div>
                            <div className="py-2">
                                <label htmlFor="apellidos"  className="input-label">Apellidos</label>
                                <Field autoComplete="off" name="apellidos" id="apellidos" className="input-field" placeholder="Ingrese los apellidos" />
                                <ErrorMessage className="text-red-500" name="apellidos" component="div" />

                            </div>
                            <div className="py-2">
                                <label htmlFor="fecha_nacimiento"  className="input-label">Fecha de nacimiento</label>
                                <Field autoComplete="off" name="fecha_nacimiento" type="date" id="fecha_nacimiento" className="input-field" placeholder="Ingrese la fecha de nacimiento" />
                                <ErrorMessage className="text-red-500" name="fecha_nacimiento" component="div" />

                            </div>
                            {
                                loading 
                                    ? 
                                        <Loader/>
                                    :
                                        <button type="submit" disabled={isSubmitting} className="w-full mt-2 btn-primary">
                                            Guardar
                                        </button>
                            }
                        </Form>
                    )}

                </Formik>
            </div>
        </div>
    )
}