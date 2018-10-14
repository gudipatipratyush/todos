import React, { Component } from 'react';


class App extends Component {
  state={
    tasks:[{name:'Task 1',status:false},
    {name:'Task 2',status:false},
    {name:'Task 3',status:false},
    {name:'Task 4',status:false}]
  }
  updateTask = index =>{
    const tasks=[
      ...this.state.tasks.slice(0,index),
      {
        ...this.state.tasks[index],
        status: !this.state.tasks[index].status
      },
      ...this.state.tasks.slice(index+1)
    ]
    this.setState({tasks})
  }
  // updateTask= index =>{
  //    const tasks=[
  //      ...this.state.tasks.slice(0,index),
  //      {
  //        ...this.state.tasks[index],
  //        status: !this.state.tasks[index].status
  //      },
  //      ...this.state.tasks.slice(index+1)
  //    ]
  //    this.setState({tasks})//accepts only object
  // }
  render() {
    return (
     <ul>
       {this.state.tasks.map((task,i)=><span key={i}><li key={i} style={{color:task.status?'red':'orange'}}>{task.name}</li>
       <button onClick={() =>{this.updateTask(i)}}>Done</button></span>)}
       </ul>
    );
  }
}

export default App;
