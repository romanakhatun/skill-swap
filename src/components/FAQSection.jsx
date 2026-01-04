const FAQSection = () => {
  const faqs = [
    {
      q: "How do I get my certificate?",
      a: "Once you complete 100% of the course content and pass the final assessment, your certificate will be available in your dashboard.",
    },
    {
      q: "Can I access the courses offline?",
      a: "Yes, our mobile app allows you to download lessons and watch them anytime, anywhere without an internet connection.",
    },
    {
      q: "Is there a refund policy?",
      a: "We offer a 30-day money-back guarantee if you are not satisfied with the course content.",
    },
  ];

  return (
    <div className="my-20">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-base-content text-center">
          Frequently Asked Questions
        </h2>
        <div className="line mx-auto mt-2"></div>
      </div>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="collapse collapse-plus bg-base-200 border border-base-300"
          >
            <input
              type="radio"
              name="my-accordion-3"
              defaultChecked={index === 0}
            />
            <div className="collapse-title text-xl font-medium text-primary">
              {faq.q}
            </div>
            <div className="collapse-content text-base-content/80">
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FAQSection;
