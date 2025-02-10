import useUsersApi from "../../hooks/useUsersApi";
import './UsersList.scss';

const UsersList = () => {
  const { users } = useUsersApi();

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
          {users.map((user) => (
            <tr key={user.customer_id}>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.email}</td>
              <td>{user.telephone_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default UsersList;
