import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";

const Skills = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center text-white mb-7">
        My Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 max-w-[1200px] mx-auto px-6 md:px-6 lg:px-0">
        <div className="border p-2 rounded  shadow-2xl">
          <FaHtml5 className="text-8xl mx-auto" />
          <div className="text-lg font-medium text-center text-white py-2">
            HTML
          </div>
        </div>
        <div className="border p-2 rounded shadow-2xl">
          <FaCss3Alt className="text-8xl mx-auto" />
          <div className="text-lg font-medium text-center text-white py-2">
            Css
          </div>
        </div>
        <div className="border p-2 rounded shadow-2xl">
          <SiTailwindcss className="text-8xl mx-auto" />
          <div className="text-lg font-medium text-center text-white py-2">
            Tailwind
          </div>
        </div>
        <div className="border p-2 rounded shadow-2xl">
          <IoLogoJavascript className="text-8xl mx-auto" />
          <div className="text-lg font-medium text-center text-white py-2">
            Javascript
          </div>
        </div>
        <div className="border p-2 rounded shadow-2xl">
          <FaReact className="text-8xl mx-auto" />
          <div className="text-lg font-medium text-center text-white py-2">
            React
          </div>
        </div>
        <div className="border p-2 rounded shadow-2xl">
          <IoLogoFirebase className="text-8xl mx-auto" />
          <div className="text-lg font-medium text-center text-white py-2">
            Firebase
          </div>
        </div>
        <div className="border p-2 rounded  shadow-2xl">
          <p className="text-4xl md:text-5xl text-center pt-8">Node.js</p>
          <div className="text-lg font-medium text-center text-white py-2"></div>
        </div>
        <div className="border  rounded shadow-2xl">
          <p className="text-8xl text-center">ex</p>
          <div className="text-lg font-medium text-center text-white py-2">
            Express.js
          </div>
        </div>
        <div className="border p-2 rounded shadow-2xl">
          <DiMongodb className="text-8xl mx-auto" />
          <div className="text-lg font-medium text-center text-white py-2">
            MongoDB
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
