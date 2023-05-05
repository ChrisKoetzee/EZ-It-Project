import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleRememberMeChange(event) {
    setRememberMe(event.target.checked);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: Handle login submission
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email Address:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <div>
        <label htmlFor="rememberMe">
          <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={handleRememberMeChange} />
          Check me out
        </label>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

export default LoginForm;
