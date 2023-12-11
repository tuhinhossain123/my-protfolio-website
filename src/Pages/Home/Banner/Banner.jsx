import banner from "../../../assets/banner.jpg";
import { FaDownload } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="flex md:justify-around flex-col-reverse md:flex-row items-center my-10 px-8 md:px-4 lg:px-0 ">
      <div className="space-y-4 my-3">
        <h2>
          <span className="text-4xl font-bold">Hi There 👋,</span>{" "}
          <span className="text-4xl font-bold text-sky-500">
            I'm Tofazzal Hossain
          </span>
        </h2>
        <h3 className="text-2xl font-medium">|| MERN Stake Developer</h3>
        <div className="flex gap-4">
          <button className=" font-semibold text-white p-3 rounded-lg flex items-center gap-2 bg-sky-500">
            Contact Me <FaPhone />
          </button>
          <button className="border font-semibold text-white  p-2 rounded-lg flex items-center gap-2">
            Download Resume <FaDownload />
          </button>
        </div>
      </div>
      <div className="">
        {" "}
        <img
          src={banner}
          alt=""
          className="w-[300px] h-[310px] rounded-full border-[5px] border-sky-500"
        />
      </div>
    </div>
  );
};

export default Banner;
