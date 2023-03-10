import React, { Component } from 'react'
class Form extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
         username:'',
         emailid:'',
         password:''
      }
    }
    a =event=>{
        this.setState({
            username:event.target.value
        });
    }
    c=event=>{
        this.setState({
            emailid:event.target.value
                });
            }
    d =event=>{
        this.setState({
              password:event.target.value
                    });
    }
    e = event=>{
        alert(`${this.state.username}${this.state.emailid}${this.state.password}`);
        event.preventDefault()
    }
    f =event=>{
        this.setState({
            topic:event.target.value
                    });
    }
    g =event=>{
        this.setState({
            text:event.target.value
                    });
    }
  render() {
    return (
    <form onSubmit={this.e}>
      <div>
        <label>User Name</label>
        <input type="text"  value={this.state.username}onChange={this.a}></input>
      </div>
      <div>
      <label>Email Id</label>
        <input type="text"  value={this.state.emailid}onChange={this.c}></input>
      </div>
      <div>
      <label>Password</label>
        <input type="text"  value={this.state.password}onChange={this.d}></input>
      </div>
      <button type="Submit">Submit</button>
      </form>
    );
  }
}

export default Form
