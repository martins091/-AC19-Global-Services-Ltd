import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Cookie, Settings, BarChart3, Shield, Users, Eye } from "lucide-react";

export default function CookiePolicy() {
  const cookieTypes = [
    {
      icon: Settings,
      title: "Essential Cookies",
      description: "Necessary for the website to function properly",
      purpose: "These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.",
      examples: ["Session management", "Security features", "Load balancing", "Form submission"],
      retention: "Session or up to 1 year",
      canDisable: false
    },
    {
      icon: BarChart3,
      title: "Analytics Cookies",
      description: "Help us understand how visitors interact with our website",
      purpose: "These cookies help us analyze website traffic and usage patterns to improve our services and user experience.",
      examples: ["Google Analytics", "Page view tracking", "User behavior analysis", "Performance monitoring"],
      retention: "Up to 2 years",
      canDisable: true
    },
    {
      icon: Users,
      title: "Functional Cookies",
      description: "Remember your preferences and settings",
      purpose: "These cookies allow the website to remember choices you make and provide enhanced, more personal features.",
      examples: ["Language preferences", "Region selection", "User interface customization", "Accessibility settings"],
      retention: "Up to 1 year",
      canDisable: true
    },
    {
      icon: Eye,
      title: "Marketing Cookies",
      description: "Used to track visitors across websites for advertising",
      purpose: "These cookies are used to deliver advertisements more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement.",
      examples: ["Advertising networks", "Social media plugins", "Remarketing tags", "Conversion tracking"],
      retention: "Up to 2 years",
      canDisable: true
    }
  ];

  const thirdPartyServices = [
    {
      name: "Google Analytics",
      purpose: "Website analytics and performance monitoring",
      dataCollected: "Usage statistics, page views, session duration",
      privacyPolicy: "https://policies.google.com/privacy"
    },
    {
      name: "Microsoft Clarity",
      purpose: "User behavior analysis and heatmaps",
      dataCollected: "Click patterns, scroll behavior, session recordings",
      privacyPolicy: "https://privacy.microsoft.com/privacystatement"
    },
    {
      name: "LinkedIn Insights",
      purpose: "Professional network analytics",
      dataCollected: "Professional demographics, engagement metrics",
      privacyPolicy: "https://www.linkedin.com/legal/privacy-policy"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/10" data-testid="cookie-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/30 rounded-full flex items-center justify-center mx-auto mb-6 floating-animation">
                <Cookie className="w-12 h-12 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 fade-in-up" data-testid="cookie-title">
                Cookie <span className="text-shimmer">Policy</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed fade-in-up-delay-1" data-testid="cookie-subtitle">
                Learn how AC19 Global Services Ltd uses cookies and similar technologies to improve your 
                browsing experience and provide better services.
              </p>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium fade-in-up-delay-2">
                Last Updated: January 2024
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background" data-testid="cookie-introduction">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-xl p-8 shadow-lg border border-border/50 fade-in-up">
                <h2 className="text-2xl font-bold text-foreground mb-6">What Are Cookies?</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Cookies are small text files that are placed on your computer, tablet, or mobile device when you 
                  visit a website. They are widely used to make websites work more efficiently, provide information 
                  to website owners, and improve user experience.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  This Cookie Policy explains what cookies are, how we use them, the types of cookies we use, 
                  and how you can control your cookie preferences. By using our website, you consent to the use 
                  of cookies in accordance with this policy.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Session Cookies</h3>
                    <p className="text-sm text-muted-foreground">
                      Temporary cookies that are deleted when you close your browser.
                    </p>
                  </div>
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Persistent Cookies</h3>
                    <p className="text-sm text-muted-foreground">
                      Remain on your device for a set period or until you delete them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="py-16 bg-muted/30" data-testid="cookie-types">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center fade-in-up">Types of Cookies We Use</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {cookieTypes.map((cookie, index) => {
                  const IconComponent = cookie.icon;
                  const animationDelay = index % 2 === 0 ? "fade-in-up" : "fade-in-up-delay-1";
                  
                  return (
                    <div key={index} className={`bg-card rounded-xl p-8 shadow-lg border border-border/50 ${animationDelay}`} data-testid={`cookie-type-${index}`}>
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mr-4 floating-animation">
                          <IconComponent className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground" data-testid={`cookie-title-${index}`}>
                            {cookie.title}
                          </h3>
                          <p className="text-sm text-muted-foreground" data-testid={`cookie-description-${index}`}>
                            {cookie.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Purpose</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`cookie-purpose-${index}`}>
                            {cookie.purpose}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Examples</h4>
                          <div className="flex flex-wrap gap-2">
                            {cookie.examples.map((example, exampleIndex) => (
                              <span key={exampleIndex} className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs" data-testid={`cookie-example-${index}-${exampleIndex}`}>
                                {example}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center pt-4 border-t border-border/50">
                          <div>
                            <div className="text-sm font-medium text-foreground">Retention</div>
                            <div className="text-xs text-muted-foreground" data-testid={`cookie-retention-${index}`}>
                              {cookie.retention}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-foreground">Can Disable</div>
                            <div className={`text-xs ${cookie.canDisable ? 'text-green-600' : 'text-red-600'}`} data-testid={`cookie-disable-${index}`}>
                              {cookie.canDisable ? 'Yes' : 'No'}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Third-Party Services */}
        <section className="py-16 bg-background" data-testid="third-party-services">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center fade-in-up">Third-Party Services</h2>
              <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto fade-in-up-delay-1">
                We use third-party services that may set their own cookies. Here are the main services we use:
              </p>
              
              <div className="space-y-6">
                {thirdPartyServices.map((service, index) => (
                  <div key={index} className="bg-card rounded-xl p-6 shadow-lg border border-border/50 fade-in-up-delay-1" data-testid={`third-party-${index}`}>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <h3 className="font-semibold text-foreground mb-1" data-testid={`service-name-${index}`}>
                          {service.name}
                        </h3>
                        <p className="text-sm text-muted-foreground" data-testid={`service-purpose-${index}`}>
                          {service.purpose}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-1">Data Collected</h4>
                        <p className="text-xs text-muted-foreground" data-testid={`service-data-${index}`}>
                          {service.dataCollected}
                        </p>
                      </div>
                      <div className="md:col-span-2">
                        <h4 className="text-sm font-medium text-foreground mb-1">Privacy Policy</h4>
                        <a 
                          href={service.privacyPolicy} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-primary hover:text-primary/80 underline"
                          data-testid={`service-privacy-${index}`}
                        >
                          View Privacy Policy
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Management */}
        <section className="py-16 bg-muted/30" data-testid="cookie-management">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center fade-in-up">Managing Your Cookie Preferences</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card rounded-xl p-8 shadow-lg border border-border/50 fade-in-up">
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                    <Settings className="w-6 h-6 mr-3 text-primary" />
                    Browser Settings
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    You can manage cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>View and delete existing cookies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Block cookies from specific sites</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Block third-party cookies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Clear cookies when you close the browser</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card rounded-xl p-8 shadow-lg border border-border/50 fade-in-up-delay-1">
                  <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                    <Shield className="w-6 h-6 mr-3 text-primary" />
                    Impact of Disabling Cookies
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Disabling certain cookies may affect your website experience:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-red-800 mb-1">Essential Cookies</h4>
                      <p className="text-xs text-red-700">
                        Disabling may prevent core website functionality from working properly.
                      </p>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-yellow-800 mb-1">Analytics Cookies</h4>
                      <p className="text-xs text-yellow-700">
                        We won't be able to improve our services based on usage patterns.
                      </p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-blue-800 mb-1">Functional Cookies</h4>
                      <p className="text-xs text-blue-700">
                        Your preferences and settings won't be remembered between visits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-background" data-testid="cookie-contact">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-xl p-8 shadow-lg border border-border/50 fade-in-up text-center">
                <h3 className="text-2xl font-bold text-foreground mb-6">Questions About Our Cookie Policy?</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  If you have any questions about our use of cookies or this Cookie Policy, please don't hesitate to contact us.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Email</h4>
                    <p className="text-sm text-muted-foreground">privacy@ac19global.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                    <p className="text-sm text-muted-foreground">0809 944 5455</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Address</h4>
                    <p className="text-sm text-muted-foreground">
                      18 Ibe Arinze Street<br />
                      Okota, Lagos, Nigeria
                    </p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  This Cookie Policy may be updated from time to time. We will notify you of any significant changes 
                  by posting the updated policy on our website.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}