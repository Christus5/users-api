import React from 'react';
import './User.style.scss';


const User = () => {

    return (
        <div className={'page'}>
            <button>Back</button>
            <img src={'https://avatars0.githubusercontent.com/u/1?v=4'} alt={'user_avatar'} className='avatar'/>
            <h1 className='username'>Username</h1>
            <h2>Type</h2>
            <ul>
                <li>repo</li>
                <li>repo</li>
                <li>repo</li>
            </ul>
            <ul>
                <li>Organization</li>
                <li>Organization</li>
                <li>Organization</li>
            </ul>
        </div>
    );
};

export default User;