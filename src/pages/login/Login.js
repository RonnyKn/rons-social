import "./Login.css"
import React from "react"

const Login = () => {
  return (
    <div className="login">
      <div className="login-left">
        <h1>Hello World</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus minima
          aliquid, nobis tempora autem ratione ducimus mollitia nesciunt
          veritatis pariatur?
        </p>
        <p>Do you have an account?</p>
        <button className="btn-sign">Register</button>
      </div>
      <div className="login-right">
        <h2>Login</h2>
        <form className="login-form">
          <label>Username:</label>
          <input type="text" />
          <label>Password:</label>
          <input type="password" />
        </form>
        <button className="btn-sign">Login</button>
      </div>
    </div>
  )
}

export default Login
