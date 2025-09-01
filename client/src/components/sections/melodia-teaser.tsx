import { Zap, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MelodiaTeaser() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/10" data-testid="melodia-teaser-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-lg border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6" data-testid="melodia-badge">
                  <Zap className="w-4 h-4" />
                  <span>Training Partner</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="melodia-title">
                  Melodia Coding Academy
                </h2>
                <p className="text-lg text-muted-foreground mb-6" data-testid="melodia-description">
                  Accelerate your team's technical skills with our comprehensive coding and technology training programs. From beginner fundamentals to advanced specializations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    data-testid="button-explore-training"
                  >
                    Explore Training Programs
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border border-border text-foreground hover:bg-muted"
                    data-testid="button-schedule-consultation"
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </div>
              <div className="lg:text-right">
                {/* Coding/training themed illustration */}
                <div className="bg-gradient-to-br from-primary/20 to-accent/30 rounded-xl p-8 lg:p-12" data-testid="melodia-illustration">
                  <div className="grid grid-cols-3 gap-4 opacity-60">
                    <div className="bg-white/20 rounded h-4"></div>
                    <div className="bg-white/30 rounded h-4 col-span-2"></div>
                    <div className="bg-white/25 rounded h-4 col-span-2"></div>
                    <div className="bg-white/20 rounded h-4"></div>
                    <div className="bg-white/30 rounded h-4"></div>
                    <div className="bg-white/25 rounded h-4 col-span-2"></div>
                    <div className="bg-white/20 rounded h-4 col-span-3"></div>
                  </div>
                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center space-x-2 text-secondary">
                      <Code className="w-6 h-6" />
                      <span className="font-semibold">Code. Learn. Excel.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
