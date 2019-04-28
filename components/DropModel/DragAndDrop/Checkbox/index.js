import React, { Component } from 'react';
import {Checkbox ,Col,Row} from 'antd';
import './checkbox.css';

class CheckBoxs extends Component {
  constructor(props){
    super(props)
    this.state={
      showColumns:  this.props.showColumns,
      allColumns:  this.props.allColumns
    }
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  componentDidMount(){
    const {showColumns,allColumns} = this.props;
    // layout.items.map((item)=>{
    //   dataArr.push(item.content);
    // })
    allColumns.items.map((newitem,i)=>{
      showColumns.items.map((item,i)=>{
        if(newitem.title === item.title){
          newitem.defaultChecked = true
        }
      })
    })
    this.setState({
      showColumns,
      allColumns
    })
  }
  componentDidUpdate(nextProps,nextState){
    if(nextProps.showColumns.bool !==this.props.showColumns.bool){
      this.setState({
        showColumns: this.props.showColumns,
        allColumns: this.props.allColumns
      })
    }
  }
  handleOnChange =(e)=>{
    let {allColumns=[],showColumns=[]}=this.state;
    const {handleSetState,disabled} = this.props;
    let current = [];
    let index = [];
    let length = showColumns.items.length;
    allColumns.items.map((item,i)=>{
      if(item.title === e.target.value){
        item.defaultChecked = !item.defaultChecked;
        current.push(item);
      }
    })
    let dataArr = showColumns.items.filter((item)=>{
      return item.title ===  e.target.value
    })
    showColumns.items.map((item,i)=>{
      if(item.title === e.target.value){
        index.push(i)
      }
    });
    if(dataArr.length === 0){
      if(disabled){
        showColumns.items.splice(length-1,0,{
          ...current[0],
          defaultChecked: true
        })
      }else{
        showColumns.items.push({
          ...current[0],
          defaultChecked: true
        })
      }
      showColumns.bool = !showColumns.bool
    }else{
      showColumns.items.splice(+index[0],1);
      showColumns.bool = !showColumns.bool
    }
    // console.log('layout',layout);
    this.setState({
      allColumns,
    })
    handleSetState(showColumns,allColumns);
  }

  render() {
    const {allColumns =[]}=this.state;
    // console.log('newlayout@@@',newlayout);
    return <div className="checkbox">
      <div className="content">
      <Row>
        <Col >
          <div className="title">可选字段</div>
        </Col>
      </Row>
        <Row>
        {
          allColumns.items.map((newItem,id)=>{
            return <Col span={6} key={id}> <Checkbox disabled={newItem.title==="操作"?true:false}  value={newItem.title} checked={newItem.defaultChecked}  key={id} onChange={this.handleOnChange}>
              {newItem.title}
            </Checkbox> </Col>
          })
        }
      </Row>
      </div>
      
        
    </div>
  }
}

export default CheckBoxs
