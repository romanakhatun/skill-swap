const Contact = () => {
  return (
    <div className="flex justify-center items-center mt-15">
      <div className="w-full bg-base-100 max-w-md rounded-xl p-10 border border-base-300">
        <h1 className="text-primary text-2xl font-semibold mb-4">Contact us</h1>
        <div className="border-b border-base-300 mb-6"></div>

        <form className="space-y-5 mr-8">
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
  );
};

export default Contact;
