import bgHome from "../images/bgHome.jpg";
import section1img1 from "../images/section1img1.jpg"
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <Navbar />
      <header className="bg-red-500 flex flex-col h-[710px]">
        <img
          className="absolute object-cover top-0 left-0 h-[780px] w-full "
          src={bgHome}
        ></img>
        <div className="gap-4 w-4/5 h-fit sm:w-[570px] md:w-[700px] relative top-40 left-14 sm:top-44">
          <h1 className="text-[40px] font-bold text-gray-700 md:text-[60px]">
            Fresh Flowers
          </h1>
          <h4 className="text-pink-600 text-[25px] md:text-[40px]">
            Natural & Beautiful Flowers
          </h4>
          <p className="md:text-[20px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi,
            autem omnis est veritatis ut consequatur fuga modi corporis sapiente
            voluptate quo, velit hic porro expedita saepe, laboriosam voluptatem
            tempore possimus!
          </p>
          <br />
          <button
            className="bg-gray-700 rounded-3xl text-white pl-7 pr-7 pt-3 pb-3 lg:text-[20px] hover:bg-pink-500"
            onClick={() => {
              navigate("/products");
            }}
          >
            Shop Now
          </button>
        </div>
      </header>
      <section>
        <div className="bg-red-400 h-[710px] mt-4">
          <div className="bg-pink-200 drop-shadow-lg text-center h-[50px]">
            <span className="text-gray-700 text-[30px] font-bold">About</span>
            <span className="text-pink-500 ml-2 text-[30px]">Us</span>
          </div>
          <figure>
            <img src={section1img1}></img>
          </figure>
          <div className="bg-yellow-200 pl-14">
            <h1 className="text-gray-700">Why Choose Us</h1>
            <br />
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <br />
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <br />
            <button
            className="bg-gray-700 rounded-3xl text-white pl-7 pr-7 pt-3 pb-3 lg:text-[20px] hover:bg-pink-500"
            onClick={() => {
              navigate("/products");
            }}
          >
            Learn More
          </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
