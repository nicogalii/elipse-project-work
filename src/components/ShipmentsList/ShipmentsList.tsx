import useShipmentsApi from "../../hooks/useShipmentsApi";
import "./ShipmentsList.scss";

const ShipmentsList = () => {
  const { shipments } = useShipmentsApi();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Corriere</th>
            <th>Data di creazione</th>
            <th>Stato</th>
            <th>ID Cliente</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((shipment) => (
            <tr key={shipment.id_shipping}>
              <td>{shipment.courier}</td>
              <td>{formatDate(shipment.creation_date)}</td>
              <td>{shipment.status_name}</td>
              <td>{shipment.customer_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ShipmentsList;
