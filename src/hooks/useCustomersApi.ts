import { useEffect, useState } from "react";
import customersApi from "../service/customers.api";

const useCustomersApi = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    customersApi()
      .then((data) => {
        setCustomers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return { customers };
};

export default useCustomersApi;
