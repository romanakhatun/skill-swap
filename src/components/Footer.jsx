import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import { NavLink } from "react-router"; // For internal routing
import Logo from "./Logo";

const Footer = () => {
  // Same links as your Navbar for consistency (Requirement 2)
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/all-course" },
    { name: "About us", path: "/about-us" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-base-100 text-base-content pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="footer border-b border-base-300 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-base-content/70 text-sm leading-relaxed max-w-xs">
              Empowering learners and educators to connect, share, and grow
              through skill-based exchange. Join the global movement.
            </p>
          </div>

          {/* Quick Links Column (Working Internal Links) */}
          <nav>
            <h6 className="footer-title text-primary opacity-100 font-bold mb-4">
              Quick Links
            </h6>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className="link link-hover text-base-content/80 hover:text-primary transition-colors"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </nav>

          {/* Legal/Company Column */}
          <nav>
            <h6 className="footer-title text-primary opacity-100 font-bold mb-4">
              Company
            </h6>
            <div className="flex flex-col gap-3">
              <NavLink
                to="/privacy"
                className="link link-hover text-base-content/80 hover:text-primary"
              >
                Privacy Policy
              </NavLink>
              <NavLink
                to="/terms"
                className="link link-hover text-base-content/80 hover:text-primary"
              >
                Terms of Service
              </NavLink>
              <NavLink
                to="/help"
                className="link link-hover text-base-content/80 hover:text-primary"
              >
                Help Center
              </NavLink>
            </div>
          </nav>

          {/* Contact & Social (Requirement 2: Social links included) */}
          <nav>
            <h6 className="footer-title text-primary opacity-100 font-bold mb-4">
              Connect With Us
            </h6>
            <div className="flex flex-col gap-3 mb-6">
              <a
                href="mailto:support@skillswap.com"
                className="link link-hover flex items-center gap-2 text-base-content/80 hover:text-primary"
              >
                <FaEnvelope className="text-secondary" />
                romana2004@gmail.com
              </a>
              <a
                href="tel:+15551234567"
                className="link link-hover flex items-center gap-2 text-base-content/80 hover:text-primary"
              >
                <FaPhone className="text-secondary" />
                +1 (555) 123-4567
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/romanakhatun_2004/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-sm btn-ghost bg-base-200 hover:bg-primary hover:text-white transition-all"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/romana2004"
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-sm btn-ghost bg-base-200 hover:bg-primary hover:text-white transition-all"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="https://linkedin.com/romana-khatun1"
                target="_blank"
                rel="noreferrer"
                className="btn btn-circle btn-sm btn-ghost bg-base-200 hover:bg-primary hover:text-white transition-all"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </nav>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-base-content/60 pt-8">
          <p>
            Copyright © {new Date().getFullYear()} -{" "}
            <span className="font-semibold text-base-content">
              SkillSwap Inc.
            </span>{" "}
            All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span>Built with ❤️ by</span>
            <a
              href="https://romana-khatun.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary hover:text-secondary transition-colors underline underline-offset-4 decoration-primary/30"
            >
              Romana Khatun
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
