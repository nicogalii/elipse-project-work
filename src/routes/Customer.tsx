import CustomersList from "../components/CustomersList/CustomersList";
import Sidebar from "../components/Sidebar/Sidebar";


const Customer = () => {
  return (
    <>
      <div className="page">
        <Sidebar />
        <div className="content">
          <CustomersList />
        </div>
      </div>
    </>
  );
};

export default Customer;