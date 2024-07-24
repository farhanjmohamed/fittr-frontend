import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div id="login" className="w-screen h-screen">
      <form onSubmit={handleSubmit} className="h-1/2 flex flex-col items-center justify-center rounded">
        <h1 className="text-center mt-10 font-bold text-2xl">Login</h1>
        <br />
        <div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="rounded-xl border-gray-900 border px-2 mb-2 w-full text-md"
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="rounded-xl border-gray-900 border px-2 mb-2 w-full text-md"
          />
        </div>
        <button type="submit" className="bg-black w-20 px-4 py-2 text-white rounded-full mt-2">
          Login
        </button>
        <ul className="text-center mt-3">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}
