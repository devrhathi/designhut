import React, { Component } from 'react';
import Search from './Search/Search';
import Designs from './Designs/Designs';
import classes from './Explore.module.css';

class Explore extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchText : ''
        };

        //bind the handler
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    }

    //for manipulating search text and sending it to designs component
    handleSearchTextChange(searchText){
        this.setState({
            searchText : searchText
        });
    }

    render() {
        return (
            <div className={classes.explore}>
                <Search 
                    currentSearchText={this.state.searchText}
                    handleSearchTextChange={this.handleSearchTextChange}
                />

                <Designs
                    searchText = {this.state.searchText}
                />
            </div>
        )
    }
}

export default Explore;
