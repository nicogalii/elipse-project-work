import { useState } from "react";
import useCustomersApi from "./useCustomersApi";

const useAddUser = () => {
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

        return {customers, handleChange, handleSubmit}
}

export default useAddUser;