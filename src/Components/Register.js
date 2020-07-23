import React from 'react'
import FormContainer from "./FormContainer"

const Register = () => {
    return (
     <FormContainer title="Register">
         <label>User Name</label>
  <input type="text" placeholder="User Name" />
         <label>Email</label>
  <input type="email" placeholder="User Name" />
  <label>Password</label>
  <input type="password" placeholder="User Name" />
  <button>Register</button>
     </FormContainer>
    )
}

export default Register
