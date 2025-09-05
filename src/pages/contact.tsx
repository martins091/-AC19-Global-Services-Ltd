import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Office",
      details: ["18 Ibe Arinze Street", "Okota, Lagos, Nigeria"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["0809 944 5455", "08088942129"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["contact@ac19global.com", "info@ac19global.com"],
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
      action: "View Schedule"
    }
  ];

  const services = [
    "Software Sourcing & Procurement",
    "Critical Needs Assessment", 
    "Third-Party Engagement",
    "Training & Development",
    "Support & Maintenance",
    "Digital Transformation Consulting",
    "Cybersecurity Solutions",
    "Project Management Office (PMO)",
    "Other - Please Specify"
  ];

  const departments = [
    "General Inquiry",
    "Sales & Business Development",
    "Technical Support",
    "Training & Education",
    "Partnership Opportunities",
    "Media & Press",
    "Careers & HR"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/10" data-testid="contact-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 fade-in-up" data-testid="contact-title">
                Get in <span className="text-shimmer">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed fade-in-up-delay-1" data-testid="contact-subtitle">
                Ready to transform your organization with cutting-edge technology solutions? 
                We're here to help you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up-delay-2">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4" data-testid="button-schedule-call">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule a Call
                </Button>
                <Button variant="outline" size="lg" className="border border-border text-foreground hover:bg-muted px-8 py-4" data-testid="button-emergency-support">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Emergency Support
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-background" data-testid="contact-info">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 fade-in-up" data-testid="info-title">
                Contact Information
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up-delay-1" data-testid="info-subtitle">
                Multiple ways to reach us for your convenience
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const animationDelay = index === 0 ? "fade-in-up" : index === 1 ? "fade-in-up-delay-1" : index === 2 ? "fade-in-up-delay-2" : "fade-in-up-delay-3";
                return (
                  <div key={index} className={`bg-card rounded-xl p-8 shadow-lg card-hover border border-border/50 text-center ${animationDelay}`} data-testid={`contact-card-${index}`}>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 floating-animation">
                      <IconComponent className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-4" data-testid={`contact-title-${index}`}>
                      {info.title}
                    </h3>
                    <div className="space-y-2 mb-6">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground" data-testid={`contact-detail-${index}-${detailIndex}`}>
                          {detail}
                        </p>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="border border-border text-foreground hover:bg-muted" data-testid={`contact-action-${index}`}>
                      {info.action}
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-20 bg-muted/30" data-testid="contact-form-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="fade-in-up">
                <div className="bg-card rounded-2xl p-8 shadow-xl border border-border/50">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6" data-testid="form-title">
                    Send Us a Message
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Fill out the form below and we'll get back to you within 24 hours. For urgent matters, 
                    please call us directly.
                  </p>
                  
                  <form className="space-y-6" data-testid="contact-form">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          First Name *
                        </label>
                        <Input
                          type="text"
                          placeholder="John"
                          required
                          data-testid="input-first-name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Last Name *
                        </label>
                        <Input
                          type="text"
                          placeholder="Doe"
                          required
                          data-testid="input-last-name"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          placeholder="john.doe@company.com"
                          required
                          data-testid="input-email"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          placeholder="+234 xxx xxx xxxx"
                          data-testid="input-phone"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Company/Organization
                        </label>
                        <Input
                          type="text"
                          placeholder="Your Company Name"
                          data-testid="input-company"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Department
                        </label>
                        <Select>
                          <SelectTrigger data-testid="select-department">
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                          <SelectContent>
                            {departments.map((dept, index) => (
                              <SelectItem key={index} value={dept}>
                                {dept}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Service of Interest
                      </label>
                      <Select>
                        <SelectTrigger data-testid="select-service">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service, index) => (
                            <SelectItem key={index} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        placeholder="Tell us about your project requirements, challenges, or how we can help you..."
                        rows={6}
                        required
                        data-testid="textarea-message"
                      />
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="newsletter"
                        className="mt-1"
                        data-testid="checkbox-newsletter"
                      />
                      <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                        I would like to receive updates about AC19 Global Services' latest insights and offerings.
                      </label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                      data-testid="button-send-message"
                    >
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>

              {/* Map and Office Info */}
              <div className="fade-in-up-delay-1">
                <div className="bg-card rounded-2xl p-8 shadow-xl border border-border/50 h-full">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6" data-testid="office-title">
                    Visit Our Office
                  </h3>
                  
                  {/* Map Placeholder */}
                  <div className="bg-gradient-to-br from-primary/10 to-accent/20 rounded-xl h-64 flex items-center justify-center mb-8" data-testid="map-placeholder">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-primary mx-auto mb-4 floating-animation" />
                      <div className="text-lg font-semibold text-foreground">Interactive Map</div>
                      <div className="text-sm text-muted-foreground">18 Ibe Arinze Street, Okota, Lagos</div>
                    </div>
                  </div>

                  {/* Office Details */}
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Address</h4>
                        <p className="text-muted-foreground">
                          18 Ibe Arinze Street<br />
                          Okota, Lagos, Nigeria
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Globe className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Coverage Area</h4>
                        <p className="text-muted-foreground">
                          We serve clients across Nigeria and West Africa, with remote support capabilities worldwide.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Office Hours</h4>
                        <div className="text-muted-foreground space-y-1">
                          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                          <p>Saturday: 9:00 AM - 2:00 PM</p>
                          <p>Sunday: Closed</p>
                          <p className="text-sm text-primary">24/7 Emergency Support Available</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">Getting Here</h4>
                      <p className="text-sm text-muted-foreground">
                        Our office is easily accessible by public transport and has parking available for visitors. 
                        We're located in the heart of Okota, Lagos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-background" data-testid="faq-section">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 fade-in-up" data-testid="faq-title">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground fade-in-up-delay-1" data-testid="faq-subtitle">
                  Quick answers to common questions about our services and processes
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    question: "How quickly can you respond to service requests?",
                    answer: "We typically respond to initial inquiries within 2-4 hours during business hours. For emergency support, we offer 24/7 response with guaranteed response times based on your service level agreement."
                  },
                  {
                    question: "Do you work with organizations outside of Lagos?",
                    answer: "Yes, we serve clients across Nigeria and West Africa. Many of our services can be delivered remotely, and we travel to client locations for on-site implementations and training."
                  },
                  {
                    question: "What is your typical project timeline?",
                    answer: "Project timelines vary based on scope and complexity. Simple software implementations can take 2-4 weeks, while comprehensive digital transformation projects may take 3-6 months. We provide detailed timelines during our initial consultation."
                  },
                  {
                    question: "Do you provide ongoing support after implementation?",
                    answer: "Absolutely. We offer comprehensive support packages including maintenance, updates, user training, and technical support. Our goal is to ensure your long-term success with the technology solutions we implement."
                  }
                ].map((faq, index) => (
                  <div key={index} className={`bg-card rounded-xl p-6 shadow-lg border border-border/50 fade-in-up${index > 0 ? '-delay-1' : ''}`} data-testid={`faq-item-${index}`}>
                    <h3 className="text-lg font-semibold text-foreground mb-3" data-testid={`faq-question-${index}`}>
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed" data-testid={`faq-answer-${index}`}>
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}