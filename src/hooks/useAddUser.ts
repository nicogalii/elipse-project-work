import { useState } from "react";
import useCustomersApi from "./useCustomersApi";

const useAddUser = () => {
    const { customers } = useCustomersApi();

    const [user, setUser] = useState<User>({
        username: '',
        password: '',
        name: '',
        surname: '',
        telephone_number: '',
        email: '',
        customer_id: 0
    });

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
        setUser((prevUser) => ({
            ...prevUser,
            customer_id: Number(user.customer_id)
        }))
        fetch('http://elipse-project-work-env.eba-qpijr2ce.eu-north-1.elasticbeanstalk.com/api/users', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(user) })
        .then((res)=> {
            return res.json()
        })
        .then((body)=> {
            console.log(body);
        })
    }

    return { customers, handleChange, handleSubmit }
}

export default useAddUser;