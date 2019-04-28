import React from 'react';
import { Modal, Button } from 'antd';
import DragAndDrop from './DragAndDrop';

class DropModel extends React.Component{
  constructor(props){
    super(props)
    this.state={
      showColumns:[],
      allColumns:[],
      disabled : false //判断是否有操作栏
    }
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel= this.handleCancel.bind(this);
    this.handleSetShowColumns = this.handleSetShowColumns.bind(this);
  }
  componentDidMount(){
    const {showColumns,allColumns} = this.props; 
    let arr = [];
    let arr1 =[];
    let disabled =false ;
    showColumns.map((item)=>{
      if(item.title === "操作"){
        disabled = true;
      }
      arr.push({
        ...item,
        defaultChecked:true,
        type:'ITEM'
      })
    })
    allColumns.map((item)=>{
      arr1.push({
        ...item,
        defaultChecked:false,
        type:'ITEM'
      })
    })
    this.setState({
      showColumns:{
        type: 'BOX',
        bool: false,
        items: arr
      },
      allColumns:{
        type: 'BOX',
        items: arr1
      },
      disabled,
    })
  }
  handleOk(){
    const  {handleModelOk} = this.props;
    let {showColumns} = this.state;
    let copyShowColumns = [];
    copyShowColumns = showColumns.items.map((item)=>{
      return {
        ...item
      }
    })
    let columns = copyShowColumns.map((item)=>{
      delete item.defaultChecked
      delete item.type
      return item
    })
    handleModelOk(columns);
  }
  handleCancel(){
    const {handleModelCancel} = this.props;
    handleModelCancel()
  }
  handleSetShowColumns(showColumns){
    this.setState({
      showColumns,
    })
  }
  render(){
      const {dropShowModel} = this.props;
      const {showColumns,allColumns,disabled} = this.state;
      return <div>
      <Modal
        title="设置显示字段"
        visible={dropShowModel}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        width= {"840px"}
        maskStyle={{backgroundColor: "rgba(255,255,255,0.7)"}}
        maskClosable={false}
        bodyStyle={{padding:" 0 12px"}}
      >
        <DragAndDrop showColumns={showColumns} disabled={disabled} allColumns={allColumns} handleSetShowColumns={this.handleSetShowColumns}/>
      </Modal>
    </div>
  }
}

export default DropModel