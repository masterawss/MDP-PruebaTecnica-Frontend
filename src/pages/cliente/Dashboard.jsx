import {useEffect, useState} from 'react'
import { getDashboardKPIs } from '../../api/ClienteAPI';
import {DashboardCardIndicator} from '../../components/DashbordCardIndicator'
import { Loader } from '../../components/Loader';
export const Dashboard = () => {

    const [kpis, setKpis] = useState({})
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        getDashboardKPIs()
            .then(res => setKpis(res))
            .catch(e => alert('Ha ocurrido un error'))
            .finally(() => setLoading(false))
    }, []);

    return (
        <>
            <div className="container mx-auto">
                <div className="py-4 " >
                    <div className="p-10 card">
                        <span className="mt-4 title">Dashboard</span>
                        <p className="text-gray-500">
                            Un dashboard muy simplecito pero con indicadores útiles
                        </p>
                    </div>
                </div>

                {
                    loading 
                        ? 
                            <Loader/>
                        :
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            <DashboardCardIndicator 
                                value={kpis.nro_clientes} 
                                title="Nro de clientes" 
                                subtitle="Registrados en el sistema"
                                />
                            <DashboardCardIndicator 
                                value={kpis.avg_age} 
                                title="Promedio de edades" 
                                subtitle="de la lista de clientes" 
                                textColor="text-orange-500" />
                                
                            <DashboardCardIndicator 
                                value={kpis.nro_clientes_birth} 
                                title="Nro cumpleañeros de hoy" 
                                subtitle="Según fecha de nacimiento de clientes"
                                textColor="text-indigo-500" />
                        </div>
                }
            </div>
        </>
    )
}