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
            const animationDelay = index % 3 === 0 ? "fade-in-up" : index % 3 === 1 ? "fade-in-up-delay-1" : "fade-in-up-delay-2";
            return (
              <div
                key={index}
                className={`bg-card rounded-xl p-10 shadow-lg card-hover border border-border/50 backdrop-blur-sm ${animationDelay} ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                data-testid={`service-card-${index}`}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-8 floating-animation">
                  <IconComponent className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-6" data-testid={`service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed" data-testid={`service-description-${index}`}>
                  {service.description}
                </p>
                <a
                  href="#services"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-semibold btn-transition group"
                  data-testid={`service-link-${index}`}
                >
                  <span>Learn More</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
