import AddUser from "../components/AddUser/AddUser";
import Sidebar from "../components/Sidebar/Sidebar";

const NewUser = () => {
    return  <>
      <div className="page">
        <Sidebar />
        <div className="content">
            <h1>Aggiungi utente</h1>
          <AddUser />
        </div>
      </div>
    </>
}

export default NewUser;