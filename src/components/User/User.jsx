
import './User.css';
import Button from '../Button/Button';

export default function User({user, clickHandler}) {

    const defaultUser = {id: '', name: '', username: '', img: ''}
    user = user ?? defaultUser
    
    let {id, name, username, img} = user

    return (

        <div className="user">

            <div className="profile">

                <img src={img} 
                className='user-img' 
                alt={username + '_profile_img'} />

                <div className='user-info'>
                    <p>Nome do usuário: {name}</p>
                    <p>ID: {id} - Username: {username}</p>
                </div>

            </div>

            <Button 
            clickHandler={e => { if(clickHandler){clickHandler(user) } }}>
                Pagar
            </Button>

        </div>
    )

}