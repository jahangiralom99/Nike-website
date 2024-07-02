import { Link } from "react-router-dom";
import heroImage from "../../assets/pexels-mnzoutfits-1598505.jpg";
import { FiShoppingBag } from "react-icons/fi";
import AOS from "aos";
AOS.init();

const Hero = () => {
  return (
    <div className="">
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-5xl font-bold leading-tight mb-4"
          >
            The <span className="text-[#15d798]">Perfect</span> Pair Awaits
          </h1>
          <p
            data-aos="fade-down-left"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg text-gray-300 mb-8"
          >
            Redefine your daily walk with our expertly crafted shoes, offering
            exceptional{" "}
            <span className="font-bold text-[#15d798]">comfort and sleek</span>{" "}
            design.
          </p>
          <Link
            data-aos="flip-up"
            className="flex border mt-5 hover:text-[#15d798] hover:border-[#15d798] rounded-md border-white items-center gap-3  py-2  text-white px-6 text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Learn More
          </Link>
          <Link
            to="/shop"
            data-aos="flip-up"
            className="flex border mt-5 hover:text-[#15d798] hover:border-[#15d798] rounded-md border-white items-center gap-3  py-2  text-white px-6 text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <FiShoppingBag />
            Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
