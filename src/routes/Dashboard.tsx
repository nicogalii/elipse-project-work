import WebHookUrl from "../components/WebHookUrl/WebHookUrl";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Dashboard = () => {
  const { isAdmin } = useContext(AuthContext);

  return (
    <>
      <div className="content">{!isAdmin && <WebHookUrl />}</div>
    </>
  );
};

export default Dashboard;
