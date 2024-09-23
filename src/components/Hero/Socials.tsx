import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="flex gap-10">
        <a href="">
            <FaFacebookF size={18} />
        </a>
        <a href="">
            <FaInstagram size={20} />
        </a>
        <a href="">
            <FaXTwitter size={20} />
        </a>
    </div>
  )
}

export default Socials