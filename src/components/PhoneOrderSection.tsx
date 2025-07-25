const PhoneOrderSection = () => {
  return (
    <section className="py-16 bg-background-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Order over the phone for pickup!
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          If you want to avoid additional fees that are associated with placing your order online, 
          you can call the store at{" "}
          <a 
            href="tel:+16023849993" 
            className="text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            (602) 384-9993
          </a>{" "}
          or place your order at the store.
        </p>
      </div>
    </section>
  );
};

export default PhoneOrderSection;