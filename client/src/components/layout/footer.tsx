import { Twitter, Linkedin, Facebook, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Case Studies", href: "/news-insights" },
    { name: "News & Insights", href: "/news-insights" },
  ];

  const services = [
    { name: "Software Sourcing", href: "/services" },
    { name: "Needs Assessment", href: "/services" },
    { name: "Training Programs", href: "/melodia" },
    { name: "Support & Maintenance", href: "/services" },
    { name: "Digital Transformation", href: "/services" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Cookie Policy", href: "/cookie-policy" },
  ];

  return (
    <footer
      className="bg-secondary text-secondary-foreground"
      data-testid="footer-main"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div
            className="lg:col-span-1 w-60 h-60"
            data-testid="footer-company-info"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="">
                <img src="/images/logo2.PNG" alt="logo" />
              </div>
            </div>
            <p className="text-secondary-foreground/80 mb-6">
              Driving technology innovation and delivering exceptional value
              through comprehensive software solutions and expert training
              programs.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary btn-transition"
                data-testid="social-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary btn-transition"
                data-testid="social-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary btn-transition"
                data-testid="social-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div data-testid="footer-quick-links">
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-primary btn-transition"
                    data-testid={`footer-link-${link.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div data-testid="footer-services">
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-secondary-foreground/80 hover:text-primary btn-transition"
                    data-testid={`footer-service-${service.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div data-testid="footer-contact">
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div
                  className="text-secondary-foreground/80"
                  data-testid="footer-address"
                >
                  18 Ibe Arinze Street
                  <br />
                  Okota, Lagos, Nigeria
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:contact@ac19global.com"
                  className="text-secondary-foreground/80 hover:text-primary btn-transition"
                  data-testid="footer-email"
                >
                  contact@ac19global.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <div>
                    <a
                      href="tel:+2348099445455"
                      className="text-secondary-foreground/80 hover:text-primary btn-transition"
                      data-testid="footer-phone-1"
                    >
                      0809 944 5455
                    </a>
                  </div>
                  <div>
                    <a
                      href="tel:+2348088942129"
                      className="text-secondary-foreground/80 hover:text-primary btn-transition"
                      data-testid="footer-phone-2"
                    >
                      08088942129
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div
              className="text-secondary-foreground/60 text-sm"
              data-testid="footer-copyright"
            >
              © 2024 AC19 Global Services Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-secondary-foreground/60 hover:text-primary text-sm btn-transition"
                  data-testid={`footer-legal-${link.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
