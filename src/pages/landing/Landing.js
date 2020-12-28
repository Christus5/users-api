import React, { useEffect, useState } from 'react';
import Table from '../../components/Table/Table';
import Grid from '../../components/Grid/Grid';

import './Landing.style.scss';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    users: state.users,
    searcing: state.searching
});

const mapDispatchToProps = (dispatch) => ({
    assignUsers: (data) => dispatch({ type: 'ASSIGN', payload: data })
});


const Landing = (props) => {
    const { assignUsers, users } = props;
    const [grid, toggleGrid] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            await fetch('http://localhost:3000/users')
                .then(res => res.json())
                .then(d => {
                    assignUsers(d.data);
                });
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
            render: text => <a key={text} href={`https://github.com/${text}`}>{text}</a>
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
            <div className={'search-bar'} >
                <input type={'text'} value={searchInput}
                    name={'search'} id={'search'}
                    placeholder={'Search'} onChange={handleChange} />
                <span className="material-icons search-icon" onClick={() => { console.log('Search') }}>search</span>
            </div>
        );
    };

    return (
        <div className='page'>
            <header>
                <SearchBar />
            </header>
            <section>
                <header className={'section-header'}>
                    <div className={'left'}>
                        <h2>Landing Page</h2>
                    </div>
                    <div className={'right'}>
                        <button onClick={() => toggleGrid(!grid)}>Toggle</button>
                    </div>
                </header>
                {grid ? (
                    <Grid dataSource={users} columnCount={2}/>
                ) : (
                        <Table columns={columns} dataSource={users} rowKey={'login'} />
                    )}
            </section>
        </div>
    );
};


export default connect(mapStateToProps, mapDispatchToProps)(Landing);