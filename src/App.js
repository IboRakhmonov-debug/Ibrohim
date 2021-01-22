import React , { Component } from 'react';


class App extends Component{
  constructor(props){
    super(props);
    this.state={
      newItem:"",
      list:[]
    }
  }

  updateInput(key, value){
    //update react state
    this.setState({
      [key]:value
    });
  }
  addItem(){
    //create item with unique id
    const newItem={
      id:1 + Math.random(),
      value: this.state.newItem.slice()
    };

    //copy of current list of items
    const list = [...this.state.list];

    //add mew item to list
    list.push(newItem);

    //update state eith new list and reset newItem input
    this.setState({
      list,
      newItem:""
    })
  }
  deleteItem(id){
    //copy current list of item
    const list = [...this.state.list];

    //filter out item being delete
    const updatedList = list.filter(item => item.id !== id);

    this.setState({list:updatedList});
  }
  render(){
    return(
      <div className="App">
        <div>
          Add an Item... 
          <br/>
          <input
            placeholder="Type item here ..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
            type="text"
          />
          <button 
            onClick={() => this.addItem()}
          >
          Add
          </button>
          <br/>
          <ul>
            {this.state.list.map(item => {
              return(
                <li key={item.id}>
                  {item.value}
                  <button
                    onClick={() => this.deleteItem(item.id)}
                  >
                    Delete
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default App;