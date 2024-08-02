import React from 'react'

function Login() {
  return (
    <section class="login-form">
    <div class="close-icon" onclick="close()">X</div>
    <div class="container form-container">
      <div class="l-form">
        <div class="form-heading">
          <h3>Log In</h3>
        </div>
        <form action="" class="m-form">
          <div class="inp-div">
            <input type="text" name="uname" id="uname" />
            <label for="uname">Username</label>
          </div>
          <div class="inp-div">
            <input type="text" name="password" id="password1" />
            <label for="password1">Password</label>
          </div>
          <div class="inp-div">
            <input type="submit" value="Submit" />
          </div>
          <div class="inp-div f-section">
            <div>Forgot Password ? <span>click here</span></div>
            <div>New User ? Create Account <span class="ls-form" onclick="signup()">click here</span></div>
          </div>
        </form>
      </div>

      <div class="s-form">
        <div class="form-heading">
          <h3>Sign Up</h3>
        </div>
        <form action="" class="m-form">
          <div class="inp-div">
            <input type="text" name="fname" id="fname" />
            <label for="fname">First Name</label>
          </div>
          <div class="inp-div">
            <input type="text" name="lname" id="lname" />
            <label for="lname">Last Name</label>
          </div>
          <div class="inp-div">
            <input type="email" name="email" id="email"/>
            <label for="email">Email</label>
          </div>
          <div class="inp-div">
            <input type="password" name="password" id="password"/>
            <label for="password">Password</label>
          </div>
          <div class="inp-div">
            <input type="password" name="cpassword" id="cpassword"/>
            <label for="cpassword">Confirm Password</label>
          </div>
          <div class="inp-div">
            <input type="submit" value="Submit"/>
          </div>
          <div class="inp-div f-section">
            <div>Forgot Password ? <span>click here</span></div>
            <div>Existing User ? Login <span class="ls-form" onclick="login()"> click here</span></div>
          </div>
        </form>
      </div>
    </div>

  </section>
  )
}

export default Login
