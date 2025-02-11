import { useState } from "react";
import { useNavigate } from "react-router";
import './DeleteUser.scss';


type DeleteUserProps = {
    username: string
}

const DeleteUser = ({username}: DeleteUserProps) => {
    const [modal, setModal] = useState(false); 
    const navigate = useNavigate();

    const toggleModal = () => {
        setModal(!modal);
    }

    const deleteUser = () => {
        try {
            fetch(`http://elipse-project-work-env.eba-qpijr2ce.eu-north-1.elasticbeanstalk.com/api/users/${username}`, {method: 'DELETE'});
            navigate("/userdelete");
          } catch (error) {
            console.log(error);
          }
    }


    return <>
        <div className='actions-modal-btn' >
            <button className="btn-modal" onClick={toggleModal} >Elimina</button>
        </div>

        {modal && (
            <div className="modal">
                <div className="overlay">
                    <div className="modal-content">
                        <p>Sei sicuro di voler eliminare {username} ?</p>
                        <div className="actions-btn">
                            <button onClick={deleteUser} className='confirm-btn'>Elimina</button>
                            <button onClick={toggleModal} className='close-modal'>Indietro</button>
                        </div>
                    </div>
                </div>
            </div>
        )}




    </>
}

export default DeleteUser;