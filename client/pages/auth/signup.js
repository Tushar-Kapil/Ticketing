import { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { doRequest, errors } = useRequest({
    url: "/api/users/signup",
    method: "post",
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push("/"),
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    await doRequest();
  };

  return (
    <form onSubmit={submitHandler} className="container w-50 mt-3">
      <h1 className="text-center text-lg">Sign Up</h1>
      <div className="form-group">
        <label>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label>Password</label>

        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
        />
      </div>
      <button className="btn btn-dark mt-4">Sign Up</button>

      {errors}
    </form>
  );
};
