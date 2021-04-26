import React from 'react';
import classes from './Search.module.css'

function    Search(props) {

    function handleSearchTextChange(e){
        props.handleSearchTextChange(e.target.value);
    }

    return (
        <div className={classes.search}>
        <input 
            className={classes.searchBar}
            placeholder="Search"
            type="text"
            value={props.currentSearchText}
            onChange={handleSearchTextChange}
        />
        </div>
    )
}

export default Search
