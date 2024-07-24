import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <a href="#" onClick={handleClick} className="block rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black">
      Logout
    </a>
  );
}
