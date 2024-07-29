import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function LoginPage() {
const navigate = useNavigate();

  return (
    <div className="bg-gray-100 w-screen h-screen flex flex-col">
      <Navbar />
      <div className="h-full flex justify-center items-center text-gray-700">
        <form className=" bg-gray-200 opacity-75 rounded-lg flex flex-col text-[25px] p-5 gap-10 w-[90%] sm:w-[570px]">
          <h1 className="text-center text-[30px] pb-4 pt-5">Login Page</h1>
          <div className=" bg-gray-300 rounded-lg pt-2 pb-2 pl-3 ">
            <label>
              Username <br />
              <input
                className="pl-4 placeholder: w-[97.5%] placeholder: rounded-lg placeholder: bg-gray-300 placeholder: h-[70px] focus:outline-none
                 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 placeholder: text-[20px]"
                id="username"
                name="username"
                type="text"
                placeholder="Enter username here"
              />
            </label>
          </div>
          <div className="bg-gray-300 rounded-lg pt-2 pb-2 pl-3">
            <label>
              Password <br />
              <input
                className="pl-4 placeholder: w-[97.5%] placeholder: rounded-lg placeholder: bg-gray-300 placeholder: h-[70px] focus:outline-none
                 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 placeholder: text-[20px]"
                id="password"
                name="password"
                type="password"
                placeholder="Enter password here"
              />
            </label>
          </div>
          <div className="bg-gray-400 hover:bg-pink-400 hover:text-white rounded-lg pt-3 pb-2 text-center mt-16 h-[70%] text-[30px] cursor-pointer">
            <button className="w-full" onClick={()=>{navigate("/products")}}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
