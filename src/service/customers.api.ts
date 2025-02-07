const customersApi = async () => {
  const res = await fetch("http://localhost:3000/customers");
  const data = await res.json();
  return data;
};

export default customersApi;
