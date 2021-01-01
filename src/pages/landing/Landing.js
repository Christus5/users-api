import React, { useEffect, useState } from 'react';
import Table from '../../components/Table/Table';
import Grid from '../../components/Grid/Grid';
import { Link } from 'react-router-dom';
import config from '../../config';

import './Landing.style.scss';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    users: state.users,
    found: state.found,
    searching: state.searching
});

const mapDispatchToProps = (dispatch) => ({
    assignUsers: (data) => dispatch({ type: 'ASSIGN', payload: data })
});


const Landing = (props) => {
    const { assignUsers, users, searching, found } = props;
    const [grid, toggleGrid] = useState(false);
    const [loading, setLoadnig] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            const { api } = config.dev;
            await fetch(`${api}/users`)
                .then(res => res.json())
                .then(d => {
                    assignUsers(d);
                    setLoadnig(false);
                });
        };

        fetchUsers();
    }, [assignUsers]);

    const columns = [
        {
            title: "Avatar",
            dataKey: 'avatar_url',
            width: '20%',
            render: url => <img key={url} src={url} alt={'avatar'} className={'round-img'} />
        },
        {
            title: "Name",
            dataKey: 'login',
            width: '20%',
            render: text => <Link key={text} to={`/user/${text}`}>{text}</Link>
        },
        {
            title: "Type",
            dataKey: 'type',
            width: '30%',
            render: text => text
        },
        {
            title: "Repos",
            dataKey: 'repos',
            width: '30%',
            render: repos => <>{repos ? (<ul>{repos.map(repo => <li key={repo.name}>{repo.name}</li>)}</ul>) : ('no')}</>
        }
    ];

    return (
        <div className='page'>
            <section>
                <header className={'section-header'}>
                    <div className={'left'}>
                        <h2>Users</h2>
                    </div>
                    <div className={'right'}>
                        <button onClick={() => toggleGrid(!grid)}>Toggle</button>
                    </div>
                </header>
                {grid ? (
                    <Grid dataSource={searching ? found : users} />
                ) : (
                        <Table columns={columns} 
                            dataSource={searching ? found : users} 
                            rowKey={'login'} 
                            loading={loading}/>
                    )}
            </section>
        </div>
    );
};


export default connect(mapStateToProps, mapDispatchToProps)(Landing);