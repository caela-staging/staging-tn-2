export function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-foreground pt-36 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Legal</p>
        <h1 className="font-heading text-4xl md:text-5xl uppercase text-foreground mb-12 leading-none">Privacy Policy</h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground leading-relaxed space-y-6">
          <p>This Privacy Policy describes how True North Strategies ("we," "us," or "our") collects, uses, and shares information about you when you use our website and services.</p>
          <h2 className="font-heading text-2xl uppercase text-foreground mt-10 mb-4">Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you fill out a contact form, book a discovery call, or communicate with us. This may include your name, email address, phone number, and company name.</p>
          <h2 className="font-heading text-2xl uppercase text-foreground mt-10 mb-4">How We Use Your Information</h2>
          <p>We use the information we collect to respond to your inquiries, provide coaching services, send you relevant communications, and improve our website and offerings.</p>
          <h2 className="font-heading text-2xl uppercase text-foreground mt-10 mb-4">Information Sharing</h2>
          <p>We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.</p>
          <h2 className="font-heading text-2xl uppercase text-foreground mt-10 mb-4">Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:info@truenorthstrategies.com" className="text-primary hover:underline">info@truenorthstrategies.com</a>.</p>
          <p className="text-xs text-muted-foreground/60 mt-12">Last updated: {new Date().getFullYear()}</p>
        </div>
      </div>
    </main>
  );
}
