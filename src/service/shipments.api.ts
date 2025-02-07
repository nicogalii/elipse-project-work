const shipmentsApi = async () => {
  const res = await fetch("http://localhost:3000/shipments");
  const data = await res.json();
  return data;
};

export default shipmentsApi;
