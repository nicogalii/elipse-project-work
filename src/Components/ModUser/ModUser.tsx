import { useEffect, useState } from "react";
import useCustomersApi from "../../hooks/useCustomersApi";
import './ModUser.scss';

type ModUserProps = {
    username: string
}

const ModUser = ({ username }: ModUserProps) => {
    const [modal, setModal] = useState(false);
    const { customers } = useCustomersApi();

    
    useEffect(()=> {
        if (username) {
            fetch(`http://elipse-project-work-env.eba-qpijr2ce.eu-north-1.elasticbeanstalk.com/api/users/${username}`)
            .then((res)=> res.json())
            .then(data => setUser(data))
        }
    }, [username])

    
    const toggleModal = () => {
        setModal(!modal);
    }

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


    return <>
        <button className="btn-modal" onClick={toggleModal} >Modifica</button>

        {modal && (
            <div className="modal">
                <div className="overlay">
                    <div className="modal-content">
                        <div className="add-user-form">
                            <div>
                                <label htmlFor="name">Nome</label>
                                <input onChange={handleChange} type="text" id="name" value={user.name} />
                            </div>
                            <div>
                                <label htmlFor="surname">Cognome</label>
                                <input onChange={handleChange} type="text" id="surname" value={user.surname} />
                            </div>
                            <div>
                                <label htmlFor="email">E-mail</label>
                                <input onChange={handleChange} type="text" id="email" value={user.email} />
                            </div>
                            <div>
                                <label htmlFor="telephone_number">Telefono</label>
                                <input onChange={handleChange} type="text" id="telephone_number" value={user.telephone_number}/>
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
                                <input onChange={handleChange} type="text" id="username" value={user.username} />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input onChange={handleChange} type="password" id="password" />
                            </div>

                           
                        </div>
                        <div className="actions-btn">
                            <button className='confirm-btn'>Elimina</button>
                            <button onClick={toggleModal} className='close-modal'>Indietro</button>
                        </div>
                    </div>
                </div>
            </div>
        )}




    </>
}

export default ModUser;