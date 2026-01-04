export const Testimonials = () => {
  const reviews = [
    {
      name: "Alex Rivera",
      role: "UI Designer",
      text: "The skills I learned here helped me land a job at a top tech firm. Highly recommended!",
    },
    {
      name: "Sarah Chen",
      role: "Developer",
      text: "Comprehensive courses and great mentor support. The dark mode UI is just the cherry on top!",
    },
  ];

  return (
    <div className="my-20">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-base-content text-center">
          What Our Students Say
        </h2>
        <div className="line mx-auto mt-2"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-shadow"
          >
            <p className="italic text-base-content/80 mb-4">"{r.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                {r.name[0]}
              </div>
              <div>
                <h4 className="font-bold">{r.name}</h4>
                <p className="text-xs text-base-content/50">{r.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
