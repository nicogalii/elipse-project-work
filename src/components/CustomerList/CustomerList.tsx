import { useEffect, useState } from "react";

const CustomersList = () => {
  const URL = "http://localhost:3000/customers";

  interface Customer {
    id: string;
    name: string;
  }

  const [customers, setCustomers] = useState<Customer[]>([]);

  const CustomersListApi = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    CustomersListApi()
      .then((data) => {
        setCustomers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {customers.map((customer) => (
        <div key={customer.id}>
          <h3>{customer.name}</h3>
        </div>
      ))}
    </>
  );
};

export default CustomersList;