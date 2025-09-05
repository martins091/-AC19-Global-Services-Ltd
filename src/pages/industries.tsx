import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { GraduationCap, Building2, Briefcase, Heart, DollarSign, CheckCircle, ArrowRight, Users, Globe, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Industries() {
  const industries = [
    {
      icon: GraduationCap,
      name: "Education",
      description: "Transforming learning environments with cutting-edge educational technology solutions",
      color: "blue",
      details: {
        overview: "We partner with educational institutions to modernize learning infrastructure, improve student outcomes, and streamline administrative processes through innovative technology solutions.",
        solutions: [
          "Learning Management Systems (LMS) implementation and customization",
          "Student Information Systems (SIS) for comprehensive record management",
          "Virtual classroom platforms and e-learning solutions",
          "Educational mobile applications and digital learning tools",
          "Campus-wide technology infrastructure and Wi-Fi solutions",
          "Data analytics platforms for student performance tracking"
        ],
        benefits: [
          "Enhanced student engagement and learning outcomes",
          "Streamlined administrative processes and reduced paperwork",
          "Improved communication between students, teachers, and parents",
          "Cost-effective technology solutions tailored to educational budgets",
          "Scalable platforms that grow with your institution"
        ],
        clientTypes: ["Universities", "Colleges", "K-12 Schools", "Training Institutes", "Online Education Providers"]
      }
    },
    {
      icon: Building2,
      name: "Government",
      description: "Enabling digital transformation in public sector for better citizen services",
      color: "green",
      details: {
        overview: "We help government agencies modernize their operations, improve service delivery, and enhance transparency through comprehensive digital transformation initiatives.",
        solutions: [
          "E-governance platforms and citizen service portals",
          "Document management and workflow automation systems",
          "Public sector ERP and financial management systems",
          "Digital identity and authentication solutions",
          "Open data platforms and transparency initiatives",
          "Inter-agency communication and collaboration tools"
        ],
        benefits: [
          "Improved citizen satisfaction through faster service delivery",
          "Enhanced transparency and accountability in operations",
          "Reduced operational costs and improved efficiency",
          "Better data-driven decision making capabilities",
          "Streamlined inter-agency coordination and communication"
        ],
        clientTypes: ["Federal Ministries", "State Governments", "Local Government Areas", "Public Agencies", "Parastatals"]
      }
    },
    {
      icon: Briefcase,
      name: "Corporate Enterprise",
      description: "Empowering businesses with enterprise-grade technology solutions for growth",
      color: "purple",
      details: {
        overview: "We provide comprehensive technology solutions that help businesses optimize operations, improve productivity, and accelerate growth through digital transformation.",
        solutions: [
          "Enterprise Resource Planning (ERP) systems implementation",
          "Customer Relationship Management (CRM) platforms",
          "Business Intelligence and data analytics solutions",
          "Supply chain management and logistics optimization",
          "Human Resources Information Systems (HRIS)",
          "Financial management and accounting software solutions"
        ],
        benefits: [
          "Increased operational efficiency and productivity",
          "Better customer relationship management and retention",
          "Data-driven insights for strategic decision making",
          "Improved financial visibility and control",
          "Enhanced collaboration and communication across teams"
        ],
        clientTypes: ["Multinational Corporations", "SMEs", "Startups", "Manufacturing Companies", "Service Organizations"]
      }
    },
    {
      icon: Heart,
      name: "Healthcare",
      description: "Advancing healthcare delivery through innovative technology solutions",
      color: "red",
      details: {
        overview: "We help healthcare providers improve patient care, streamline operations, and ensure compliance through specialized healthcare technology solutions.",
        solutions: [
          "Electronic Health Records (EHR) and Electronic Medical Records (EMR)",
          "Hospital Management Information Systems (HMIS)",
          "Telemedicine and remote patient monitoring platforms",
          "Medical imaging and diagnostic systems integration",
          "Pharmacy management and inventory tracking systems",
          "Healthcare compliance and reporting solutions"
        ],
        benefits: [
          "Improved patient care quality and safety",
          "Enhanced clinical decision-making through better data access",
          "Streamlined administrative processes and reduced costs",
          "Better regulatory compliance and reporting capabilities",
          "Improved patient engagement and satisfaction"
        ],
        clientTypes: ["Hospitals", "Clinics", "Healthcare Networks", "Diagnostic Centers", "Pharmaceutical Companies"]
      }
    },
    {
      icon: DollarSign,
      name: "Financial Services",
      description: "Modernizing financial institutions with secure and compliant technology solutions",
      color: "yellow",
      details: {
        overview: "We provide cutting-edge fintech solutions that help financial institutions improve customer experience, ensure regulatory compliance, and drive innovation.",
        solutions: [
          "Core banking systems and digital banking platforms",
          "Mobile banking and digital wallet solutions",
          "Risk management and compliance monitoring systems",
          "Payment processing and gateway integration",
          "Blockchain and cryptocurrency platforms",
          "Insurance management and claims processing systems"
        ],
        benefits: [
          "Enhanced customer experience through digital channels",
          "Improved regulatory compliance and risk management",
          "Increased operational efficiency and cost reduction",
          "Better fraud detection and security measures",
          "Faster time-to-market for new financial products"
        ],
        clientTypes: ["Commercial Banks", "Microfinance Institutions", "Insurance Companies", "Investment Firms", "Fintech Startups"]
      }
    },
    {
      icon: Globe,
      name: "Non-Profit Organizations",
      description: "Supporting social impact through technology-driven solutions",
      color: "green",
      details: {
        overview: "We help non-profit organizations maximize their impact through cost-effective technology solutions that improve program delivery and stakeholder engagement.",
        solutions: [
          "Donor management and fundraising platforms",
          "Volunteer coordination and management systems",
          "Program tracking and impact measurement tools",
          "Grant management and reporting systems",
          "Member engagement and communication platforms",
          "Financial management and transparency solutions"
        ],
        benefits: [
          "Increased fundraising efficiency and donor retention",
          "Better program outcomes measurement and reporting",
          "Improved volunteer engagement and coordination",
          "Enhanced transparency and accountability to stakeholders",
          "Cost-effective solutions tailored to non-profit budgets"
        ],
        clientTypes: ["NGOs", "Foundations", "Religious Organizations", "Community Groups", "International Development Organizations"]
      }
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-500/20 to-blue-600/10 border-blue-200",
      green: "from-green-500/20 to-green-600/10 border-green-200",
      purple: "from-purple-500/20 to-purple-600/10 border-purple-200",
      red: "from-red-500/20 to-red-600/10 border-red-200",
      yellow: "from-yellow-500/20 to-yellow-600/10 border-yellow-200",
    };
    return colorMap[color as keyof typeof colorMap] || "from-primary/20 to-primary/10 border-primary/20";
  };

  const getIconColorClass = (color: string) => {
    const colorMap = {
      blue: "text-blue-600",
      green: "text-green-600", 
      purple: "text-purple-600",
      red: "text-red-600",
      yellow: "text-yellow-600",
    };
    return colorMap[color as keyof typeof colorMap] || "text-primary";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/10" data-testid="industries-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 fade-in-up" data-testid="industries-title">
                Industry-Specific <span className="text-shimmer">Technology Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed fade-in-up-delay-1" data-testid="industries-subtitle">
                Deep industry expertise combined with cutting-edge technology to deliver solutions 
                that address your sector's unique challenges and opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up-delay-2">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4" data-testid="button-discuss-needs">
                  Discuss Your Industry Needs
                </Button>
                <Button variant="outline" size="lg" className="border border-border text-foreground hover:bg-muted px-8 py-4" data-testid="button-view-case-studies">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Overview */}
        <section className="py-20 bg-background" data-testid="industries-overview">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 fade-in-up" data-testid="overview-title">
                Industries We Serve
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up-delay-1" data-testid="overview-subtitle">
                Comprehensive technology solutions tailored to the unique needs of diverse sectors
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                const animationDelay = index % 3 === 0 ? "fade-in-up" : index % 3 === 1 ? "fade-in-up-delay-1" : "fade-in-up-delay-2";
                return (
                  <div key={index} className={`bg-card rounded-xl p-8 shadow-lg card-hover border border-border/50 ${animationDelay}`} data-testid={`industry-overview-card-${index}`}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(industry.color)} rounded-xl flex items-center justify-center mb-6 floating-animation`}>
                      <IconComponent className={`w-10 h-10 ${getIconColorClass(industry.color)}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-4" data-testid={`industry-name-${index}`}>
                      {industry.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6" data-testid={`industry-description-${index}`}>
                      {industry.description}
                    </p>
                    <a href={`#${industry.name.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center text-primary hover:text-primary/80 font-semibold btn-transition group" data-testid={`industry-link-${index}`}>
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Detailed Industry Sections */}
        {industries.map((industry, index) => {
          const IconComponent = industry.icon;
          const isEven = index % 2 === 0;
          return (
            <section key={index} id={industry.name.toLowerCase().replace(/\s+/g, '-')} className={`py-20 ${isEven ? 'bg-muted/30' : 'bg-background'}`} data-testid={`industry-detail-${index}`}>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={`${isEven ? '' : 'lg:order-2'} fade-in-up`}>
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(industry.color)} rounded-xl flex items-center justify-center mr-4 floating-animation`}>
                        <IconComponent className={`w-10 h-10 ${getIconColorClass(industry.color)}`} />
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-foreground" data-testid={`detail-title-${index}`}>
                        {industry.name}
                      </h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid={`detail-overview-${index}`}>
                      {industry.details.overview}
                    </p>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground group" data-testid={`detail-cta-${index}`}>
                      Get Industry-Specific Solutions
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  
                  <div className={`${isEven ? '' : 'lg:order-1'} fade-in-up-delay-1`}>
                    <div className="space-y-6">
                      {/* Client Types */}
                      <div className="bg-card rounded-xl p-6 shadow-lg border border-border/50">
                        <h4 className="text-lg font-semibold text-card-foreground mb-4 flex items-center">
                          <Users className="w-5 h-5 mr-2 text-primary" />
                          Client Types We Serve
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {industry.details.clientTypes.map((type, typeIndex) => (
                            <span key={typeIndex} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm" data-testid={`client-type-${index}-${typeIndex}`}>
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Benefits */}
                      <div className="bg-card rounded-xl p-6 shadow-lg border border-border/50">
                        <h4 className="text-lg font-semibold text-card-foreground mb-4 flex items-center">
                          <Zap className="w-5 h-5 mr-2 text-primary" />
                          Key Benefits
                        </h4>
                        <ul className="space-y-2">
                          {industry.details.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start space-x-2" data-testid={`benefit-${index}-${benefitIndex}`}>
                              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                              <span className="text-muted-foreground text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Solutions Grid */}
                <div className="mt-16">
                  <h3 className="text-2xl font-bold text-foreground mb-8 text-center fade-in-up" data-testid={`solutions-title-${index}`}>
                    Our {industry.name} Solutions
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industry.details.solutions.map((solution, solutionIndex) => {
                      const animationDelay = solutionIndex % 3 === 0 ? "fade-in-up" : solutionIndex % 3 === 1 ? "fade-in-up-delay-1" : "fade-in-up-delay-2";
                      return (
                        <div key={solutionIndex} className={`bg-card rounded-lg p-6 shadow-sm card-hover border border-border/50 ${animationDelay}`} data-testid={`solution-${index}-${solutionIndex}`}>
                          <div className="flex items-start space-x-3">
                            <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground leading-relaxed">{solution}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* CTA Section */}
        <section className="py-20 bg-background" data-testid="industries-cta">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 fade-in-up" data-testid="cta-title">
                Ready to Transform Your Industry?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto fade-in-up-delay-1" data-testid="cta-description">
                Let's discuss how our industry-specific expertise can help you achieve your technology transformation goals 
                and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up-delay-2">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4" data-testid="button-schedule-consultation">
                  Schedule Industry Consultation
                </Button>
                <Button variant="outline" size="lg" className="border border-border text-foreground hover:bg-muted px-8 py-4" data-testid="button-view-all-services">
                  View All Our Services
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}