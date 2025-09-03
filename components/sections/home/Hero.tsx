/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className="min-h-screen bg-secondary flex items-center justify-center overflow-hidden relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://static.thesolaceinitiative.org/images/home/hero-1.png"
          alt="Empowered young women standing together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <h1 className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white mb-6">
              Empowering her today, <span className="text-primary-glow">transforming tomorrow</span>
            </h1>
          </div>

          <div className="animate-slide-up">
            <p className="font-montserrat text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              The Initiative provides holistic support, protection and opportunities for girls and
              young women by responding to gender-based violence and empowering them to thrive.
            </p>
          </div>

          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Button
              size="lg"
              className="font-montserrat font-semibold text-lg px-8 py-4 bg-primary hover:bg-primary-glow text-primary-foreground shadow-elegant transition-all duration-300 hover:scale-105">
              Get Support Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="font-montserrat font-semibold text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-secondary transition-all duration-300">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
