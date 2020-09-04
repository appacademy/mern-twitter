import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";

const LoginForm = (props) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const { currentUser, history, login, errors } = props;

  const updateField = (field) => {
    return e => setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let user = {
      email: form.email,
      password: form.password,
    };

    login(user);
  };

  useEffect(() => {
    if (currentUser) {
      history.push("/tweets");
    }
  }, [currentUser]);

  const renderErrors = () => {
    return (
      <ul>
        {Object.keys(errors).map((error, i) => (
          <li key={`error-${i}`}>{errors[error]}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <br />
          <input
            type="text"
            value={form.email}
            onChange={updateField('email')}
            placeholder="Email"
          />
          <br />
          <input
            type="password"
            value={form.password}
            onChange={updateField('password')}
            placeholder="Password"
          />
          <br />
          <input type="submit" value="Submit" />
          {renderErrors()}
        </div>
      </form>
    </div>
  );
};

export default withRouter(LoginForm);
