import React from 'react';

import './Table.style.scss';


const Table = ({ columns, dataSource, rowKey, loading, pageSize }) => {
    // @TODO: pagination

    const titles = columns.map(column => {
        const { title, dataKey } = column;

        return (<th key={dataKey} style={{ width: column.width }}>{title}</th>);
    });

    const rows = dataSource.map(data => {
        let row = [];

        columns.forEach(column => {
            let { dataKey } = column
            row.push(<td key={dataKey} style={{ width: column.width }}>{column.render(data[dataKey])}</td>)
        });

        return <tr key={data[rowKey]} className={'row'}>{row}</tr>
    })

    return (
        <>
            {loading ? (
                <>
                    <table className='tableWrapper'>
                        <thead>
                            <tr>
                                {titles}
                            </tr>
                        </thead>
                    </table>
                    <h1>Loading...</h1>
                </>) : (
                    <table className='tableWrapper'>
                        <thead>
                            <tr>
                                {titles}
                            </tr>
                        </thead>
                        <tbody>
                            {rows.length === 0 ? <tr><td>No data</td></tr> : rows}
                        </tbody>
                    </table >
                )}
        </>
    );
};


export default Table;