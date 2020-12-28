import React, { useEffect, useState } from 'react';
import Table from '../../components/Table/Table';

import './Landing.style.scss';


const Landing = () => {
    const [users, setUsers] = useState([]);
    const [grid, toggleGrid] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            let data = [];
            await fetch('http://localhost:3000/users')
                .then(res => res.json())
                .then(d => setUsers(d.data));
        };
        fetchUsers();
    }, []);

    const columns = [
        {
            title: "Avatar",
            dataKey: 'avatar_url',
            render: url => <img key={url} src={url} alt={'avatar'} className={'round-img'} />
        },
        {
            title: "Name",
            dataKey: 'login',
            render: text => text
        },
        {
            title: "Type",
            dataKey: 'type',
            render: text => text
        },
        {
            title: "Repos",
            dataKey: 'repos_url',
            render: repos => repos //<ul>{repos.map(repo => <li key={repo}>{repo}</li>)}</ul>
        }
    ];

    const SearchBar = () => {
        const [searchInput, setSearchInput] = useState('');

        const handleChange = (e) => {
            setSearchInput(e.target.value);
        }

        return (
            <div className={'search-bar'}>
                <input type={'text'} value={searchInput}
                    name={'search'} id={'search'}
                    placeholder={'Search'} onChange={handleChange} />
                <button onClick={() => { }}>Search</button>
            </div>
        );
    };

    return (
        <div className='page'>
            <header>
                <h2>Landing Page</h2>
                <button onClick={() => toggleGrid(!grid)}>Toggle</button>
                <SearchBar />
            </header>
            <section>
                {grid ? (
                    <h1 />
                ): (
                    <Table columns = { columns } dataSource = { users } rowKey = { 'login' } />
                )}

            </section>
        </div>
    );
}

export default Landing;