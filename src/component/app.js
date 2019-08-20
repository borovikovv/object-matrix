import React, { Component } from 'react';
import Item from './item';
import Header from './header';
import './app.css';

export default class App extends Component {
  
  newId = 1;

  state = {
    dataObj: [],
    dataSum: [],
    dataAm: [],
    rows: '',
    cols: ''
  };

  create() {
    const { rows, cols } = this.state;
    let newItem = [];
    let newItemsArr = [];
    let matrix;

    const createMatrix = (rows, cols, matrix) => {
      if(cols !== rows || rows !== cols) matrix = 0;
      if ( rows === cols || cols === rows) matrix = cols * rows;
      return matrix;
    };
    matrix = createMatrix(rows, cols, matrix);

    const getObjects = () => {
      for(let i = 0; i < matrix; i++) {
        newItem[i] = this.createObj();
        newItemsArr.push(newItem[i]);
      }

      return newItemsArr;
    };
    getObjects();
    console.log(newItemsArr);

    this.setState({
      dataObj: newItemsArr
    });
  }

  createObj() {
    return{
      amount: Math.floor(Math.random() * 900) + 100,
      id: this.newId++
    };
  }

  onChangeAmount = (id) => {

    const { dataObj } = this.state;
    const idx = dataObj.findIndex((el) => el.id === id);

    const oldItem = dataObj[idx];
    const newItem = { ...oldItem,
        amount: oldItem.amount++
    }
    this.setState(({ dataObj }) => {
      return {
        ...dataObj.slice(0, idx),
        newItem,
        ...dataObj.slice(idx + 1)
      }
    });
  }

  addCols = (cols) => {
    this.setState({ cols });
    this.create();
  };

  addRows = (rows) => {
    this.setState({ rows });
    this.create();
  };

  render() {
    const { dataObj, cols } = this.state;

    return (
      <div className="App container">
        <Header
          addCols={ this.addCols }
          addRows={ this.addRows } />
        <Item 
          cols={cols}
          onChangeAmount={ this.onChangeAmount }
          dataObj={dataObj}/>
      </div>
    );
  }

};


