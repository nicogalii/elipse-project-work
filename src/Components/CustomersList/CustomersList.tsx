import useCustomersApi from "../../hooks/useCustomersApi";

const CustomersList = () => {
  const { customers } = useCustomersApi();
  return (
    <>
      {customers.map((customer) => (
        <div key={customer.id}>
          <h3>Nome azienda: {customer.name}</h3>
        </div>
      ))}
    </>
  );
};

export default CustomersList;
