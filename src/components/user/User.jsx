
import './User.css';
export default function User({user}) {

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

            <button className='payment-btn'>Pagar</button>

        </div>
    )

}