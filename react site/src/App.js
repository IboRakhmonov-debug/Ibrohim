import React, { Component } from 'react';
import axios from 'axios';
import { setTimeout } from 'timers';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Jamshid",
      dataLoading: true,
      mydata: []
    }
  }

  async componentDidMount() {
    console.log("DID MOUNT");
    const mydata = await axios.get('https://reqres.in/api/users?page=1');
    this.setState({ dataLoading: false, mydata: mydata.data.data });
  }
  render() {
    console.log("RENDER");
    return (
      // conditional rendering in react
      // class based component built in functions in react
      <div>
        {
          this.state.dataLoading ? <img src="https://i.ya-webdesign.com/images/loading-gif-png-5.gif" /> : <table className="table table-bordered table-striped" >
            <tr>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
            {
              this.state.mydata.map(user => {
                return (
                  <tr>
                    <td>{user.email}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                  </tr>
                )
              }
              )
            }
          </table>
        }
      </div>
    )
  }
}
export default App;
