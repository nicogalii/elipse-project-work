
import WebHookUrl from "../components/WebHookUrl/WebHookUrl";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Sidebar from "../components/Sidebar/Sidebar";

const Dashboard = () => {
    const { isAdmin } = useContext(AuthContext);

    return (
        <>
            <div className="page">

                <Sidebar />
                <div className="content">
                    {!isAdmin && (
                        <WebHookUrl />
                    )}
                </div>
            </div>
        </>
    )
}

export default Dashboard;
