import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { GraduationCap, Code, Database, Cloud, Shield, Users, Brain, Computer, MapPin, Zap, CheckCircle, ArrowRight, Target, Award, TrendingUp, BookOpen, Monitor, Cpu, Wrench, Satellite } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Melodia() {
  const coreServices = [
    {
      icon: Code,
      title: "Software Development",
      description: "Full-stack web development, mobile apps, and backend engineering",
      topics: [
        "Full-stack web development with React, Node.js, Django, Laravel",
        "Mobile app development for Android, iOS, and Flutter",
        "Backend engineering with APIs, microservices, and databases",
        "Capstone projects simulating enterprise applications"
      ],
      color: "blue"
    },
    {
      icon: Database,
      title: "Data Analytics & AI",
      description: "Data science, business analytics, and machine learning solutions",
      topics: [
        "Data science fundamentals: Excel, SQL, Python, R",
        "Business analytics with Power BI and Tableau",
        "Machine Learning & Deep Learning for AI solutions",
        "Predictive modeling for economics and finance"
      ],
      color: "green"
    },
    {
      icon: Cloud,
      title: "Cloud Computing & DevOps",
      description: "Cloud platforms, DevOps pipelines, and infrastructure automation",
      topics: [
        "Cloud platforms: AWS, Microsoft Azure, Google Cloud",
        "DevOps pipelines: CI/CD, Docker, Kubernetes, Jenkins",
        "Infrastructure as Code with Terraform and Ansible",
        "Site reliability engineering and performance optimization"
      ],
      color: "purple"
    },
    {
      icon: Shield,
      title: "Cybersecurity & Ethical Hacking",
      description: "Network defense, penetration testing, and security operations",
      topics: [
        "Cybersecurity foundations and network defense",
        "Penetration testing and ethical hacking techniques",
        "Security Operations Center (SOC) training",
        "Cyber law, governance, and compliance frameworks"
      ],
      color: "red"
    },
    {
      icon: Users,
      title: "Digital Skills for Educators",
      description: "ICT integration for teachers and educational institutions",
      topics: [
        "ICT integration for teachers and schools",
        "Virtual learning environments (Moodle, Google Classroom)",
        "E-learning content development and digital pedagogy",
        "Capacity building for EdTech adoption"
      ],
      color: "yellow"
    }
  ];

  const specializedPrograms = [
    {
      icon: Computer,
      title: "Computer Science",
      focus: "Building strong foundations in software development and scalable systems",
      highlights: ["Algorithms & Data Structures", "Programming Paradigms", "Database Design", "Software Engineering"],
      capstone: "Building a production-ready software product"
    },
    {
      icon: Monitor,
      title: "Information & Communication Technology",
      focus: "Designing, managing, and securing enterprise IT infrastructure",
      highlights: ["Computer Networking", "System Administration", "Cybersecurity Fundamentals", "Cloud & Virtualization"],
      capstone: "Designing secure corporate IT infrastructure"
    },
    {
      icon: TrendingUp,
      title: "Data Science & Economics",
      focus: "Quantitative and analytical skills for business and policy insights",
      highlights: ["Applied Econometrics", "Financial Data Analytics", "Business Intelligence", "Big Data Ecosystems"],
      capstone: "Data-driven decision-making dashboard"
    },
    {
      icon: Brain,
      title: "Artificial Intelligence",
      focus: "Pioneering innovation through applied AI research and development",
      highlights: ["Machine Learning & Deep Learning", "Natural Language Processing", "Computer Vision", "AI Ethics"],
      capstone: "AI-powered solution deployment"
    },
    {
      icon: Satellite,
      title: "GIS & Remote Sensing",
      focus: "Spatial technologies for environmental and industrial challenges",
      highlights: ["Geospatial Data Analysis", "Remote Sensing", "Mapping & Cartography", "Spatial Data Science"],
      capstone: "Geospatial decision support system"
    },
    {
      icon: Cpu,
      title: "Computer & Electrical Engineering",
      focus: "Bridging hardware and software for intelligent systems",
      highlights: ["Digital Electronics", "IoT Protocols", "Embedded Systems", "Signal Processing"],
      capstone: "Connected embedded system design"
    },
    {
      icon: Wrench,
      title: "Mechanical, Robotics & Mechatronics",
      focus: "Mechanics, electronics, and computing for automation",
      highlights: ["Robotics Design", "Automation & Control", "Mechatronics Integration", "3D Printing"],
      capstone: "Real-world robotic system development"
    }
  ];

  const programFeatures = [
    {
      icon: Target,
      title: "Hands-on Learning",
      description: "Project-based experiences with real-world simulations"
    },
    {
      icon: Users,
      title: "Industry Mentorship",
      description: "Collaborative research labs and expert guidance"
    },
    {
      icon: Award,
      title: "Career Placement",
      description: "Internship and job pathways with partner companies"
    },
    {
      icon: BookOpen,
      title: "Local Impact",
      description: "Capstone projects addressing African challenges"
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
        <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/10" data-testid="melodia-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="fade-in-up">
                  <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                    AC19 Training Partnership
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6" data-testid="melodia-title">
                    <span className="text-shimmer">Melodia</span> Coding Academy
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed" data-testid="melodia-subtitle">
                    A premier technology and innovation training institute dedicated to equipping individuals, 
                    professionals, and institutions with future-ready digital skills across Africa.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4" data-testid="button-explore-programs">
                      Explore Programs
                    </Button>
                    <Button variant="outline" size="lg" className="border border-border text-foreground hover:bg-muted px-8 py-4" data-testid="button-apply-now">
                      Apply Now
                    </Button>
                  </div>
                </div>
                
                <div className="fade-in-up-delay-1">
                  <div className="bg-card rounded-2xl p-8 shadow-xl border border-border/50">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/30 rounded-full flex items-center justify-center mx-auto mb-4 floating-animation">
                        <GraduationCap className="w-12 h-12 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
                    </div>
                    <p className="text-muted-foreground text-center leading-relaxed">
                      To make global-standard tech education accessible, practical, and industry-relevant, 
                      empowering Africa's digital transformation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Service Areas */}
        <section className="py-20 bg-background" data-testid="core-services">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 fade-in-up" data-testid="services-title">
                Core Service Areas
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto fade-in-up-delay-1" data-testid="services-subtitle">
                Specialized training programs designed around today's fastest-growing technology fields, 
                combining hands-on learning with real-world project experiences.
              </p>
            </div>
            
            <div className="space-y-12">
              {coreServices.map((service, index) => {
                const IconComponent = service.icon;
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-cols-2'}`} data-testid={`service-${index}`}>
                    <div className={`${isEven ? '' : 'lg:order-2'} fade-in-up`}>
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(service.color)} rounded-xl flex items-center justify-center mr-4 floating-animation`}>
                          <IconComponent className={`w-10 h-10 ${getIconColorClass(service.color)}`} />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground" data-testid={`service-title-${index}`}>
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid={`service-description-${index}`}>
                        {service.description}
                      </p>
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground group" data-testid={`service-cta-${index}`}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                    
                    <div className={`${isEven ? '' : 'lg:order-1'} fade-in-up-delay-1`}>
                      <div className="bg-card rounded-xl p-6 shadow-lg border border-border/50">
                        <h4 className="text-lg font-semibold text-card-foreground mb-4">Program Highlights</h4>
                        <ul className="space-y-3">
                          {service.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start space-x-3" data-testid={`topic-${index}-${topicIndex}`}>
                              <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Specialized Programs */}
        <section className="py-20 bg-muted/30" data-testid="specialized-programs">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 fade-in-up" data-testid="programs-title">
                Specialized Training Programs
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto fade-in-up-delay-1" data-testid="programs-subtitle">
                Tailored programs aligned with global academic disciplines, integrating theory, hands-on projects, 
                and emerging technologies for real-world applications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specializedPrograms.map((program, index) => {
                const IconComponent = program.icon;
                const animationDelay = index % 3 === 0 ? "fade-in-up" : index % 3 === 1 ? "fade-in-up-delay-1" : "fade-in-up-delay-2";
                return (
                  <div key={index} className={`bg-card rounded-xl p-8 shadow-lg card-hover border border-border/50 ${animationDelay}`} data-testid={`program-card-${index}`}>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mb-6 floating-animation">
                      <IconComponent className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-3" data-testid={`program-title-${index}`}>
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`program-focus-${index}`}>
                      <span className="font-medium">Focus:</span> {program.focus}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Key Highlights:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.highlights.map((highlight, highlightIndex) => (
                          <span key={highlightIndex} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs" data-testid={`highlight-${index}-${highlightIndex}`}>
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Capstone Project:</h4>
                      <p className="text-sm text-muted-foreground" data-testid={`capstone-${index}`}>
                        {program.capstone}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Program Features */}
        <section className="py-20 bg-background" data-testid="program-features">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 fade-in-up" data-testid="features-title">
                Program Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up-delay-1" data-testid="features-subtitle">
                Everything you need to succeed in your technology career journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {programFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                const animationDelay = index === 0 ? "fade-in-up" : index === 1 ? "fade-in-up-delay-1" : index === 2 ? "fade-in-up-delay-2" : "fade-in-up-delay-3";
                return (
                  <div key={index} className={`bg-card rounded-xl p-6 shadow-lg card-hover border border-border/50 text-center ${animationDelay}`} data-testid={`feature-card-${index}`}>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 floating-animation">
                      <IconComponent className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-card-foreground mb-3" data-testid={`feature-title-${index}`}>
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed" data-testid={`feature-description-${index}`}>
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Impact & Results */}
        <section className="py-20 bg-muted/30" data-testid="impact-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 fade-in-up" data-testid="impact-title">
                Our Impact Across Africa
              </h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed fade-in-up-delay-1" data-testid="impact-description">
                Melodia Coding Academy has trained and mentored hundreds of learners across Africa, helping them 
                transition from learning to real experience to scaling impact.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  { number: "500+", label: "Students Trained", icon: Users },
                  { number: "50+", label: "Partner Companies", icon: TrendingUp },
                  { number: "15+", label: "Countries Served", icon: MapPin }
                ].map((stat, index) => {
                  const IconComponent = stat.icon;
                  const animationDelay = index === 0 ? "fade-in-up" : index === 1 ? "fade-in-up-delay-1" : "fade-in-up-delay-2";
                  return (
                    <div key={index} className={`bg-card rounded-xl p-8 shadow-lg border border-border/50 ${animationDelay}`} data-testid={`stat-card-${index}`}>
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 floating-animation">
                        <IconComponent className="w-10 h-10 text-primary" />
                      </div>
                      <div className="text-3xl font-bold text-foreground mb-2" data-testid={`stat-number-${index}`}>
                        {stat.number}
                      </div>
                      <div className="text-muted-foreground" data-testid={`stat-label-${index}`}>
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="bg-card rounded-2xl p-8 shadow-xl border border-border/50 fade-in-up-delay-2">
                <blockquote className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                  "Our alumni are building startups, innovating in industries, and working with global tech companies. 
                  Through AC19 partnerships, we are scaling these efforts to reach thousands more, creating a sustainable 
                  pipeline of digital talent to power Africa's digital economy."
                </blockquote>
                <div className="text-primary font-semibold">— Melodia Coding Academy Impact Report</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background" data-testid="melodia-cta">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 fade-in-up" data-testid="cta-title">
                Ready to Start Your Tech Journey?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto fade-in-up-delay-1" data-testid="cta-description">
                Join hundreds of professionals who have transformed their careers through our comprehensive 
                technology training programs. Your future in tech starts here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up-delay-2">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4" data-testid="button-apply-program">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Apply to a Program
                </Button>
                <Button variant="outline" size="lg" className="border border-border text-foreground hover:bg-muted px-8 py-4" data-testid="button-download-brochure">
                  Download Brochure
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Questions? Contact our admissions team for personalized guidance.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}