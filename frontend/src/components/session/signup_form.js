import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../../actions/session_actions";

const SignupForm = (props) => {
  const signedIn = useSelector((state) => state.session.isSignedIn);
  const errors = useSelector((state) => state.errors.session);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    handle: "",
    password: "",
    password2: "",
  });
  const { history } = props;

  useEffect(() => {
    if (signedIn) {
      history.push("/login");
    }
  }, [signedIn, history]);

  const update = (field) => {
    return (e) =>
      setForm({
        ...form,
        [field]: e.currentTarget.value,
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      email: form.email,
      handle: form.handle,
      password: form.password,
      password2: form.password2,
    };

    dispatch(signUp(user));
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
    <div className="login-form-container">
      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <br />
          <input
            type="text"
            value={form.email}
            onChange={update("email")}
            placeholder="Email"
          />
          <br />
          <input
            type="text"
            value={form.handle}
            onChange={update("handle")}
            placeholder="Handle"
          />
          <br />
          <input
            type="password"
            value={form.password}
            onChange={update("password")}
            placeholder="Password"
          />
          <br />
          <input
            type="password"
            value={form.password2}
            onChange={update("password2")}
            placeholder="Confirm Password"
          />
          <br />
          <input type="submit" value="Submit" />
          {renderErrors()}
        </div>
      </form>
    </div>
  );
};

export default withRouter(SignupForm);
