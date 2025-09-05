import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20 bg-background" data-testid="cta-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="cta-title">
            Ready to Transform Your Technology Infrastructure?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="cta-description">
            Let's discuss how AC19 Global Services can accelerate your digital transformation and deliver measurable business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 shadow-lg"
              data-testid="button-start-project"
            >
              Start Your Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border border-border text-foreground hover:bg-muted px-8 py-4"
              data-testid="button-schedule-consultation-cta"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
