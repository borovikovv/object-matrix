import React, { Component } from 'react';
import './header.css';

export default class Header extends Component  {

    state = {
        cols: '',
        rows: ''
    };

        addCols = (e) => {
            e.preventDefault();
            let cols =  e.target.value;
            this.setState({ cols });
            this.props.addCols(cols);
        };
    
        addRows = (e) => {
            e.preventDefault();
            let rows = e.target.value;
            this.setState({ rows });
            this.props.addRows(rows);
        };


    render() {
        const { cols, rows } = this.state;
        return (
            <div className='header wdt'>
                <form onSubmit={this.addCols}>
                    <input 
                        type="text"
                        placeholder='add rows'
                        value={rows}
                        onChange={this.addRows} />
                </form>
                <form onSubmit={this.addRows}>
                    <input 
                        type="text"
                        placeholder='add cols'
                        value={cols}
                        onChange={this.addCols} />
                </form>
                <p className='header-info'> * кликни Enter после ввода</p>
            </div>
        )
    }
}