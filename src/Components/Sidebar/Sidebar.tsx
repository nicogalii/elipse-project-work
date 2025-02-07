import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router";
import './Sidebar.scss';

const Sidebar = () => {
const {isAdmin} = useContext(AuthContext);
const navigate = useNavigate();

return <>
<nav className="sidebar">

<ul>
    <li>Elenco spedizioni</li>
    {isAdmin && (
        <>
        <li onClick={()=> navigate('/dashboard/customers')} >Elenco Clienti</li>
        <li onClick={()=> navigate('/dashboard/users')}>Elenco Utenti</li>
        </>
    )}
    {!isAdmin && (
        <li>Storico file</li>
    )}
    <li onClick={()=> navigate('/')} >Logout</li>
</ul>
    </nav>

</>



}


export default Sidebar;