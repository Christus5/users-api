import React, { useState } from 'react';
import { connect } from 'react-redux';

import './SearchBar.style.scss';


const mapStateToProps = (state) => ({
    searching: state.searching,
    users: state.users,
    found: state.found
});

const mapDispatchToProps = (dispatch) => ({
    setSearching: (data) => dispatch({type: 'TOGGLE', payload: data}),
    setFound: (data) => dispatch({type: 'ASSIGN_FOUND', payload: data})
});


const SearchBar = (props) => {
    const { setSearching, users, setFound } = props;
    const [searchInput, setSearchInput] = useState('');

    const handleSearch = (e) => {
        setSearchInput(e.target.value);
        if(e.target.value){
            setSearching(true);
            let reg = new RegExp(e.target.value, 'ig');

            console.log(reg);
            setFound(users.filter(user => reg.test(user.login)));
        } else {
            setSearching(false);
        }
    }

    return (
        <div className={'search-bar'} >
            <input type={'text'} value={searchInput}
                name={'search'} id={'search'}
                placeholder={'Search'} onChange={handleSearch} />
            <span className="material-icons search-icon" onClick={() => { setSearching(true) }}>search</span>
        </div>
    );
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);