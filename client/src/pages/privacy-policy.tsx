import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Shield, Eye, Lock, Database, Users, AlertCircle } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          details: "We collect personal information that you provide directly to us, including but not limited to: name, email address, phone number, company information, job title, and any other information you choose to provide when contacting us or using our services."
        },
        {
          subtitle: "Usage Information", 
          details: "We automatically collect certain information about your use of our website, including your IP address, browser type, operating system, referring URLs, access times, and pages viewed."
        },
        {
          subtitle: "Cookies and Similar Technologies",
          details: "We use cookies, web beacons, and similar tracking technologies to enhance your experience on our website and collect information about your browsing behavior."
        }
      ]
    },
    {
      icon: Database,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Delivery",
          details: "To provide, maintain, and improve our technology services, respond to your inquiries, and fulfill our contractual obligations."
        },
        {
          subtitle: "Communication",
          details: "To communicate with you about our services, send updates, newsletters, and marketing materials (with your consent where required)."
        },
        {
          subtitle: "Business Operations",
          details: "To analyze usage patterns, conduct research, prevent fraud, and ensure the security and integrity of our services."
        },
        {
          subtitle: "Legal Compliance",
          details: "To comply with applicable laws, regulations, and legal processes, and to protect our rights and interests."
        }
      ]
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: [
        {
          subtitle: "Service Providers",
          details: "We may share your information with trusted third-party service providers who assist us in operating our business and delivering services to you."
        },
        {
          subtitle: "Business Transfers",
          details: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction."
        },
        {
          subtitle: "Legal Requirements",
          details: "We may disclose your information when required by law, court order, or to protect our rights, property, or safety, or that of others."
        },
        {
          subtitle: "Consent",
          details: "We may share your information with your explicit consent or at your direction."
        }
      ]
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        {
          subtitle: "Security Measures",
          details: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
        },
        {
          subtitle: "Data Encryption",
          details: "We use industry-standard encryption protocols to protect sensitive data during transmission and storage."
        },
        {
          subtitle: "Access Controls",
          details: "Access to personal information is restricted to authorized personnel who need the information to perform their job functions."
        },
        {
          subtitle: "Regular Audits",
          details: "We regularly review and update our security practices to ensure the ongoing protection of your information."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/10" data-testid="privacy-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/30 rounded-full flex items-center justify-center mx-auto mb-6 floating-animation">
                <Shield className="w-12 h-12 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 fade-in-up" data-testid="privacy-title">
                Privacy <span className="text-shimmer">Policy</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed fade-in-up-delay-1" data-testid="privacy-subtitle">
                Your privacy is important to us. This policy explains how AC19 Global Services Ltd collects, 
                uses, and protects your personal information.
              </p>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium fade-in-up-delay-2">
                Last Updated: January 2024
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background" data-testid="privacy-introduction">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-xl p-8 shadow-lg border border-border/50 fade-in-up">
                <h2 className="text-2xl font-bold text-foreground mb-6">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  AC19 Global Services Ltd ("we," "our," or "us") is committed to protecting and respecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                  visit our website, use our services, or interact with us.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  This policy applies to all information collected through our website, services, and other related 
                  communications. By accessing or using our services, you acknowledge that you have read, understood, 
                  and agree to be bound by this Privacy Policy.
                </p>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      If you do not agree with the terms of this Privacy Policy, please do not access or use our services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Sections */}
        {sections.map((section, index) => {
          const IconComponent = section.icon;
          const isEven = index % 2 === 0;
          
          return (
            <section key={index} className={`py-16 ${isEven ? 'bg-muted/30' : 'bg-background'}`} data-testid={`privacy-section-${index}`}>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center mb-8 fade-in-up">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mr-6 floating-animation">
                      <IconComponent className="w-10 h-10 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground" data-testid={`section-title-${index}`}>
                      {section.title}
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-card rounded-xl p-6 shadow-lg border border-border/50 fade-in-up-delay-1" data-testid={`section-item-${index}-${itemIndex}`}>
                        <h3 className="text-lg font-semibold text-foreground mb-3" data-testid={`item-subtitle-${index}-${itemIndex}`}>
                          {item.subtitle}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed" data-testid={`item-details-${index}-${itemIndex}`}>
                          {item.details}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Your Rights */}
        <section className="py-16 bg-background" data-testid="privacy-rights">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center fade-in-up">Your Privacy Rights</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Access & Portability",
                    description: "You have the right to access your personal information and request a copy of the data we hold about you."
                  },
                  {
                    title: "Correction & Update",
                    description: "You may request that we correct or update any inaccurate or incomplete personal information."
                  },
                  {
                    title: "Deletion",
                    description: "You have the right to request deletion of your personal information, subject to certain legal obligations."
                  },
                  {
                    title: "Opt-Out",
                    description: "You may opt out of receiving marketing communications from us at any time by following the unsubscribe instructions."
                  }
                ].map((right, index) => {
                  const animationDelay = index % 2 === 0 ? "fade-in-up" : "fade-in-up-delay-1";
                  return (
                    <div key={index} className={`bg-card rounded-xl p-6 shadow-lg border border-border/50 ${animationDelay}`} data-testid={`privacy-right-${index}`}>
                      <h3 className="text-lg font-semibold text-foreground mb-3" data-testid={`right-title-${index}`}>
                        {right.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed" data-testid={`right-description-${index}`}>
                        {right.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Updates */}
        <section className="py-16 bg-muted/30" data-testid="privacy-contact">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-card rounded-xl p-8 shadow-lg border border-border/50 fade-in-up">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Contact Us</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <div className="space-y-4">
                    <div>
                      <div className="font-medium text-foreground">Email:</div>
                      <div className="text-muted-foreground">privacy@ac19global.com</div>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Address:</div>
                      <div className="text-muted-foreground">
                        18 Ibe Arinze Street<br />
                        Okota, Lagos, Nigeria
                      </div>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Phone:</div>
                      <div className="text-muted-foreground">0809 944 5455</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card rounded-xl p-8 shadow-lg border border-border/50 fade-in-up-delay-1">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Policy Updates</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
                  </p>
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-foreground text-sm mb-1">Important Notice</div>
                        <div className="text-sm text-muted-foreground">
                          We will notify you of any material changes by posting the updated policy on our website 
                          and updating the "Last Updated" date.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}