import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { FileText, Scale, AlertTriangle, Shield, Gavel, Users } from "lucide-react";

export default function TermsOfService() {
  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: [
        {
          subtitle: "Agreement to Terms",
          details: "By accessing and using the services provided by AC19 Global Services Ltd, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service constitute a legally binding agreement between you and AC19 Global Services Ltd."
        },
        {
          subtitle: "Modifications",
          details: "We reserve the right to modify these terms at any time. We will provide notice of any material changes by posting the updated terms on our website. Your continued use of our services after such modifications constitutes acceptance of the updated terms."
        },
        {
          subtitle: "Capacity",
          details: "You represent that you are at least 18 years old and have the legal capacity to enter into this agreement. If you are acting on behalf of an organization, you represent that you have the authority to bind that organization to these terms."
        }
      ]
    },
    {
      icon: Users,
      title: "Services and Usage",
      content: [
        {
          subtitle: "Service Description",
          details: "AC19 Global Services Ltd provides technology consulting, software sourcing, implementation services, training programs, and related professional services as described on our website and in our service agreements."
        },
        {
          subtitle: "Acceptable Use",
          details: "You agree to use our services only for lawful purposes and in accordance with these terms. You may not use our services in any way that could damage, disable, overburden, or impair our systems or interfere with any other party's use of our services."
        },
        {
          subtitle: "Account Responsibilities",
          details: "You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account."
        },
        {
          subtitle: "Service Availability",
          details: "While we strive to maintain high service availability, we do not guarantee that our services will be available 100% of the time. We may temporarily suspend services for maintenance, updates, or other operational requirements."
        }
      ]
    },
    {
      icon: Scale,
      title: "Intellectual Property",
      content: [
        {
          subtitle: "Our Intellectual Property",
          details: "All content, features, and functionality of our services, including but not limited to text, graphics, logos, software, and methodologies, are owned by AC19 Global Services Ltd and are protected by copyright, trademark, and other intellectual property laws."
        },
        {
          subtitle: "Client Materials",
          details: "You retain ownership of any materials, data, or content you provide to us. You grant us a limited license to use such materials solely for the purpose of providing services to you."
        },
        {
          subtitle: "Third-Party Software",
          details: "Our services may include or integrate with third-party software or services. Such third-party components are subject to their respective license agreements and terms of use."
        },
        {
          subtitle: "Restrictions",
          details: "You may not copy, modify, distribute, sell, or lease any part of our services or included software, nor may you reverse engineer or attempt to extract the source code of such software."
        }
      ]
    },
    {
      icon: Shield,
      title: "Privacy and Data Protection",
      content: [
        {
          subtitle: "Privacy Policy",
          details: "Our collection and use of personal information is governed by our Privacy Policy, which is incorporated by reference into these terms. By using our services, you consent to such collection and use."
        },
        {
          subtitle: "Data Security",
          details: "We implement appropriate technical and organizational measures to protect your data. However, no system is completely secure, and we cannot guarantee the absolute security of your information."
        },
        {
          subtitle: "Data Processing",
          details: "We may process your data as necessary to provide our services, comply with legal obligations, and for legitimate business purposes as outlined in our Privacy Policy."
        },
        {
          subtitle: "Data Retention",
          details: "We retain your data for as long as necessary to provide services and comply with legal obligations. You may request deletion of your data subject to certain limitations."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/10" data-testid="terms-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/30 rounded-full flex items-center justify-center mx-auto mb-6 floating-animation">
                <Gavel className="w-12 h-12 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 fade-in-up" data-testid="terms-title">
                Terms of <span className="text-shimmer">Service</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed fade-in-up-delay-1" data-testid="terms-subtitle">
                These terms govern your use of AC19 Global Services Ltd's technology solutions and services. 
                Please read them carefully.
              </p>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium fade-in-up-delay-2">
                Last Updated: January 2024
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background" data-testid="terms-introduction">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-xl p-8 shadow-lg border border-border/50 fade-in-up">
                <h2 className="text-2xl font-bold text-foreground mb-6">Welcome to AC19 Global Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  These Terms of Service ("Terms") govern your access to and use of the services provided by 
                  AC19 Global Services Ltd, a technology solutions company incorporated in Nigeria. These Terms 
                  apply to all users of our website, services, and related applications.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy. 
                  If you disagree with any part of these terms, then you may not access our services.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-amber-800">
                      Please read these terms carefully. They contain important information about your legal rights, 
                      remedies, and obligations.
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
            <section key={index} className={`py-16 ${isEven ? 'bg-muted/30' : 'bg-background'}`} data-testid={`terms-section-${index}`}>
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

        {/* Limitation of Liability */}
        <section className="py-16 bg-background" data-testid="terms-liability">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center fade-in-up">Limitation of Liability</h2>
              
              <div className="bg-card rounded-xl p-8 shadow-lg border border-border/50 fade-in-up-delay-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Service Limitations",
                      description: "Our services are provided 'as is' without warranties of any kind. We do not guarantee that our services will meet your specific requirements or be error-free."
                    },
                    {
                      title: "Liability Cap",
                      description: "Our total liability to you for any damages shall not exceed the amount paid by you to us for services in the 12 months preceding the claim."
                    },
                    {
                      title: "Excluded Damages",
                      description: "We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits or data."
                    },
                    {
                      title: "Force Majeure",
                      description: "We are not responsible for delays or failures in performance resulting from circumstances beyond our reasonable control."
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-muted/50 rounded-lg p-6" data-testid={`liability-item-${index}`}>
                      <h3 className="text-lg font-semibold text-foreground mb-3" data-testid={`liability-title-${index}`}>
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`liability-description-${index}`}>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Termination & Governing Law */}
        <section className="py-16 bg-muted/30" data-testid="terms-termination">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-card rounded-xl p-8 shadow-lg border border-border/50 fade-in-up">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Termination</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Termination by You</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        You may terminate your use of our services at any time by discontinuing use and, 
                        if applicable, canceling your account.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Termination by Us</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        We may terminate or suspend your access to our services immediately, without prior notice, 
                        for conduct that we believe violates these Terms.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Effect of Termination</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Upon termination, your right to use our services will cease immediately, but provisions 
                        regarding intellectual property and limitation of liability will survive.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card rounded-xl p-8 shadow-lg border border-border/50 fade-in-up-delay-1">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Governing Law</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Applicable Law</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        These Terms shall be governed by and construed in accordance with the laws of Nigeria, 
                        without regard to its conflict of law provisions.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Jurisdiction</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Any disputes arising under these Terms shall be subject to the exclusive jurisdiction 
                        of the courts of Lagos State, Nigeria.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Contact Information</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        For questions about these Terms, contact us at legal@ac19global.com or 
                        18 Ibe Arinze Street, Okota, Lagos, Nigeria.
                      </p>
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