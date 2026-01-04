import React from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen py-12 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-base-content mb-4">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-base-content/70 max-w-xl mx-auto">
            Have questions about our courses or need technical support? We're
            here to help you 24/7.
          </p>
          <div className="line mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="bg-base-200 p-8 rounded-3xl border border-base-300">
              <h2 className="text-2xl font-bold mb-6 text-base-content">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <HiMail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-base-content/60">Email us at</p>
                    <p className="font-semibold text-base-content">
                      support@learninghub.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
                    <HiPhone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-base-content/60">Call us</p>
                    <p className="font-semibold text-base-content">
                      +880 1234 567 890
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                    <HiLocationMarker size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-base-content/60">
                      Visit our office
                    </p>
                    <p className="font-semibold text-base-content">
                      123 Learning Way, Dhaka, BD
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links (Requirement 2) */}
              <div className="mt-10">
                <p className="text-sm font-bold text-base-content uppercase tracking-widest mb-4">
                  Follow Us
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="btn btn-circle btn-sm btn-outline btn-primary"
                  >
                    <FaFacebook size={18} />
                  </a>
                  <a
                    href="#"
                    className="btn btn-circle btn-sm btn-outline btn-primary"
                  >
                    <FaTwitter size={18} />
                  </a>
                  <a
                    href="#"
                    className="btn btn-circle btn-sm btn-outline btn-primary"
                  >
                    <FaLinkedin size={18} />
                  </a>
                  <a
                    href="#"
                    className="btn btn-circle btn-sm btn-outline btn-primary"
                  >
                    <FaGithub size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Support Hours Card */}
            <div className="bg-gradient-to-br from-primary to-primary-accent p-8 rounded-3xl text-white shadow-xl">
              <h3 className="text-xl font-bold mb-2">Student Support Hours</h3>
              <p className="opacity-90">Monday - Friday: 9am to 6pm</p>
              <p className="opacity-90">Saturday: 10am to 2pm</p>
            </div>
          </div>

          {/*  The Form */}
          <div className="bg-base-100 p-8 md:p-10 rounded-3xl border border-base-300 shadow-2xl order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="space-y-5 mr-8">
              {/* Name Fields */}
              <div>
                <label className="label text-sm font-semibold">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="input input-bordered w-full bg-base-200"
                  placeholder="Enter your name"
                />
              </div>
              {/* Email Field */}
              <div>
                <label className="label text-primary-accent font-semibold text-sm">
                  Email address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="input input-bordered w-full bg-base-200"
                  placeholder="Enter your email address"
                />
              </div>
              {/* Subject Field */}
              <div>
                <label className="label text-primary-accent font-semibold text-sm">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="input input-bordered w-full bg-base-200"
                  placeholder="Subject"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label className="label text-primary-accent font-semibold text-sm">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  type="text"
                  name="message"
                  required
                  className="textarea input-bordered w-full bg-base-200"
                  placeholder="Type a message"
                />
              </div>

              <button className="btn btn-primary w-full shadow-none border-0">
                Send your Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
