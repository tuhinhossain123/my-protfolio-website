const Education = () => {
  return (
    <div id="/education" className="my-10 mb-4">
      <h2 className="text-3xl font-semibold text-center text-white mb-6">
        Education
      </h2>
      <div className="flex flex-col md:flex-row justify-center md:h-[50vh]">
        <div className="md:w-[30%] flex items-start  justify-center">
          <div  data-aos="fade-up-right" className=" border  p-2 rounded-lg py-6 space-y-2 mb-4 md:mb-0 md:mr-4 lg:mr-0">
            <h2 className="text-2xl font-semibold text-sky-500 text-center">
              Diploma in CSE
            </h2>
            <h3 className="text-center font-medium text-lg text-white">
              Session (19-20)
            </h3>
            <p className="text-center font-semibold text-xl text-white">
              chittagong polytechnic institute
            </p>
          </div>
        </div>
        <div className="md:w-[30%] flex items-end justify-center md:border-l-2 md:pl-4 ml-0 border-l-0 border-gray-400">
          <div data-aos="fade-up-left" className="border px-2 rounded-lg py-6 space-y-2 ">
            <h2 className="text-2xl font-semibold text-sky-500 text-center">
              Secondary School Certificate
            </h2>
            <h3 className="text-center font-medium text-lg text-white">
              Pass (2019)
            </h3>
            <p className="text-center font-semibold text-xl text-white">
              Cumilla Board
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
