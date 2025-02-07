import useShipmentsApi from "../../hooks/useShipmentsApi";

const ShipmentsList = () => {
  const { shipments } = useShipmentsApi();

  return (
    <>
      {shipments.map((shipment) => (
        <div key={shipment.id_shipping}>
          <h3>Corriere: {shipment.courier}</h3>
          <p>Data di creazione: {shipment.creation_date}</p>
          <p>Stato: {shipment.status_name}</p>
          <p>ID Cliente: {shipment.customer_id}</p>
        </div>
      ))}
    </>
  );
};

export default ShipmentsList;
