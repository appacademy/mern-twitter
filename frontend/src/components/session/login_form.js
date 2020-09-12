import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../actions/session_actions";

const LoginForm = (props) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const errors = useSelector((state) => state.errors.session);
  const dispatch = useDispatch();

  const updateField = (field) => {
    return (e) =>
      setForm({
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

    dispatch(login(user));
  };

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
            onChange={updateField("email")}
            placeholder="Email"
          />
          <br />
          <input
            type="password"
            value={form.password}
            onChange={updateField("password")}
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
