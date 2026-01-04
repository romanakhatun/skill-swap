const StatsSection = () => {
  return (
    <div className="my-16 bg-base-200 rounded-2xl p-8 border border-base-300">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold text-primary mb-2">15K+</div>
          <div className="text-base-content/70 font-medium">
            Active Students
          </div>
        </div>
        <div className="flex flex-col items-center border-y md:border-y-0 md:border-x border-base-300 py-6 md:py-0">
          <div className="text-4xl font-bold text-secondary mb-2">200+</div>
          <div className="text-base-content/70 font-medium">Expert Mentors</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl font-bold text-accent mb-2">98%</div>
          <div className="text-base-content/70 font-medium">Success Rate</div>
        </div>
      </div>
    </div>
  );
};
export default StatsSection;
