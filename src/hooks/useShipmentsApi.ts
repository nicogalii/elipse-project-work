import { useEffect, useState } from "react";
import shipmentsApi from "../service/shipments.api";

const useShipmentsApi = () => {
  const [shipments, setShipments] = useState<Shipment[]>([]);

  useEffect(() => {
    shipmentsApi()
      .then((data) => {
        setShipments(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return { shipments };
};

export default useShipmentsApi;
