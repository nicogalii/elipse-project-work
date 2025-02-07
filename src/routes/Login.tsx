import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../context/AuthContext";

const Login = () => {
    const navigate = useNavigate();
    const { setIsAdmin } = useContext(AuthContext);

    useEffect(() => {
        setIsAdmin(false)
    }, [setIsAdmin])
    return <>
    <div className="login-simulation">

        <h1>Seleziona tipo di utente</h1>
        <div className="btn-container">

        <button onClick={() => {
            navigate('/dashboard');
        }}>Utente</button>
        <button onClick={() => {
            setIsAdmin(true);
            navigate('/dashboard');
        }}>SuperAdmin</button>
        </div>
        </div>
    </>
}

export default Login;