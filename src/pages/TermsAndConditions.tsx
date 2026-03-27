export function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-36 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Legal</p>
        <h1 className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-12 leading-none">Terms &amp; Conditions</h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>By accessing and using the True North Strategies website and services, you agree to be bound by these Terms and Conditions.</p>
          <h2 className="font-heading text-2xl uppercase text-foreground mt-10 mb-4">Use of Services</h2>
          <p>Our coaching services are intended for home service business owners and their teams. You agree to use our services only for lawful purposes and in accordance with these Terms.</p>
          <h2 className="font-heading text-2xl uppercase text-foreground mt-10 mb-4">Intellectual Property</h2>
          <p>All content on this website, including coaching materials, frameworks, and methodologies, is the property of True North Strategies and is protected by applicable intellectual property laws.</p>
          <h2 className="font-heading text-2xl uppercase text-foreground mt-10 mb-4">Limitation of Liability</h2>
          <p>True North Strategies provides coaching and advisory services. Results may vary based on individual business circumstances. We make no guarantees of specific financial outcomes.</p>
          <h2 className="font-heading text-2xl uppercase text-foreground mt-10 mb-4">Contact Us</h2>
          <p>For questions about these Terms, contact us at <a href="mailto:info@truenorthstrategies.com" className="text-primary hover:underline">info@truenorthstrategies.com</a>.</p>
          <p className="text-xs text-muted-foreground/60 mt-12">Last updated: {new Date().getFullYear()}</p>
        </div>
      </div>
    </main>
  );
}
