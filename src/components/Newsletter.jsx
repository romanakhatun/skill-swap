import { useState } from "react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <section className="my-20 bg-primary rounded-3xl p-8 md:p-16 text-center text-primary-content relative overflow-hidden">
      {/* Decorative circles for professional UI */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay Ahead of the Curve
        </h2>
        <p className="mb-8 opacity-90">
          Subscribe to our newsletter for exclusive discounts, new course
          alerts, and career tips.
        </p>

        {status === "success" ? (
          <div className="alert alert-success bg-white text-success border-none animate-bounce">
            <span>🎉 Thank you! You've been subscribed.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered flex-1 text-base-content rounded-xl focus:outline-secondary"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className={`btn btn-secondary px-8 rounded-xl ${
                status === "loading" ? "loading" : ""
              }`}
              disabled={status === "loading"}
            >
              {status === "loading" ? "Joining..." : "Subscribe Now"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
