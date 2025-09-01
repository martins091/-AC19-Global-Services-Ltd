import { Lightbulb, Globe, BookOpen, Building } from "lucide-react";

export default function KeyHighlights() {
  const highlights = [
    {
      icon: Lightbulb,
      title: "Needs Assessment & Solution Design",
      description: "Comprehensive analysis and custom solution architecture tailored to your specific requirements.",
    },
    {
      icon: Globe,
      title: "Global Technology Partnerships",
      description: "Leveraging worldwide network of technology partners to deliver cutting-edge solutions.",
    },
    {
      icon: BookOpen,
      title: "Proven Training & Digital Transformation",
      description: "Expert training programs and transformation strategies that ensure successful adoption.",
    },
    {
      icon: Building,
      title: "Support for Corporates & Public Agencies",
      description: "Dedicated support services for both private sector and government organizations.",
    },
  ];

  return (
    <section className="py-20 bg-background" data-testid="key-highlights-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="highlights-title">
            Why Choose AC19 Global Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="highlights-subtitle">
            Delivering comprehensive technology solutions with proven expertise and global partnerships
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-6 shadow-sm card-hover border border-border"
                data-testid={`highlight-card-${index}`}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3" data-testid={`highlight-title-${index}`}>
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`highlight-description-${index}`}>
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
