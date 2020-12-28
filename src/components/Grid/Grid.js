import React from 'react';

import Card from '../Card/Card';
import './Grid.style.scss';


const Grid = ({dataSource}) => {

    const items = dataSource.map(data => <Card avatar_url={data.avatar_url}
                                            login={data.login}
                                            type={data.type}
                                            repos={data.repos_url}/>)

    return (
        <div className={'grid'}>
            {items}
        </div>
    );
}


export default Grid;