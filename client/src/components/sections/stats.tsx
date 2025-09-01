export default function Stats() {
  const stats = [
    { value: "500+", label: "Projects Delivered" },
    { value: "50+", label: "Global Partners" },
    { value: "25+", label: "Industries Served" },
    { value: "10K+", label: "Professionals Trained" },
  ];

  return (
    <section className="py-16 bg-secondary" data-testid="stats-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} data-testid={`stat-item-${index}`}>
              <div className="text-4xl font-bold text-primary mb-2" data-testid={`stat-value-${index}`}>
                {stat.value}
              </div>
              <div className="text-secondary-foreground/80" data-testid={`stat-label-${index}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
