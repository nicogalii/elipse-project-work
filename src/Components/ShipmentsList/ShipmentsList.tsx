import useShipmentsApi from "../../hooks/useShipmentsApi";

const ShipmentsList = () => {
  const { shipments } = useShipmentsApi();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  return (
    <>
      {shipments.map((shipment) => (
        <div key={shipment.id_shipping}>
          <h3>Corriere: {shipment.courier}</h3>
          <p>Data di creazione: {formatDate(shipment.creation_date)}</p>
          <p>Stato: {}</p>
          <p>ID Cliente: {shipment.customer_id}</p>
        </div>
      ))}
    </>
  );
};

export default ShipmentsList;
