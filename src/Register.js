import React, { Component } from 'react'

export default class Register extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       firstName: "",
       lastName: "",
       class: "",
       phoneNumber: "",
       email: "",
       password: ""
    }
    this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
    this.changeClassHandler=this.changeClassHandler.bind(this);
    this.changePhoneNumberHandler=this.changePhoneNumberHandler.bind(this);
    this.changeEmailHandler=this.changeEmailHandler.bind(this);
    this.changePasswordHandler=this.changePasswordHandler.bind(this);
    this.saveStudent=this.saveStudent.bind(this);
  }
  
  changeFirstNameHandler=(event)=>{
     this.setState({firstName: event.target.value});
  }
  changeLastNameHandler=(event)=>{
    this.setState({lastName: event.target.value});
 }
 changeClassHandler=(event)=>{
  this.setState({class: event.target.value});
}
changePhoneNumberHandler=(event)=>{
  this.setState({phoneNumber: event.target.value});
}
changeEmailHandler=(event)=>{
  this.setState({email: event.target.value});
}
changePasswordHandler=(event)=>{
  this.setState({password: event.target.value});
}

saveStudent=(e)=>{
  e.preventDefault();
  let Student={firstName: this.state.firstName,lastName: this.state.lastName,class: this.state.class,phoneNumber: this.state.phoneNumber,email: this.state.email,password: this.state.password}
  console.log('student=>'+JSON.stringify)
}
  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <br></br>
            <h1 className='text-center'>Registration Form</h1>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <label>First Name</label>
                    <input type="text" placeholder="First Name" name='firstName' className='form-control' value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                  </div>
                  <div className='form-group'>
                    <label>Last Name</label>
                    <input type="text" placeholder="Last Name" name='lastName' className='form-control' value={this.state.lastName} onChange={this.changeLastNameHandler} />
                  </div>
                  <div className='form-group'>
                    <label>class</label>
                    <input type="text" placeholder= "Class" name='class' className='form-control' value={this.state.class} onChange={this.changeClassHandler} />
                  </div>
                  <div className='form-group'>
                    <label>Phone Number</label>
                    <input type="number" placeholder="Phone Number" name='phoneNumber' className='form-control' value={this.state.phoneNumber} onChange={this.changePhoneNumberHandler} />
                  </div>
                  <div className='form-group'>
                    <label>Email</label>
                    <input type="email" placeholder="Email" name='email' className='form-control' value={this.state.email} onChange={this.changeEmailHandler} />
                  </div>
                  <div className='form-group'>
                    <label>Password</label>
                    <input type="password" placeholder="Password" name='password' className='form-control' value={this.state.password} onChange={this.changePasswordHandler} />
                  </div>
                  <a href="#!">Forgot password?</a>
                  <br></br>
                  <button className='btn btn-success' style={{textAlign: 'center'}} onClick={this.saveStudent}>Register</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
