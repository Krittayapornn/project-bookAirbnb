import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 w-screen h-screen flex flex-col">
      <Navbar />
      <div className="h-full flex justify-center items-center text-gray-700 ">
        <form className=" bg-gray-200 opacity-75 rounded-lg flex flex-col text-[20px] p-5 gap-2 w-[90%] sm:w-[570px] sm:text-[25px]">
          <h1 className="text-[20px] pl-10 pb-4 pt-2 sm:text-[30px]">
            Registeration Form
          </h1>
          <div className=" bg-gray-300 rounded-lg pl-3">
            <label>
              Firstname
              <input
                className="pl-4 placeholder: w-[95%] placeholder: rounded-lg placeholder: bg-gray-300 placeholder: h-[30px] focus:outline-none
                 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 placeholder: text-[11px] sm:placeholder:text-[20px] sm:ml-14 sm:pl-4 sm:h-[70px] sm:w-[66%]"
                id="firstname"
                name="firstname"
                type="text"
                placeholder="Enter firstname here"
              />
            </label>
          </div>
          <div className="bg-gray-300 rounded-lg pl-3 ">
            <label>
              Lastname
              <input
                className="pl-4 placeholder: w-[95%] placeholder: rounded-lg placeholder: bg-gray-300 placeholder: h-[30px] focus:outline-none
                 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 placeholder: text-[11px] sm:placeholder:text-[20px] sm:ml-14 sm:pl-4 sm:h-[70px] sm:w-[66%]"
                id="lastname"
                name="lastname"
                type="text"
                placeholder="Enter lastname here"
              />
            </label>
          </div>
          <div className="bg-gray-300 rounded-lg pl-3">
            <label>
              Username
              <input
                className="pl-4 placeholder: w-[95%] placeholder: rounded-lg placeholder: bg-gray-300 placeholder: h-[30px] focus:outline-none
                 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 placeholder: text-[11px] sm:placeholder:text-[20px] sm:ml-14 sm:pl-4 sm:h-[70px] sm:w-[66%]"
                id="username"
                name="username"
                type="text"
                placeholder="Enter username here"
              />
            </label>
          </div>
          <div className="bg-gray-300 rounded-lg pl-3">
            <label>
              Password
              <input
                className="pl-4 placeholder: w-[95%] placeholder: rounded-lg placeholder: bg-gray-300 placeholder: h-[30px] focus:outline-none
                 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 placeholder: text-[11px] sm:placeholder:text-[20px] sm:ml-16 sm:pl-4 sm:h-[70px] sm:w-[66%]"
                id="password"
                name="password"
                type="password"
                placeholder="Enter password here"
              />
            </label>
          </div>
          <div className="bg-gray-300 rounded-lg pl-3">
            <label>
              Address
              <input
                className="pl-4 placeholder: w-[95%] placeholder: rounded-lg placeholder: bg-gray-300 placeholder: h-[30px] focus:outline-none
                 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 placeholder: text-[11px] sm:placeholder:text-[20px] sm:ml-20 sm:pl-4 sm:h-[70px] sm:w-[66%]"
                id="address"
                name="address"
                type="text"
                placeholder="Enter address here"
              />
            </label>
          </div>
          <div className="bg-gray-300 rounded-lg pl-3">
            <label>
              Postcode
              <input
                className="pl-4 placeholder: w-[95%] placeholder: rounded-lg placeholder: bg-gray-300 placeholder: h-[30px] focus:outline-none
                 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 placeholder: text-[11px] sm:placeholder:text-[20px] sm:ml-16 sm:pl-4 sm:h-[70px] sm:w-[66%]"
                id="postcode"
                name="postcode"
                type="text"
                placeholder="Enter postcode here"
              />
            </label>
          </div>
          <div className="bg-gray-300 rounded-lg pl-3">
            <label>
              Phone Phone
              <input
                className="pl-4 placeholder: w-[95%] placeholder: rounded-lg placeholder: bg-gray-300 placeholder: h-[30px] focus:outline-none
                 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 placeholder: text-[11px] sm:placeholder:text-[20px] sm:ml-4 sm:pl-4 sm:h-[70px] sm:w-[66%]"
                id="postcode"
                name="postcode"
                type="text"
                placeholder="Enter Phone number here"
              />
            </label>
          </div>
          <div className="bg-gray-400 hover:bg-pink-400 hover:text-white rounded-lg pt-3 pb-2 text-center mt-6 h-[70%] text-[20px] sm:text-[25px] cursor-pointer">
            <button
              className="w-full"
              onClick={() => {
                navigate("/login");
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
