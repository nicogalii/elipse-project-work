import { useContext } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../context/AuthContext";

const Login = () => {
    const navigate = useNavigate();
    const {setIsAdmin} = useContext(AuthContext);
    return <>
    <h3>Seleziona tipo di utente</h3>
    <button onClick={()=> {
        navigate('/dashboard');
    }}>Utente</button>
    <button onClick={()=> {
        setIsAdmin(true);
        navigate('/dashboard');
    }}>SuperAdmin</button>
    </>
}

export default Login;