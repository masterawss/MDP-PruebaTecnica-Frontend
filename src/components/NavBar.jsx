import {NavLink} from 'react-router-dom'
export const NavBar = () => {
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <div alt="logo" className="flex items-center">
                    <img className="mr-3 h-10" src="https://www.mdp.com.pe/wp-content/uploads/2017/05/logo_top_header_shadow.png" alt="" />
                    <span className="text-white">
                    | Prueba técnica
                    </span>
                </div>
                <div className="justify-between items-center flex w-auto order-1" id="mobile-menu-4">
                    <ul className="flex  items-center flex-row space-x-8 mt-0 text-sm font-medium">
                        <li>
                            <NavLink className={({isActive}) => (isActive ? 'item-menu_active' : 'item-menu')} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) => (isActive ? 'item-menu_active' : 'item-menu')}  to="/dashboard">Dashboard</NavLink>
                        </li>
                        <li>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anthony-will-solsol-soplin/" type="button" className="btn-primary">
                                👋 Hola, soy Will
                            </a>
                        </li>
                    </ul>
                </div>
                
            </div>
        </nav>
    )
} 