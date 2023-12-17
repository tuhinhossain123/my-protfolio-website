import img1 from "../../assets/im1.png";
import img2 from "../../assets/newspaper.png";
import img3 from "../../assets/brand.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
const Projects = () => {
  return (
    <div id="/projects" className="my-10">
      <h2 className="text-3xl font-semibold text-center text-white mb-6">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
        <div
          data-aos="zoom-in-up"
          className="rounded-b-lg mx-6  shadow-xl bg-gray-500"
        >
          <img src={img1} alt="" className="rounded-t-lg w-full" />
          <div className="p-4 space-y-4">
            <div className="">
              <h2 className="text-3xl font-semibold text-white mb-2">
                offline service sharing web application.
              </h2>
              <p className="text-white">
                The offline service sharing web site is a tourist website, where
                tourists are taken to various places. It is a complete offline
                service system.
              </p>
            </div>
            <div className="flex gap-3 px-2 ">
              <a
                className="bg-sky-500 py-1 px-3 text-white rounded-lg flex items-center gap-2"
                href="https://local-tours-and-guide.web.app/"
              >
                Visit <MdOutlineArrowOutward />
              </a>
              <a
                className="bg-sky-500 py-1 px-3 text-white rounded-lg flex items-center gap-2"
                href="https://github.com/Porgramming-Hero-web-course/b8a11-client-side-tuhinhossain123"
              >
                Client <FaGithub />
              </a>
              <a
                className="bg-sky-500 py-1 px-3 text-white rounded-lg flex items-center gap-2"
                href="https://github.com/Porgramming-Hero-web-course/b8a11-server-side-tuhinhossain123"
              >
                Server <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in-up"
          className="rounded-b-lg mx-6  shadow-xl bg-gray-500"
        >
          <img src={img2} alt="" className="rounded-t-lg w-full" />
          <div className="p-4 space-y-4">
            <div className="">
              <h2 className="text-3xl font-semibold text-white mb-2">
                NewsPaper
              </h2>
              <p className="text-white">
                Newspaper project is done with React. Normal user can read news
                here. If user posts any news, it must be added to admin,
                otherwise it will not be added. News paper website can be used
                for free for 1 week. From then on, user can pay to read news.
              </p>
            </div>
            <div className="flex gap-3 px-2 ">
              <a
                className="bg-sky-500 py-1 px-3 text-white rounded-lg flex items-center gap-2"
                href="https://newspaper-64536.web.app/"
              >
                Visit <MdOutlineArrowOutward />
              </a>
              <a
                className="bg-sky-500 py-1 px-3 text-white rounded-lg flex items-center gap-2"
                href="https://github.com/programming-hero-web-course1/b8a12-client-side-tuhinhossain123"
              >
                Client <FaGithub />
              </a>
              <a
                className="bg-sky-500 py-1 px-3 text-white rounded-lg flex items-center gap-2"
                href="https://github.com/programming-hero-web-course1/b8a12-server-side-tuhinhossain123"
              >
                Server <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          className="rounded-b-lg mx-6 shadow-xl bg-gray-500"
        >
          <img src={img3} alt="" className="rounded-t-lg w-full" />
          <div className="p-4 space-y-4">
            <div className="">
              <h2 className="text-3xl font-semibold text-white mb-2">
                Brand-shop
              </h2>
              <p className="text-white">
                The offline service sharing web site is a tourist website, where
                tourists are taken to various places. It is a complete offline
                service system.
              </p>
            </div>
            <div className="flex gap-3 px-2 ">
              <a
                className="bg-sky-500 py-1 px-3 text-white rounded-lg flex items-center gap-2"
                href="https://fir-recap-6affb.web.app/"
              >
                Visit <MdOutlineArrowOutward />
              </a>
              <a
                className="bg-sky-500 py-1 px-3 text-white rounded-lg flex items-center gap-2"
                href="https://github.com/programming-hero-web-course-4/b8a10-brandshop-client-side-tuhinhossain123"
              >
                Client <FaGithub />
              </a>
              <a
                className="bg-sky-500 py-1 px-3 text-white rounded-lg flex items-center gap-2"
                href="https://github.com/programming-hero-web-course-4/b8a10-brandshop-server-side-tuhinhossain123"
              >
                Server <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
