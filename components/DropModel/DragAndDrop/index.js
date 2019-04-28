import React, { Component } from 'react'
import CustomSort from "./CustomSort";
import Checkboxs from './Checkbox';
import {Spin,message} from 'antd'
import './index.css'
class DragAndDrop extends Component {
  constructor(props){
    super(props)
    const {showColumns,allColumns} = this.props;
    this.state={
      showColumns:showColumns,
      allColumns:allColumns
    }
    this.handleSetState = this.handleSetState.bind(this);
  }
  move = (from, to)=>{
    if(from === "操作"){ message.warning('操作栏不可移动'); return ;}
    const {handleSetShowColumns} = this.props;
    const { showColumns } = this.state;
    // find items
    let nextLayout = {...showColumns};
    // console.log('nextLayout',nextLayout);
    let items = [];
    this.findItem(nextLayout, nextLayout, '', [from, to], items);
    let [fromItem, toItem] = items;
    // console.log('items',items);
    // update model
    // drop to box, append
    if (toItem.value.type === 'BOX') {
      toItem.value.items.push(fromItem.value);
      fromItem.parent.splice(fromItem.key, 1);
    }
    // drop to item, insert before/after
    else {
      // delete from
      const tmpItem = fromItem.parent.splice(fromItem.key, 1)[0];
      // insert to
      if (fromItem.parent === toItem.parent && fromItem.key < toItem.key) {
        // swap adjacent item
        if (toItem.key - fromItem.key === 1) {
          toItem.parent.splice(toItem.key - 1, 1, toItem.value, tmpItem);
        }
        else {
          toItem.parent.splice(toItem.key - 1, 0, tmpItem);
        }
      }
      else {
        toItem.parent.splice(toItem.key, 0, tmpItem);
      }
    }

    // sync UI state
    // console.log(`${from} -> ${to}`);
    let newNextLayout = {
      type: nextLayout.type,
      bool: !nextLayout.bool,
      items: nextLayout.items,

    }
    // console.log('newNextLayout',newNextLayout);
    handleSetShowColumns(newNextLayout);
    this.setState({
      showColumns: newNextLayout
    });
  }

  findItem(boxOrItem, parent, key, itemIds, result, shadow){
    // fill with null, then reduce() works
    if (result.length !== itemIds.length) {
      for (let i = 0; i < itemIds.length; i++) {
        result[i] = null;
      }
    }
    itemIds.forEach((title, i) => {
      if (boxOrItem.title === title) {
        result[i] = {
          value: boxOrItem,
          parent,
          key
        };
      }
    });
    if (result.reduce((a, v) => a && v, true)) return;

    if (!shadow && boxOrItem.type === 'BOX') {
      boxOrItem.items.forEach((item, i) => this.findItem(item, boxOrItem.items, i, itemIds, result));
    }
  }
  handleSetState(showColumns,content){
    const {handleSetShowColumns} = this.props;
    handleSetShowColumns(showColumns);
    this.setState({
      showColumns: showColumns,
      allColumns: content
    })
  }
  // componentDidUpdate(nextProps,nextState){
  //   if(nextState.layout.bool !== this.state.layout.bool){
  //     this.render();
  //   }
  // }
  render() {
    let { showColumns,allColumns,disabled } = this.props;
    if(showColumns.type === undefined){
      return <div><Spin size="large" /></div>
    }else{
      return <div className="wrap">
      <Checkboxs allColumns={allColumns} disabled={disabled} showColumns={showColumns} handleSetState = {this.handleSetState} />
      <CustomSort allColumns={allColumns} disabled={disabled}  showColumns={showColumns} move={this.move.bind(this)}  handleSetState = {this.handleSetState}/>
    </div>
    }
    
  }
}
export default DragAndDrop