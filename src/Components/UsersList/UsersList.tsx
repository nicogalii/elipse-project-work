import { useEffect, useState } from "react";

const UsersList = () => {
  const URL = "http://localhost:3000/users";

  interface User {
    username: string,
    password: string,
    name: string,
    surname: string,
    telephone_number: string,
    email: string,
    customer_id: number
  }



  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Cognome</th>
          <th>Email</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.customer_id}>
            <td>{u.name}</td>
            <td>{u.surname}</td>
            <td>{u.email}</td>
            <td>{u.telephone_number}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}
export default UsersList;



