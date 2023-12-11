const Footer = () => {
  return (
    <div className="flex justify-evenly max-w-[1200px] mx-auto p-4 mt-16">
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
