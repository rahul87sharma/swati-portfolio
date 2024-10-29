import logo from "../assets/Logo7.png"; {/*Logo of the portfolio holder*/}
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-centre">
        <img className="mx-2 w-20" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://in.linkedin.com/in/swati-rampal-7038219b"><FaLinkedin /></a>
        <a href="#"><FaGithub /></a>
        <a href="#https://www.instagram.com/rampalswati95/?hl=en"><FaInstagram /></a>
        <a href="#"><FaSquareXTwitter /></a>
        </div>
    </nav>
  );
};

export default Navbar