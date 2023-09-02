import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function SocialAddresses() {
  return (
    <div className="social_layout">
      <div className="social_addr_container">
        <a href="https://www.facebook.com/genxintel" target="_blank">
          <FaFacebookF size={20} color="white"/>
        </a>
        <a href="https://www.instagram.com/genxintel/" target="_blank" className="social_Links">
          <FaInstagram size={20} color="white"/>
        </a>
        <a href="https://twitter.com/genxintel" target="_blank" className="social_Links">
          <FaTwitter size={20} color="white"/>
        </a>
        <a href="https://www.youtube.com/@GenXintel" target="_blank" className="social_Links">
          <FaYoutube size={20} color="white"/>
        </a>
      </div>
    </div>
  );
}
