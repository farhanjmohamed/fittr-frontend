import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup" className="text-center w-screen h-screen">
      <br />
      <form className="h-1/2 flex flex-col items-center justify-center rounded" onSubmit={handleSubmit}>
        <h1 className="pl-2 text-center text-2xl	font-bold	">Signup</h1>
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <br />
        <div>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="rounded-xl border-gray-900 border mb-2 w-full text-md"
          />
        </div>
        <div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="rounded-xl border-gray-900 border mb-2 w-full text-md"
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="rounded-xl border-gray-900 border mb-2 w-full text-md"
          />
        </div>
        <div>
          <input
            name="password_confirmation"
            type="password"
            placeholder="Password confirmation"
            className="rounded-xl border-gray-900 border mb-2 w-full text-md"
          />
        </div>
        <div>
          <button type="submit" className="mx-auto mt-2 w-24 rounded-full bg-black font-medium text-white ">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}
