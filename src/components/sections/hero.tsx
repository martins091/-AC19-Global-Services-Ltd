import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Globe2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-gradient pt-16 min-h-screen flex items-center relative overflow-hidden" data-testid="hero-section">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-primary/30 rounded-full floating-animation"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-white/20 rounded-full floating-delay"></div>
        <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-primary/20 rounded-full floating-animation"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-white/30 rounded-full floating-delay"></div>
      </div>

      {/* Tech-themed background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3Ccircle cx="10" cy="10" r="1"/%3E%3Ccircle cx="50" cy="10" r="1"/%3E%3Ccircle cx="10" cy="50" r="1"/%3E%3Ccircle cx="50" cy="50" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white">
          {/* Animated badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-8 fade-in-up">
            <Zap className="w-4 h-4" />
            <span>Leading Technology Solutions Provider</span>
            <Globe2 className="w-4 h-4" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight fade-in-up-delay-1" data-testid="hero-headline">
            Driving Technology.<br />
            <span className="text-shimmer">Delivering Value.</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed fade-in-up-delay-2" data-testid="hero-subtext">
            AC19 Global Services Ltd specializes in sourcing, deploying, supporting, and training software applications across industries, institutions, and public agencies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-in-up-delay-3">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 shadow-2xl hover:shadow-xl btn-transition pulse-glow group"
              data-testid="button-explore-services"
            >
              <span className="flex items-center space-x-2">
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/50 backdrop-blur-sm text-white hover:bg-white hover:text-secondary px-10 py-6 btn-transition"
              data-testid="button-partner-with-us"
            >
              Partner With Us
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto fade-in-up-delay-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">500+</div>
              <div className="text-sm text-gray-300">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">50+</div>
              <div className="text-sm text-gray-300">Global Partners</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">25+</div>
              <div className="text-sm text-gray-300">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">10K+</div>
              <div className="text-sm text-gray-300">Professionals Trained</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
