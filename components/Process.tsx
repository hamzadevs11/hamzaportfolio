const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description: "Understanding requirements, defining the architecture, and planning the project timeline to ensure a solid foundation.",
  },
  {
    number: "02",
    title: "Development & Iteration",
    description: "Writing clean, efficient code using modern frameworks. Regular updates and iterative feedback loops to align with goals.",
  },
  {
    number: "03",
    title: "Testing & Deployment",
    description: "Rigorous testing across devices, performance optimization, and seamless deployment to production environments.",
  },
];

export default function Process() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-surface/50">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">The Process</h2>
        <p className="text-muted max-w-2xl">
          A systematic approach from concept to production-ready application.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative p-8 rounded-2xl bg-surface/10 border border-surface/50">
            <span className="text-6xl font-black text-surface/50 absolute top-4 right-6 pointer-events-none">
              {step.number}
            </span>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-text mb-4 mt-8">{step.title}</h3>
              <p className="text-muted leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
