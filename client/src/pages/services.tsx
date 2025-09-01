import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Search, BarChart, Users, BookOpen, Settings, Zap, CheckCircle, ArrowRight, Globe, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Services() {
  const mainServices = [
    {
      icon: Search,
      title: "Software Sourcing & Procurement",
      description: "Strategic identification and procurement of software solutions that align perfectly with your business objectives and technical requirements.",
      features: [
        "Comprehensive market analysis and vendor evaluation",
        "Cost-benefit analysis and ROI projections",
        "License management and compliance assurance",
        "Custom software recommendation based on specific needs"
      ],
      process: "Discovery → Analysis → Recommendation → Procurement → Implementation"
    },
    {
      icon: BarChart,
      title: "Critical Needs Assessment",
      description: "In-depth analysis of your current technology landscape to identify gaps, inefficiencies, and optimization opportunities.",
      features: [
        "Technology audit and infrastructure assessment",
        "Business process analysis and workflow optimization",
        "Security vulnerability assessment",
        "Scalability and performance evaluation"
      ],
      process: "Assessment → Analysis → Gap Identification → Strategy → Roadmap"
    },
    {
      icon: Users,
      title: "Third-Party Engagement & Integration",
      description: "Seamless coordination with vendors and partners to ensure successful project delivery and system integration.",
      features: [
        "Vendor management and relationship coordination",
        "Project management and timeline oversight",
        "Quality assurance and testing protocols",
        "Change management and stakeholder communication"
      ],
      process: "Planning → Coordination → Integration → Testing → Deployment"
    },
    {
      icon: BookOpen,
      title: "Training & Professional Development",
      description: "Comprehensive training programs designed to maximize your team's potential and ensure successful technology adoption.",
      features: [
        "Custom curriculum development for specific technologies",
        "Hands-on workshops and practical training sessions",
        "Certification programs and skill assessments",
        "Ongoing mentorship and continuous learning support"
      ],
      process: "Assessment → Design → Delivery → Practice → Certification"
    },
    {
      icon: Settings,
      title: "Support & Maintenance Services",
      description: "Ongoing technical support and maintenance services to keep your systems running at peak performance with minimal downtime.",
      features: [
        "24/7 technical support and helpdesk services",
        "Proactive monitoring and maintenance",
        "Regular updates and security patches",
        "Performance optimization and capacity planning"
      ],
      process: "Setup → Monitor → Maintain → Optimize → Upgrade"
    }
  ];

  const specializedServices = [
    {
      icon: Globe,
      title: "Digital Transformation Consulting",
      description: "End-to-end digital transformation strategy and implementation to modernize your operations."
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security assessments, implementation, and ongoing protection services."
    },
    {
      icon: Clock,
      title: "Project Management Office (PMO)",
      description: "Dedicated project management services to ensure timely and successful technology initiatives."
    }
  ];

  const industries = [
    { name: "Education", description: "Learning management systems, student information systems, and educational technology solutions." },
    { name: "Government", description: "Public sector digital transformation, e-governance solutions, and citizen service platforms." },
    { name: "Healthcare", description: "Electronic health records, telemedicine platforms, and healthcare management systems." },
    { name: "Financial Services", description: "Banking software, fintech solutions, and regulatory compliance systems." },
    { name: "Corporate Enterprise", description: "ERP systems, CRM platforms, and business intelligence solutions." },
    { name: "Non-Profit Organizations", description: "Donor management systems, volunteer coordination platforms, and program tracking tools." }
  ];

  const whyChooseUs = [
    {
      title: "Proven Track Record",
      description: "Over 500 successful projects delivered across 25+ industries with 98% client satisfaction rate."
    },
    {
      title: "Global Technology Partnerships",
      description: "Strategic alliances with leading software vendors and technology providers worldwide."
    },
    {
      title: "Local Expertise",
      description: "Deep understanding of the Nigerian market with international best practices and standards."
    },
    {
      title: "End-to-End Service",
      description: "Complete service lifecycle from initial assessment to ongoing support and maintenance."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/10" data-testid="services-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 fade-in-up" data-testid="services-title">
                Comprehensive <span className="text-shimmer">Technology Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed fade-in-up-delay-1" data-testid="services-subtitle">
                From software sourcing to training and ongoing support, we provide end-to-end technology services 
                that drive digital transformation and business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up-delay-2">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4" data-testid="button-get-started">
                  Get Started Today
                </Button>
                <Button variant="outline" size="lg" className="border border-border text-foreground hover:bg-muted px-8 py-4" data-testid="button-schedule-consultation">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20 bg-background" data-testid="main-services">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 fade-in-up" data-testid="main-services-title">
                Our Core Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up-delay-1" data-testid="main-services-subtitle">
                Comprehensive technology services designed to accelerate your digital transformation journey
              </p>
            </div>

            <div className="space-y-16">
              {mainServices.map((service, index) => {
                const IconComponent = service.icon;
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`} data-testid={`service-detail-${index}`}>
                    <div className={`${isEven ? '' : 'lg:col-start-2'} fade-in-up`}>
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mr-4 floating-animation">
                          <IconComponent className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground" data-testid={`service-title-${index}`}>
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid={`service-description-${index}`}>
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3" data-testid={`service-feature-${index}-${featureIndex}`}>
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="bg-muted/50 rounded-lg p-4 mb-6">
                        <div className="text-sm font-medium text-foreground mb-2">Our Process:</div>
                        <div className="text-sm text-muted-foreground" data-testid={`service-process-${index}`}>
                          {service.process}
                        </div>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground group" data-testid={`service-cta-${index}`}>
                        Learn More About This Service
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                    <div className={`${isEven ? '' : 'lg:col-start-1'} fade-in-up-delay-1`}>
                      <div className="bg-gradient-to-br from-primary/10 to-accent/20 rounded-2xl p-8 h-full flex items-center justify-center">
                        <div className="text-center">
                          <IconComponent className="w-32 h-32 text-primary/60 mx-auto mb-4 floating-animation" />
                          <div className="text-lg font-semibold text-foreground">{service.title}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className="py-20 bg-muted/30" data-testid="specialized-services">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 fade-in-up" data-testid="specialized-title">
                Specialized Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up-delay-1" data-testid="specialized-subtitle">
                Additional specialized services to meet your unique technology challenges
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specializedServices.map((service, index) => {
                const IconComponent = service.icon;
                const animationDelay = index === 0 ? "fade-in-up" : index === 1 ? "fade-in-up-delay-1" : "fade-in-up-delay-2";
                return (
                  <div key={index} className={`bg-card rounded-xl p-8 shadow-lg card-hover border border-border/50 ${animationDelay}`} data-testid={`specialized-card-${index}`}>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-6 floating-animation">
                      <IconComponent className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-4" data-testid={`specialized-title-${index}`}>
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed" data-testid={`specialized-description-${index}`}>
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 bg-background" data-testid="industries-served">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 fade-in-up" data-testid="industries-title">
                Industries We Serve
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up-delay-1" data-testid="industries-subtitle">
                Delivering specialized technology solutions across diverse sectors
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => {
                const animationDelay = index % 3 === 0 ? "fade-in-up" : index % 3 === 1 ? "fade-in-up-delay-1" : "fade-in-up-delay-2";
                return (
                  <div key={index} className={`bg-card rounded-xl p-8 shadow-lg card-hover border border-border/50 ${animationDelay}`} data-testid={`industry-card-${index}`}>
                    <h3 className="text-xl font-semibold text-card-foreground mb-4" data-testid={`industry-name-${index}`}>
                      {industry.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed" data-testid={`industry-description-${index}`}>
                      {industry.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/30" data-testid="why-choose-us">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 fade-in-up" data-testid="why-choose-title">
                Why Choose AC19 Global Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up-delay-1" data-testid="why-choose-subtitle">
                The advantages that set us apart as your technology transformation partner
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChooseUs.map((reason, index) => {
                const animationDelay = index % 2 === 0 ? "fade-in-up" : "fade-in-up-delay-1";
                return (
                  <div key={index} className={`bg-card rounded-xl p-8 shadow-lg card-hover border border-border/50 ${animationDelay}`} data-testid={`reason-card-${index}`}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 floating-animation">
                        <Zap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-card-foreground mb-3" data-testid={`reason-title-${index}`}>
                          {reason.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed" data-testid={`reason-description-${index}`}>
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background" data-testid="services-cta">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 fade-in-up" data-testid="cta-title">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto fade-in-up-delay-1" data-testid="cta-description">
                Let's discuss how our comprehensive technology services can accelerate your digital transformation 
                and deliver measurable business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up-delay-2">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4" data-testid="button-start-project">
                  Start Your Project
                </Button>
                <Button variant="outline" size="lg" className="border border-border text-foreground hover:bg-muted px-8 py-4" data-testid="button-download-brochure">
                  Download Service Brochure
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