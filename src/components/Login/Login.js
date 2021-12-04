auth-tutorial/src/components/Login/Login.js
import React from 'react';

export default function Login() {
  return(
      <div ClassName="login-wrapper">
          <h1>Please log in </h1>
        <form>
            <label>
                <p>Username</p>
                <input type="text" />
            </label>

            <label>
                <p>Password</p>
                <input type="password" />
            </label>
            
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
  )
}