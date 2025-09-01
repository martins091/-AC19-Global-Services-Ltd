import { Search, BarChart, Users, BookOpen, Settings } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Search,
      title: "Software Sourcing",
      description: "Strategic identification and procurement of software solutions that align with your business objectives and technical requirements.",
    },
    {
      icon: BarChart,
      title: "Critical Needs Assessment",
      description: "In-depth analysis of your current technology landscape to identify gaps and optimization opportunities.",
    },
    {
      icon: Users,
      title: "Third-Party Engagement",
      description: "Seamless coordination with vendors and partners to ensure successful project delivery and integration.",
    },
    {
      icon: BookOpen,
      title: "Training & Development",
      description: "Comprehensive training programs to maximize your team's potential and technology adoption success.",
    },
    {
      icon: Settings,
      title: "Support & Maintenance",
      description: "Ongoing technical support and maintenance services to keep your systems running at peak performance.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30" data-testid="services-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="services-title">
            Our Core Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="services-subtitle">
            Comprehensive technology services designed to accelerate your digital transformation journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`bg-card rounded-lg p-8 shadow-sm card-hover border border-border ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                data-testid={`service-card-${index}`}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4" data-testid={`service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6" data-testid={`service-description-${index}`}>
                  {service.description}
                </p>
                <a
                  href="#"
                  className="text-primary hover:text-primary/80 font-medium btn-transition"
                  data-testid={`service-link-${index}`}
                >
                  Learn More →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
