import { useState } from "react";
import useCustomersApi from "../../hooks/useCustomersApi";
import "./AddUser.scss";

const AddUser = () => {
  const { customers } = useCustomersApi();

  const [user, setUser] = useState<User>({username: '',
    password: '',
    name: '',
    surname: '',
    telephone_number: '',
    email: '',
    customer_id: 0});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const name = e.target.id;
        const value = e.target.value;
       // const { name, value } = e.target;
        setUser((prevUser) => ({
          ...prevUser,
          [name]: value,
        }));
      };


      const handleSubmit = () => {
        console.log(user);
        fetch('http://localhost:3000/users', {method:'POST', body: JSON.stringify(user)})
      }


  return (
    <div className="add-user-form">
      <div>
        <label htmlFor="name">Nome</label>
        <input onChange={handleChange} type="text" id="name" />
      </div>
      <div>
        <label htmlFor="surname">Cognome</label>
        <input onChange={handleChange} type="text" id="surname" />
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input onChange={handleChange} type="text" id="email" />
      </div>
      <div>
        <label htmlFor="telephone_number">Telefono</label>
        <input onChange={handleChange} type="text" id="telephone_number" />
      </div>
      <div>
        <label htmlFor="customer_id">Azienda:</label>

        <select onChange={handleChange} name="customer" id="customer_id">
          <option value="">--Seleziona l'azienda cliente--</option>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.name}>
              {customer.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="username">Username</label>
        <input onChange={handleChange} type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input onChange={handleChange} type="password" id="password" />
      </div>

      <button onClick={handleSubmit}>Aggiungi utente</button>
    </div>
  );
};

export default AddUser;
