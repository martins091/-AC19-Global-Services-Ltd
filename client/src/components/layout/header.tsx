import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationLinks = [
    { name: "Home", href: "#", active: true },
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Industries", href: "#" },
    { name: "News & Insights", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-300 ${
        isScrolled ? "scroll-shadow" : ""
      }`}
      data-testid="header-main"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2" data-testid="logo-section">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">AC</span>
          </div>
          <div className="hidden sm:block">
            <div className="text-lg font-semibold text-foreground">AC19 Global Services</div>
            <div className="text-xs text-muted-foreground">Technology Solutions</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8" data-testid="desktop-navigation">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium btn-transition ${
                link.active
                  ? "text-foreground hover:text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
              data-testid={`nav-link-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {link.name}
            </a>
          ))}

          {/* Training Partners Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className="text-muted-foreground hover:text-primary btn-transition font-medium flex items-center space-x-1"
              data-testid="dropdown-training-partners"
            >
              <span>Training Partners</span>
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64" align="center">
              <DropdownMenuItem className="flex flex-col items-start p-4">
                <div className="font-medium">Melodia Coding Academy</div>
                <div className="text-sm text-muted-foreground">Professional Development Training</div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              data-testid="mobile-menu-trigger"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-6">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block px-4 py-2 text-lg font-medium btn-transition ${
                    link.active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.name}
                </a>
              ))}
              <div className="border-t pt-4">
                <div className="px-4 py-2">
                  <div className="font-medium text-foreground mb-2">Training Partners</div>
                  <a
                    href="#"
                    className="block text-muted-foreground hover:text-primary btn-transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid="mobile-nav-melodia"
                  >
                    Melodia Coding Academy
                  </a>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
