import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router";
import "./Sidebar.scss";

const Sidebar = () => {
  const { isAdmin } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <aside>
        <nav>
          <ul>
            <li>😊 Nome Cognome</li>
            <li onClick={() => navigate("/dashboard/shipments")}>
              Elenco spedizioni
            </li>
            {isAdmin && (
              <>
                <li onClick={() => navigate("/dashboard/customers")}>
                  Elenco Clienti
                </li>
                <li onClick={() => navigate("/dashboard/users")}>
                  Elenco Utenti
                </li>
                <li onClick={() => navigate("/dashboard/newuser")}>
                  Aggiungi utente
                </li>
              </>
            )}
            {!isAdmin && <li>Storico file</li>}
          </ul>

          <ul>
            <li onClick={() => navigate("/")}>Impostazioni</li>
            <li onClick={() => navigate("/")}>Logout</li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
