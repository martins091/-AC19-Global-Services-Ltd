import { GraduationCap, Building2, Briefcase, Heart, DollarSign } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: GraduationCap,
      name: "Education",
      description: "Learning management and institutional systems",
      color: "blue",
    },
    {
      icon: Building2,
      name: "Government",
      description: "Public sector digital transformation solutions",
      color: "green",
    },
    {
      icon: Briefcase,
      name: "Corporate",
      description: "Enterprise software and business solutions",
      color: "purple",
    },
    {
      icon: Heart,
      name: "Healthcare",
      description: "Healthcare technology and patient management systems",
      color: "red",
    },
    {
      icon: DollarSign,
      name: "Financial Services",
      description: "Banking and financial technology solutions",
      color: "yellow",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      red: "bg-red-100 text-red-600",
      yellow: "bg-yellow-100 text-yellow-600",
    };
    return colorMap[color as keyof typeof colorMap] || "bg-primary/10 text-primary";
  };

  return (
    <section className="py-20 bg-background" data-testid="industries-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="industries-title">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="industries-subtitle">
            Delivering specialized technology solutions across diverse sectors
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-6 text-center shadow-sm card-hover border border-border"
                data-testid={`industry-card-${index}`}
              >
                <div className={`w-16 h-16 ${getColorClasses(industry.color)} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="w-10 h-10" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2" data-testid={`industry-name-${index}`}>
                  {industry.name}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`industry-description-${index}`}>
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex space-x-4 overflow-x-auto industries-scroll pb-4" data-testid="industries-mobile-scroll">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-72 bg-card rounded-lg p-6 shadow-sm border border-border"
                  data-testid={`industry-mobile-card-${index}`}
                >
                  <div className={`w-16 h-16 ${getColorClasses(industry.color)} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-10 h-10" />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2 text-center" data-testid={`industry-mobile-name-${index}`}>
                    {industry.name}
                  </h3>
                  <p className="text-sm text-muted-foreground text-center" data-testid={`industry-mobile-description-${index}`}>
                    {industry.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
