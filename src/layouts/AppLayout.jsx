import { NavBar } from "../components/NavBar"
import { Outlet } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AppLayout = () => {
    
    return (
        <>
            <NavBar></NavBar>
            <div className=" animate-fadeIn" >
                <Outlet></Outlet>
            </div>
            <ToastContainer />
        </>
    )
}