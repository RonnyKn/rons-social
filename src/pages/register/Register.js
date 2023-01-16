import "./Register.css"
import React from "react"

const Register = () => {
  return (
    <div className="register">
      <div className="register-left">
        <h2>Register</h2>
        <form className="register-form">
          <label>Username:</label>
          <input type="text" />
          <label>E-mail:</label>
          <input type="email" />
          <label>Password:</label>
          <input type="text" />
          <label>Name:</label>
          <input type="text" />
        </form>
        <button className="btn-sign">Register</button>
      </div>
      <div className="register-right">
        <h1>Rons Social.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus minima
          aliquid, nobis tempora autem ratione ducimus mollitia nesciunt
          veritatis pariatur?
        </p>
        <p>Do you have an account?</p>
        <button className="btn-sign">Login</button>
      </div>
    </div>
  )
}

export default Register
