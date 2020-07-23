import React from 'react'
import FormContainer from './FormContainer'

const Login = () => {
    return (
      <FormContainer title="Login" textColor="text-white" background="bg-dark">
          <label>Email</label>
          <input type="email" placeholder="email" />
          <label>Password</label>
              <input type="password" placeholder="password"/>
              <button>Login</button>

      </FormContainer>
    )
}

export default Login
