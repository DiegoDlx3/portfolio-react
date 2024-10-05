import logo from "../assets/kevinRushLogo.png";
import { FaBehance }  from "react-icons/fa";
import { FaGithub }  from "react-icons/fa";
import { FaLinkedin }  from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.behance.net/marcosdiiego" target="blank"><FaBehance /></a>
        <a href="https://github.com/marcosvf132" target="blank"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/marcos-diego-45028317a/" target="blank"><FaLinkedin /></a>
        </div>

    </nav>
    
  );
};

export default Navbar;