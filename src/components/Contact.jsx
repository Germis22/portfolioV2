import { AiFillPhone } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BiDownload } from "react-icons/bi";

const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl py-1">Contact</h1>
      <div className="md:flex justify-center gap-20 pt-20 ">
        <div className="text-center pb-10">
          <AiFillPhone className="inline-block text-2xl mb-2 " />
          <h2 className="text-xl font-semibold">Phone</h2>
          <p className="text-lg">+591 76694369</p>
        </div>
        <div className="text-center pb-10">
          <IoLocationSharp className="inline-block text-2xl mb-2" />
          <h2 className="text-xl font-semibold">Location</h2>
          <p className="text-lg">Santa Cruz, Bolivia</p>
        </div>
        <div className="text-center pb-10">
          <MdEmail className="inline-block text-2xl mb-2" />
          <h2 className="text-xl font-semibold">Email</h2>
          <p className="text-lg">Golpa22@gmail.com</p>
        </div>
        <div className="text-center pb-10 grid gap-2 ">
          <h2 className="text-xl font-semibold">Resume</h2>
          <div className="grid md:flex justify-center gap-2 ">
            <a
              href="https://drive.google.com/file/d/1oK1FfkHE7pebJc06EOm0R8vFSGxHyswv/view?usp=sharing"
              download="EN-CV-GermanPaz.pdf"
            >
              <button className="btn inline-block bg-base-200 pt-2 pb-1 px-4 rounded-xl text-lg">
                English
                <BiDownload className="inline-block text-2xl ml-2 mb-2" />
              </button>
            </a>
            <a
              href="https://drive.google.com/file/d/1PPdlo6uK2H63CBWtZ6mLND0aj-YAvdYi/view?usp=sharing"
              download="CV-GermanPaz.pdf"
            >
              <button className="btn inline-block bg-base-200 pt-2 pb-1 px-4 rounded-xl text-lg">
                Español
                <BiDownload className="inline-block text-2xl ml-2 mb-2" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
