import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content pt-10">
      <div className="container mx-auto px-4">
        <div className="footer border-b border-neutral-content/10 pb-8 grid grid-cols-3">
          <nav>
            <h6 className="footer-title text-primary-accent">
              Skill Categories
            </h6>
            <a className="link link-hover">Music & Arts</a>
            <a className="link link-hover">Tech & Coding</a>
            <a className="link link-hover">Language Exchange</a>
            <a className="link link-hover">Health & Wellness</a>
          </nav>

          <nav>
            <h6 className="footer-title text-primary-accent">Contact Info</h6>
            <a className="link link-hover flex items-center">
              <FaEnvelope className="mr-2" />
              support@skillswap.com
            </a>
            <a className="link link-hover flex items-center">
              <FaPhone className="mr-2" />
              +1 (555) 123-4567
            </a>
            <a className="link link-hover">Local Area: New York, USA</a>
          </nav>

          <nav>
            <h6 className="footer-title text-primary-accent">Company</h6>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Terms of Service</a>
            <a className="link link-hover">Cookie Policy</a>
          </nav>
        </div>

        <div className="footer py-6 border-t border-neutral-content/10 md:flex-row flex-col-reverse justify-between items-center">
          <aside className="text-sm opacity-80 mt-4 md:mt-0">
            <p>
              Copyright © {new Date().getFullYear()} - SkillSwap Inc. All rights
              reserved.
            </p>
          </aside>

          <nav className="grid grid-flow-col gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary-accent transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary-accent transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary-accent transition-colors"
            >
              <FaInstagram />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
