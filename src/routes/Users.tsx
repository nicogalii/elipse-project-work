
import Sidebar from "../components/Sidebar/Sidebar";
import UsersList from "../components/UsersList/UsersList";


const Users = () => {
  return (
    <>
    <div className="page">
    <Sidebar/>
    <div className="content">
    <UsersList/>
    </div>
    </div>
    </>
  );
};

export default Users;