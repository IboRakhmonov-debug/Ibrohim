import React, { Component } from 'react'

class Form extends Component {

  state = {
    address: "",
    fullname: "",
    age: "",
    carmodel: ""
  };

  changeData = () => {
    if(this.state.address == "123 main st") {
      this.setState({
        address:"Ibrohim"
      });
    }else{
      this.setState({
        address: "123 main st"
      });
    }
  } 

  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render()  {
    
    const { address , fullname , carmodel , age } = this.state;

    return (
      <div>
        <h3> Name :  {this.state.fullname} </h3>
        <h3> Address :  {this.state.address} </h3>
        <h3> Age :  {this.state.age} </h3>
        <h3> Carmodel :  {this.state.carmodel} </h3>
        
        
        <input type="text" className="form-control" placeholder="Fullname" name="fullname" value={this.state.fullname}
        onChange={this.changeInput}
        />
        <br/>
        <input type="text" className="form-control" placeholder="Address" name="address" value={this.state.address}
        onChange={this.changeInput}
        />
        <br/>
        <input type="number" className="form-control" placeholder="Age" name="age" value={this.state.age}
        onChange={this.changeInput}
        />
        <br/>
        <input type="text" className="form-control" placeholder="Carmodel" name="carmodel" value={this.state.carmodel}
        onChange={this.changeInput}
        />
        
        {/* <button onClick={this.changeData}> click</button> */}
      </div>
    )
  }
}

export default Form;