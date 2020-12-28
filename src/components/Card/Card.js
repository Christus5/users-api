import React from 'react';

import './Card.style.scss';


const Card = ({avatar_url, login, type, repos}) => {
    return (
        <div className={'card'}>
            <img src={avatar_url} alt={'avatar'}/>
            <ul>
                <li><a href={'#'}>{login}</a></li>
                <li>{type}</li>
                <li>
                    <ul>
                        {repos}
                    </ul>
                </li>
            </ul>
        </div>
    );
};


export default Card;