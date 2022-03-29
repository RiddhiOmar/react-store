import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email: "",
       password: ""
    }
    this.changeEmailHandler=this.changeEmailHandler.bind(this);
    this.changePasswordHandler=this.changePasswordHandler.bind(this);
    this.saveStudent=this.saveStudent.bind(this);
  }
  
changeEmailHandler=(event)=>{
  this.setState({email: event.target.value});
}
changePasswordHandler=(event)=>{
    this.setState({password: event.target.value});
}

saveStudent=(e)=>{
  e.preventDefault();
  let Student={email: this.state.email,password: this.state.password}
  console.log('student=>'+JSON.stringify)
}
  render() {
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <br></br>
            <h1 className='text-center'>Login</h1>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <label>Email</label>
                    <input type="email" placeholder="Email" name='email' className='form-control' value={this.state.email} onChange={this.changeEmailHandler} />
                  </div>
                  <div className='form-group'>
                    <label>Password</label>
                    <input type="password" placeholder="Password" name='password' className='form-control' value={this.state.password} onChange={this.changePasswordHandler} />
                  </div>
                  <div class="col text-right">
                     <a href="#!">Forgot password?</a>
                   </div>
                  <br></br>
                  <button type='button' className='btn btn-success' style={{textAlign: 'center'}} onClick={this.saveStudent}>Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
