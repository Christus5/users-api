import React from 'react';

import Card from '../Card/Card';
import './Grid.style.scss';


const Grid = ({dataSource}) => {

    const items = dataSource.map(data => <Card avatar_url={data.avatar_url}
                                            login={data.login}
                                            type={data.type}
                                            repos={data.repos_url}
                                            key={data.login}/>)

    return (
        <div className={'grid'}>
            {items.length === 0 ? (
                <h1>No data</h1>
            ) : (
                items
            )}
        </div>
    );
}


export default Grid;