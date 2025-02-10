import useCustomersApi from "../../hooks/useCustomersApi";
import "./CustomersList.scss";

const CustomersList = () => {
  const { customers } = useCustomersApi();
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Azienda</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CustomersList;
