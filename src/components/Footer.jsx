import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="text-primary-accent pt-10">
      <div className="footer border-b border-base-300 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="text-sm text-gray-500 max-w-xs">
            Learn. Teach. Grow — Together on SkillSwap.
          </p>
        </div>

        {/* Privacy Policy */}
        <nav>
          <h6 className="footer-title text-primary-accent">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>

        {/* Contact Info */}
        <nav>
          <h6 className="footer-title text-primary-accent">Contact Info</h6>
          <a className="link link-hover flex items-center">
            <FaEnvelope className="mr-2" />
            romana2004@gmail.com
          </a>
          <a className="link link-hover flex items-center">
            <FaPhone className="mr-2" />
            +1 (555) 123-4567
          </a>
          <a className="link link-hover">Local Area: New York, USA</a>
        </nav>

        {/* Social Links */}
        <nav>
          <h6 className="footer-title text-primary-accent">Social Links</h6>
          <div className="grid grid-flow-col gap-3">
            <a href="https://twitter.com" className="text-2xl text-[#e79c4e]">
              <FaTwitter />
            </a>
            <a href="https://facebook.com" className="text-2xl text-[#e79c4e]">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" className="text-2xl text-[#e79c4e]">
              <FaInstagram />
            </a>
          </div>
        </nav>
      </div>
      <div className="text-center">
        <p className="text-sm opacity-80 mt-6">
          Copyright © {new Date().getFullYear()} - SkillSwap Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
