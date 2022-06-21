import { useState, useEffect } from 'react';
import User from '../User';

export default function UsersList({url, clickHandler}) {

    let [users, setUsers] = useState(null)

    // na montagem e desmontagem do componente
    useEffect(() => {

        // carrega os usuários
        fetch(url)
            .then(resp => resp.json())
            .then(users => setUsers(users))

    }, [url])


    return (
        <div className="users">
                {users && users.map((user, index) => {
                    return <User user={user} clickHandler={clickHandler} 
                    key={index}/>
                })}
        </div>
    )
}

