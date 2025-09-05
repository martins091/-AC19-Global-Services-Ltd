import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Users, Target, Award, Globe, Zap, Shield, Heart, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Empowering organizations through innovative technology solutions that drive measurable business outcomes."
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "Building lasting partnerships through transparent communication and dependable service delivery."
    },
    {
      icon: Lightbulb,
      title: "Innovation Excellence",
      description: "Staying ahead of technology trends to provide cutting-edge solutions for complex challenges."
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Putting our clients' success at the center of everything we do, from strategy to implementation."
    }
  ];

  const team = [
    {
      name: "Leadership Team",
      role: "Strategic Vision & Direction",
      description: "Experienced executives with decades of technology and business transformation expertise."
    },
    {
      name: "Technical Experts",
      role: "Solution Architecture & Implementation", 
      description: "Certified professionals specializing in enterprise software, cloud solutions, and digital transformation."
    },
    {
      name: "Training Specialists",
      role: "Professional Development & Education",
      description: "Skilled instructors and curriculum developers focused on practical, industry-relevant training programs."
    },
    {
      name: "Support Team",
      role: "Client Success & Maintenance",
      description: "Dedicated support professionals ensuring smooth operations and continuous improvement."
    }
  ];

  const milestones = [
    { year: "2015", title: "Company Founded", description: "AC19 Global Services established with a vision to bridge technology gaps." },
    { year: "2017", title: "Partnership Expansion", description: "Formed strategic alliances with leading global technology providers." },
    { year: "2019", title: "Training Division Launch", description: "Launched Melodia Coding Academy to address skill development needs." },
    { year: "2021", title: "Digital Transformation Focus", description: "Expanded services to include comprehensive digital transformation consulting." },
    { year: "2023", title: "500+ Projects Milestone", description: "Successfully delivered over 500 technology projects across multiple industries." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/10" data-testid="about-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 fade-in-up" data-testid="about-title">
                Driving Innovation Through <span className="text-shimmer">Technology Excellence</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed fade-in-up-delay-1" data-testid="about-subtitle">
                For over 8 years, AC19 Global Services has been at the forefront of technology transformation, 
                helping organizations across Nigeria and beyond harness the power of innovative software solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up-delay-2">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4" data-testid="button-our-services">
                  Explore Our Services
                </Button>
                <Button variant="outline" size="lg" className="border border-border text-foreground hover:bg-muted px-8 py-4" data-testid="button-contact-us">
                  Contact Our Team
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-background" data-testid="our-story">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in-up">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6" data-testid="story-title">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Founded in 2015, AC19 Global Services began with a simple yet powerful vision: to democratize access to 
                  world-class technology solutions for organizations of all sizes. From our headquarters in Lagos, we've 
                  grown to serve clients across multiple industries and geographies.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our journey has been marked by continuous innovation, strategic partnerships with global technology leaders, 
                  and an unwavering commitment to our clients' success. Today, we're proud to be a trusted technology partner 
                  for over 500 organizations worldwide.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  What sets us apart is our holistic approach - we don't just implement technology; we ensure your team 
                  is fully equipped to leverage it through our comprehensive training programs and ongoing support services.
                </p>
              </div>
              <div className="fade-in-up-delay-1">
                <div className="bg-gradient-to-br from-primary/10 to-accent/20 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 floating-animation">
                        <Users className="w-10 h-10 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-1">500+</div>
                      <div className="text-sm text-muted-foreground">Satisfied Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 floating-delay">
                        <Globe className="w-10 h-10 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-1">25+</div>
                      <div className="text-sm text-muted-foreground">Industries Served</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 floating-animation">
                        <Award className="w-10 h-10 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-1">8+</div>
                      <div className="text-sm text-muted-foreground">Years of Excellence</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 floating-delay">
                        <Zap className="w-10 h-10 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-1">10K+</div>
                      <div className="text-sm text-muted-foreground">Professionals Trained</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-muted/30" data-testid="core-values">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 fade-in-up" data-testid="values-title">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up-delay-1" data-testid="values-subtitle">
                The principles that guide our work and define our commitment to excellence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                const animationDelay = index === 0 ? "fade-in-up" : index === 1 ? "fade-in-up-delay-1" : index === 2 ? "fade-in-up-delay-2" : "fade-in-up-delay-3";
                return (
                  <div key={index} className={`bg-card rounded-xl p-8 shadow-lg card-hover border border-border/50 backdrop-blur-sm ${animationDelay}`} data-testid={`value-card-${index}`}>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-6 floating-animation">
                      <IconComponent className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-4" data-testid={`value-title-${index}`}>
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed" data-testid={`value-description-${index}`}>
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Overview */}
        <section className="py-20 bg-background" data-testid="team-overview">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 fade-in-up" data-testid="team-title">
                Our Expert Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up-delay-1" data-testid="team-subtitle">
                Experienced professionals dedicated to delivering exceptional technology solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {team.map((member, index) => {
                const animationDelay = index % 2 === 0 ? "fade-in-up" : "fade-in-up-delay-1";
                return (
                  <div key={index} className={`bg-card rounded-xl p-8 shadow-lg card-hover border border-border/50 ${animationDelay}`} data-testid={`team-card-${index}`}>
                    <h3 className="text-xl font-semibold text-card-foreground mb-2" data-testid={`team-name-${index}`}>
                      {member.name}
                    </h3>
                    <div className="text-primary font-medium mb-4" data-testid={`team-role-${index}`}>
                      {member.role}
                    </div>
                    <p className="text-muted-foreground leading-relaxed" data-testid={`team-description-${index}`}>
                      {member.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-muted/30" data-testid="company-timeline">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 fade-in-up" data-testid="timeline-title">
                Our Journey
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up-delay-1" data-testid="timeline-subtitle">
                Key milestones in our growth and evolution as a technology solutions provider
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>
                
                <div className="space-y-12">
                  {milestones.map((milestone, index) => {
                    const animationDelay = index % 2 === 0 ? "fade-in-up" : "fade-in-up-delay-1";
                    return (
                      <div key={index} className={`relative flex items-start ${animationDelay}`} data-testid={`milestone-${index}`}>
                        {/* Timeline dot */}
                        <div className="hidden md:flex w-16 h-16 bg-primary rounded-full items-center justify-center text-white font-bold mr-8 flex-shrink-0 pulse-glow">
                          {milestone.year}
                        </div>
                        
                        {/* Content */}
                        <div className="bg-card rounded-xl p-8 shadow-lg card-hover border border-border/50 flex-1">
                          <div className="md:hidden text-primary font-bold text-lg mb-2">{milestone.year}</div>
                          <h3 className="text-xl font-semibold text-card-foreground mb-3" data-testid={`milestone-title-${index}`}>
                            {milestone.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed" data-testid={`milestone-description-${index}`}>
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background" data-testid="about-cta">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 fade-in-up" data-testid="cta-title">
                Ready to Transform Your Organization?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto fade-in-up-delay-1" data-testid="cta-description">
                Join hundreds of organizations who have trusted AC19 Global Services to drive their technology transformation and business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up-delay-2">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4" data-testid="button-start-project">
                  Start Your Project
                </Button>
                <Button variant="outline" size="lg" className="border border-border text-foreground hover:bg-muted px-8 py-4" data-testid="button-learn-more">
                  Learn More About Our Services
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