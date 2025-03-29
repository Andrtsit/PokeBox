import { useState } from "react";
import { login } from "../services/apiAuth";

function LoginForm({ isLogged, setIsLogged }) {
  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    const data = await login({ email, password });
    console.log(typeof data.user.role);
    if (data.user.role === "authenticated") setIsLogged(true);
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);
  return (
    <form className=" min-w-100 rounded-md min-h-100 flex flex-col justify-between p-20 items-center bg-red-700 text-black ">
      <div className="flex gap-5   flex-col">
        <label>Email:</label>
        <input
          className="bg-white text-sm text-black"
          type="text"
          value={email}
          onChange={(e) => {
            console.log(typeof e.value);
            setEmail(e.target.value);
          }}
        />
        <label>Password:</label>
        <input
          className="bg-white text-sm text-black"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        onClick={handleSubmit}
        className="cursor-pointer block  rounded-md p-2 hover:bg-black hover:text-white bg-white text-black"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
