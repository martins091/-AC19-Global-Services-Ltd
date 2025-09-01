import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="hero-gradient pt-16 min-h-screen flex items-center relative overflow-hidden" data-testid="hero-section">
      <div className="absolute inset-0 bg-black/20"></div>
      
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
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="hero-headline">
            Driving Technology.<br />
            <span className="text-primary">Delivering Value.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="hero-subtext">
            AC19 Global Services Ltd specializes in sourcing, deploying, supporting, and training software applications across industries, institutions, and public agencies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 shadow-lg hover:shadow-xl"
              data-testid="button-explore-services"
            >
              Explore Our Services
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-secondary px-8 py-4"
              data-testid="button-partner-with-us"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
