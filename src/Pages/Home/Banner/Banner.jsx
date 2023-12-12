import banner from "../../../assets/banner.jpg";
import { FaDownload } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import resume from "../../../assets/TUFAN PROJECT.pdf";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="flex md:justify-around flex-col-reverse md:flex-row items-center my-10 px-10 md:px-4 lg:px-0 ">
      <div className="space-y-4 my-3 ">
        <h2>
          <span className="text-4xl font-bold">Hi There 👋,</span>{" "}
          <span className="text-4xl font-bold text-sky-500">
            I'm Tofazzal Hossain
          </span>
        </h2>
        <h3 className="text-2xl font-medium">
          <TypeAnimation
            sequence={[
              "Welcome To My Protfolio",
              1000,
              "|| Mern Stack Developer",
              1000,
              "Thanks For Visite",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h3>
        <div className="flex gap-4">
          <Link
            to="/contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="btn font-semibold text-sm md:text-lg  text-white p-3 rounded-lg flex items-center gap-2 bg-sky-500"
          >
            Contact Me <FaPhone />
          </Link>
          <a
            href={resume}
            download
            className="border text-sm md:text-lg font-semibold text-white  p-2 rounded-lg flex items-center gap-2"
          >
            Download Resume <FaDownload />
          </a>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="800"
      >
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
