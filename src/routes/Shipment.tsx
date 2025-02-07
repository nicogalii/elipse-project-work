import ShipmentsList from "../components/ShipmentsList/ShipmentsList";
import Sidebar from "../components/Sidebar/Sidebar";

const Shipment = () => {
  return (
    <>
      <div className="page">
        <Sidebar />
        <div className="content">
          <ShipmentsList />
        </div>
      </div>
    </>
  );
};

export default Shipment;
