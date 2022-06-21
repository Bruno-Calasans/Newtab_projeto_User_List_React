import User from "../User/User"
import { useState, useEffect } from 'react';

export default function UserList({url, clickHandler}) {

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

