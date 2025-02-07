import { useEffect, useState } from "react";
import usersApi from "../service/users.api";

const useUsersApi = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    usersApi()
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return { users };
};

export default useUsersApi;
