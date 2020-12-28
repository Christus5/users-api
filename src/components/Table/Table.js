import React from 'react';

import './Table.style.scss';


const Table = ({ columns, dataSource, rowKey, loading, pageSize }) => {
    // @TODO: pagination

    const titles = columns.map(column => {
        const { title, dataKey } = column;

        return (<th key={dataKey}>{title}</th>);
    });

    const rows = dataSource.map(data => {
        let row = [];

        columns.forEach(column => {
            let { dataKey } = column
            row.push(<td key={dataKey}>{column.render(data[dataKey])}</td>)
        });

        return <tr key={data[rowKey]} className={'row'}>{row}</tr>
    })

    return (
        <table className='tableWrapper'>
            <thead>
                <tr>
                    {titles}
                </tr>
            </thead>
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                    <tbody>
                        { rows}
                    </tbody>
                )}
        </table >
    );
};


export default Table;