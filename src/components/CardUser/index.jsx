import { Trash } from 'phosphor-react';
import './style.css';

export function CardUser(props) {

    function deleteUser(idUser){
        props.onDeleteStudent(idUser);
    }

    return (
        <div className="container-card">
            <p style={{color: 'white'}}>{props.name}</p>
            <button onClick={() => deleteUser(props.idStudent)}>
                <Trash size={32} weight="bold" />
            </button>
        </div>
    );
}