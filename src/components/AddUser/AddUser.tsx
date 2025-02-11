import "./AddUser.scss";
import useAddUser from "../../hooks/useAddUser";

const AddUser = () => {
  const { customers, handleChange, handleSubmit } = useAddUser();

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
            <option key={customer.customer_id} value={customer.customer_id}>
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
