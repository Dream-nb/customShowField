import React, { Component } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import './item.css';
import PropTypes from 'prop-types';
import {Icon } from 'antd';

class _Item extends Component {
  constructor(props){
    super(props)
    this.state={
      showColumns:this.props.showColumns,
      allColumns: this.props.allColumns
    }
  }
  static propTypes = {
    type: PropTypes.string.isRequired,
    move: PropTypes.func,
    find: PropTypes.func
  };
  componentDidMount(){
    const {showColumns,allColumns} = this.props;
    this.setState({
      showColumns:showColumns,
      allColumns:allColumns
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
  handleOnClick(content){
    const {showColumns,allColumns} = this.state;
    const {handleSetState} = this.props
    showColumns.items.map((item,i)=>{
      if(item.title === content){
        showColumns.items.splice(i,1);
        showColumns.bool = !showColumns.bool
      }
    })
    allColumns.items.map((item)=>{
      if(item.title === content){
        item.defaultChecked = !item.defaultChecked
      }
    })
    handleSetState(showColumns,allColumns);
  }
  render() {
    const {
      connectDropTarget,
      connectDragPreview,
      connectDragSource,
      move,
      find,
      title,
      isDragging
    } = this.props;

    return connectDragPreview(
        connectDropTarget(
            connectDragSource(
              <div
                className = 'itemKey'
                key={title}
              >
                <Icon style={{width:'6px'}}  type="more"/>
                <Icon  type="more"/>
                <span style={{marginLeft: "10px"}}>{title}</span>
                {
                  title === "操作"?null:<span onClick={this.handleOnClick.bind(this,title)} className="delete">×</span>
                }
                
              </div>
            )
        )
    );
  }
}

const source = {
  beginDrag(props) {
    // console.log('beginDrag')
    return {
      title: props.title
    };
  },

  isDragging(props, monitor) {
    // console.log('isDragging')
    return props.title == monitor.getItem().title;
  }
};

const target = {
  canDrop(props, monitor) {
    // console.log("props");
    const { title: draggedId } = monitor.getItem();
    const { title: dropId, contains } = props;

    if (draggedId === dropId) return false;
    if (!monitor.isOver({ shallow: true })) return false;

    // prevent dropping ancestor into child and dropping direct child into it's parent
    // if (contains(draggedId, dropId) || contains(dropId, draggedId, true)) return false;

    return true;
  },

  drop(props, monitor, component) {
    // console.log("props1",props);
    // console.log('monitor1',monitor);
    const { title: draggedId } = monitor.getItem();
    const { title: dropId, contains } = props;

    props.move(draggedId, dropId);
  }
};

const TYPE = 'ITEM';
const Item = DropTarget(TYPE, target, connect => ({
  connectDropTarget: connect.dropTarget()
}))(
  DragSource(TYPE, source, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }))(_Item)
);

export default Item;
