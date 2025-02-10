import useCustomersApi from "../../hooks/useCustomersApi";
import "./AddUser.scss";

const AddUser = () => {
    const { customers } = useCustomersApi();
  return (
    <div className="add-user-form">
      <div>
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="surname">Cognome</label>
        <input type="text" id="surname" />
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" />
      </div>
      <div>
        <label htmlFor="phone">Telefono</label>
        <input type="text" id="phone" />
      </div>
      <div>
        <label htmlFor="customer-select">Azienda:</label>

        <select name="customer" id="customer-select">
          <option value="">--Seleziona l'azienda cliente--</option>
          {customers.map((customer) => (
        <option key={customer.id} value={customer.name}>{customer.name}</option>
      ))}
        </select>
      </div>

      <button>Aggiungi utente</button>
    </div>
  );
};

export default AddUser;
