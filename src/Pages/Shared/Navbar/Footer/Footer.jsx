const Footer = () => {
  return (
    <div className="flex justify-evenly items-center flex-col-reverse md:flex-row   p-4  md:mt-16  ml-10 md:ml-0">
      <div>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div className="flex gap-3">
        <a className="text-lg font-bold underline" href="https://www.linkedin.com/in/tofazzal-hossain-hossain/">
          Linkedin
        </a>
        <a className="text-lg font-bold underline" href="https://github.com/tuhinhossain123">Github</a>
        <a className="text-lg font-bold underline" href="https://www.facebook.com/">Facebook</a>
      </div>
    </div>
  );
};

export default Footer;
