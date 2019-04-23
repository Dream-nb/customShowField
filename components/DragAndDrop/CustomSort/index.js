import React, { Component } from 'react'
import Item from './Item';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import './customsort.css';

class customSort extends Component {
  state = {
    showColumns:this.props.showColumns,
    allColumns: this.props.allColumns
  }
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
  render() {
    const { move ,handleSetState} = this.props;
    const {showColumns,allColumns} = this.state;
    return <div className="customsort">
      <div className="title">当前选定字段</div>
      <div style={{
            display: 'flex',
            flexDirection: 'column',
            opacity: 0.6,
          }}>
            {showColumns.items.map(child => {
              return <Item
                handleSetState={handleSetState}
                showColumns={showColumns}
                allColumns={allColumns}
                key={child.title}
                {...child}
                move={move}
              />
            })}
          </div>
    </div>
  }
}

export default DragDropContext(HTML5Backend)(customSort);