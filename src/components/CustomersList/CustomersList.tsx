import useCustomersApi from "../../hooks/useCustomersApi";

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
            <tr key={customer.customer_id}>
              <td>{customer.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CustomersList;
