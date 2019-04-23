import React, { Component } from 'react';
import dataStore from '../Common/dataStores';
import DropModel from './DropModels.js';
import {Button, Table} from 'antd';

class Index extends Component {
  constructor(props){
    super(props)
    this.state={
      showColumns:[...(dataStore.columns)],
      allColumns: [...dataStore.newColumns],
      dropShowModel: false,
    }
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleModelOk = this.handleModelOk.bind(this);
    this.handleModelCancel= this.handleModelCancel.bind(this);
  }
  componentDidMount(){
    let showColumns = [...(dataStore.columns)];
    let allColumns = [...dataStore.newColumns]
    this.setState({
      showColumns,
      allColumns,
    })
    // console.log('layout###',layout);
    // console.log('newlayoutt###',newlayout);
  }
  handleOnClick(){
    this.setState({
      dropShowModel: true
    })
  }
  handleModelOk(columns){
    this.setState({
      dropShowModel: false,
      showColumns: columns
    })
  }
  handleModelCancel(){
    this.setState({dropShowModel:false})
  }
  render() {
    // console.log('this',this);
    const {showColumns,allColumns,dropShowModel} = this.state;
    if(showColumns.length===0 || allColumns.length ===0 ) {
      return <div/>
    }else{
      return <div>
      <DropModel
        dropShowModel={dropShowModel}
        showColumns={showColumns}
        allColumns={allColumns}
        handleModelOk={this.handleModelOk}
        handleModelCancel={this.handleModelCancel}
      />
      <Button
        onClick = {this.handleOnClick}
      >
        巴啦啦能量~变身！！
      </Button>
      <div>
        <Table
          dataSource={[]}
          columns={showColumns}
          style={{ margin: '24px 0' }}
        />
      </div>
      </div>
    }
    
  }
}
export default Index