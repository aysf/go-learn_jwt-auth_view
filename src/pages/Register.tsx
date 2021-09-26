import React, { SyntheticEvent, useState } from "react";
import { Redirect } from "react-router";
import logo from "../logo.svg";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/login" />;
  }

  return (
    <form onSubmit={submit}>
      <img className="mb-4" src={logo} alt="" width="72" height="57"></img>
      <h1 className="h3 mb-3 fw-normal">Please register</h1>

      <div className="form-floating">
        <input
          type="name"
          className="form-control"
          id="floatingInput"
          placeholder="Your Name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="floatingInput">Name</label>
      </div>

      <div className="form-floating">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>

      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>

      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" />
          Remember me
        </label>
      </div>

      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Submit
      </button>
      <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
    </form>
  );
};

export default Register;
