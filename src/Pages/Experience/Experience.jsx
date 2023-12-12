import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
const Experience = () => {
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-semibold text-center text-white mb-6">
        Experience
      </h2>
      <div className="flex flex-col md:flex-row justify-between gap-5 max-w-[1200px] mx-auto px-6 md:px-0">
        <div className="bg-gray-500 md:w-[50%]  rounded-lg p-3 space-y-2 drop-shadow-2xl">
          <h2 className="text-3xl text-center font-semibold text-sky-500">
            Front-End
          </h2>
          <div className="flex justify-center gap-5 text-lg font-medium text-white space-y-1">
            <FaHtml5 className="text-3xl" />
            <FaCss3Alt className="text-3xl" />
            <SiTailwindcss className="text-3xl" />
            <IoLogoJavascript className="text-3xl" />
            <FaReact className="text-3xl" />
            <IoLogoFirebase className="text-3xl" />
          </div>
          <h2 className="text-center text-white">
            I'm a front end developer user can create web application as per
            requirement
          </h2>
        </div>

        <div className="bg-gray-500 md:w-[50%]  rounded-lg  space-y-2 p-3 drop-shadow-2xl">
          <h2 className="text-3xl text-center font-semibold text-sky-500">
            Backend
          </h2>
          <div className="flex justify-center items-center gap-2 text-lg font-medium text-white">
          <DiMongodb className="text-3xl pt-2" />
          <p className="text-3xl">ex</p>
          </div>
          <p className="text-center text-white">Basic</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
