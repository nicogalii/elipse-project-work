
import WebHookUrl from "../components/WebHookUrl/WebHookUrl";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router";

const Dashboard = () => {
    const {isAdmin} = useContext(AuthContext);
    const navigate = useNavigate();

  return (
    <>
    {!isAdmin && (
        <WebHookUrl/>
    )}
    {isAdmin && (
        <button onClick={()=> navigate('/dashboard/customers')}>Lista clienti</button>
    )}
    </>
  )
}

export default Dashboard;
