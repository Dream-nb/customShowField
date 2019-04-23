import React from 'react';
import { Modal, Button } from 'antd';
import DragAndDrop from '../DragAndDrop';

class DropModel extends React.Component{
  constructor(props){
    super(props)
    const {showColumns,allColumns} = this.props;
    this.state={
      showColumns:showColumns,
      allColumns:allColumns
    }
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel= this.handleCancel.bind(this);
    this.handleSetShowColumns = this.handleSetShowColumns.bind(this);
  }
  componentDidMount(){
    const {showColumns,allColumns} = this.props;
    let arr = JSON.parse(JSON.stringify(showColumns));
    let arr1 = JSON.parse(JSON.stringify(allColumns));
    arr.map((item)=>{
      item.defaultChecked=true;
      item.type = 'ITEM';
    })
    arr1.map((item)=>{
      item.defaultChecked=false;
      item.type = 'ITEM';
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
    })
  }
  handleOk(){
    const  {handleModelOk} = this.props;
    const {showColumns} = this.state;
    let copyShowColumns = JSON.parse(JSON.stringify(showColumns));
    let columns = copyShowColumns.items.map((item)=>{
      delete item.defaultChecked
      delete item.type
      return item
    })
    handleModelOk(columns)
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
      const {showColumns,allColumns} = this.state;
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
        <DragAndDrop showColumns={showColumns} allColumns={allColumns} handleSetShowColumns={this.handleSetShowColumns}/>
      </Modal>
    </div>
  }
}

export default DropModel