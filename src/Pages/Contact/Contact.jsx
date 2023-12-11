import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g82xtzr",
        "template_5j0lubs",
        form.current,
        "oCGOoFBnlThyDZ0sR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact" className="w-full md:w-[70%] mx-auto">
      <div className="hero-content flex-col">
        <div className="">
          <h1 className="text-3xl font-semibold text-white">Contact Me</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between  w-full bg-gray-500 rounded-lg ">
          <div className="py-14 px-3">
            <p className="text-white mb-8">
              If you would like to work together on a project, <br />
              Please contact me via the email below.
            </p>
            <a
              href="https://csetuhin55@gmail.com"
              className="flex items-center gap-2 text-lg text-white"
            >
              <MdOutlineEmail className="text-lg" />{" "}
              <span> csetuhin55@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/tofazzal-hossain-hossain/"
              className="flex items-center gap-2 text-lg text-white"
            >
              <FaLinkedin className="text-lg" /> <span> linkedin.com</span>
            </a>
            <a
              href="https://github.com/tuhinhossain123"
              className="flex items-center gap-2 text-lg text-white"
            >
              <FaGithubSquare className="text-lg" /> <span> github.com</span>
            </a>
          </div>
          <div className="card-body">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  name="name"
                  className="input bg-black text-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input bg-black text-white"
                  required
                />
              </div>
              <div className="form-control mx-auto text-center mb-2 ">
                <label className="label">
                  <span className="label-text text-white">Message</span>
                </label>
                <textarea
                  name=""
                  id=""
                  cols="5"
                  rows="4"
                  className="rounded-lg bg-black text-white p-2"
                  placeholder="message"
                ></textarea>
              </div>

              <div className="form-control mt-3">
                <button className="py-2 px-2 font-semibold rounded text-lg  bg-sky-500 text-white">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
