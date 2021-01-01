import React, { useEffect, useState } from 'react';
import config from '../../config';
import './User.style.scss';


const User = ({ match }) => {
    const [avatar_url, setAvatar] = useState();
    const [login, setLogin] = useState();
    const [type, setType] = useState();
    const [repos, setRepos] = useState();
    const [loading, setLoading] = useState(true);

    let rep_url;
    
    const setData = (avatar_url, login, type) => {
        setAvatar(avatar_url);
        setLogin(login);
        setType(type);
    };
    useEffect(() => {
        const fetchUser = async () => {
            const { api } = config.dev;
            await fetch(`${api}/users?login=${match.params.login}`)
                .then(res => res.json())
                .then(data => {
                    const {
                        avatar_url,
                        login,
                        type,
                        repos_url,
                        organizations_url
                    } = data[0];
                    rep_url = repos_url;
                    setData(avatar_url, login, type);
                    setLoading(false);
                })
        };

        fetchUser();
    }, [setData]);


    return (
        <div className={'page'}>
            {loading ? (<h1>Loading...</h1>) : (
                <>
                    <button>Back</button>
                    <img src={avatar_url} alt={'user_avatar'} className='avatar' />
                    <h1 className='username'>{login}</h1>
                    <h2>{type}</h2>
                    <ul>
                        
                        {/*repos ? (<>No data</>) : repos.map(repo => <li key={repo.id}>{repo.name}</li>)*/}
                    </ul>
                    <ul>
                        <li>Organization</li>
                        <li>Organization</li>
                        <li>Organization</li>
                    </ul>
                </>
            )}
        </div>
    );
};

export default User;