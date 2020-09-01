import React from 'react';
import './App.css';
import {DatePicker, Table} from 'antd';
import 'antd/dist/antd.css';

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

const columns = [{
  title: 'original',
  dataIndex: 'original',
  key: 'original'
},
{
  title: 'previous',
  dataIndex: 'previous',
  key: 'previous'
}];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      dateConversions: []
    };
    this.onChange = this.onChange.bind(this);
    this.convertData = this.convertData.bind(this);
  }

  onChange(date, dateString) {
    let conversion = {};
    date = new Date(date);
    conversion.original = date.toDateString();
    conversion.converted = date.addDays(238).toDateString();
    let dateConversions = this.state.dateConversions;
    dateConversions.unshift(conversion);
    this.setState({
      dateConversions: dateConversions
    });

  };

  convertData(){
    console.log(this.state);
    return this.state.dateConversions.map(conversion =>{
      return {
        original: conversion.original,
        previous: conversion.converted
    }})
  }

  render(){
    console.log('here');
    return (
      <div className="App">
        <header className="App-header">
          <DatePicker onChange={this.onChange}/>
          <Table columns={columns} dataSource={this.convertData()}/>
        </header>
      </div>
    );
  }
}

export default App;
