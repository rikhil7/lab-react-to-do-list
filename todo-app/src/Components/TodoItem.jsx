import React, { Component } from "react";

export default class TodoItem extends Component {
  constructor() {
    super();
  }
  
  render() {
    let {e,i,deleteItem,updateItem} = this.props
    return(
      <div key={i}>
        <input id='task' type="text" value={e} onChange={(event)=>{
          updateItem(event.target.value, i)
        }} />
        <button className='delete' onClick={()=>{
          deleteItem(i)
        }}>DELETE</button>
      </div>
    )
  }
}
