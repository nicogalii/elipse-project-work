import useCustomersApi from "../../hooks/useCustomersApi";
import useUsersApi from "../../hooks/useUsersApi";

const UsersList = () => {
  const { users } = useUsersApi();
  const {customers} = useCustomersApi();


  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cognome</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Azienda</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.email}</td>
              <td>{user.telephone_number}</td>
              <td>{customers.filter((c)=> {
                return c.customer_id === user.customer_id
              }).pop()?.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersList;
