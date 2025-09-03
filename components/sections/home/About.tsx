export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-dark leading-tight">
                Our Mission & Vision
              </h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
            </div>

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow-soft border-l-4 border-primary">
                <h3 className="font-montserrat font-semibold text-xl text-dark mb-3">
                  Our Mission
                </h3>
                <p className="font-montserrat text-muted-foreground leading-relaxed">
                  To provide holistic support, protection and opportunities for girls and young
                  women by responding to gender-based violence, offering access to education, and
                  equipping them with financial and life skills that empower them to thrive.
                </p>
              </div>

              <div className="bg-primary-soft p-6 rounded-lg border-l-4 border-primary">
                <h3 className="font-montserrat font-semibold text-xl text-dark mb-3">Our Vision</h3>
                <p className="font-montserrat text-muted-foreground leading-relaxed">
                  A safe and inclusive society where every girl and young woman is free from
                  violence, educated, financially independent, and empowered to reach her full
                  potential.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-primary p-6 rounded-lg text-center text-white shadow-elegant">
              <div className="font-montserrat font-bold text-3xl lg:text-4xl mb-2">500+</div>
              <div className="font-montserrat font-medium">Lives Impacted</div>
            </div>
            <div className="bg-dark p-6 rounded-lg text-center text-white shadow-elegant">
              <div className="font-montserrat font-bold text-3xl lg:text-4xl mb-2">24/7</div>
              <div className="font-montserrat font-medium">Support Available</div>
            </div>
            <div className="bg-secondary p-6 rounded-lg text-center text-dark shadow-soft">
              <div className="font-montserrat font-bold text-3xl lg:text-4xl mb-2">100+</div>
              <div className="font-montserrat font-medium">Scholarships Provided</div>
            </div>
            <div className="bg-gradient-primary p-6 rounded-lg text-center text-white shadow-elegant">
              <div className="font-montserrat font-bold text-3xl lg:text-4xl mb-2">50+</div>
              <div className="font-montserrat font-medium">Seminars Hosted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
