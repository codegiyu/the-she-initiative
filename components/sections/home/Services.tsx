import { Shield, GraduationCap, Heart, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Gender-Based Violence Response',
      description:
        '24/7 response team providing immediate support, protection, and resources for victims of gender-based violence.',
      features: [
        'Crisis intervention and emergency support',
        'Safe shelter and temporary accommodation',
        'Legal assistance and advocacy',
        'Counseling and trauma therapy',
      ],
    },
    {
      icon: GraduationCap,
      title: 'Empowerment & Education',
      description:
        'Comprehensive programs to improve lives through education, financial literacy, and life skills development.',
      features: [
        'School fee assistance and scholarships',
        'Financial literacy seminars for women',
        'Life skills and leadership training',
        'Mentorship and career guidance',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-dark mb-4">
            What We Do
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="font-montserrat text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive approach addresses immediate safety needs while building long-term
            empowerment and independence for girls and young women.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-elegant hover:shadow-soft transition-all duration-300 border border-border">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-primary p-3 rounded-lg mr-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-2xl text-dark">{service.title}</h3>
              </div>

              <p className="font-montserrat text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Heart className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="font-montserrat text-dark">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="font-montserrat font-semibold bg-primary hover:bg-primary-glow text-primary-foreground w-full">
                Learn More
              </Button>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 bg-dark p-8 rounded-xl text-center text-white shadow-elegant">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <Phone className="w-12 h-12 text-primary-glow" />
            </div>
            <h3 className="font-montserrat font-bold text-2xl mb-4">Need Immediate Help?</h3>
            <p className="font-montserrat text-lg mb-6">
              Our response team is available 24/7 for emergency situations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="font-montserrat font-semibold bg-primary hover:bg-primary-glow text-primary-foreground">
                Call Emergency Line
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="font-montserrat font-semibold border-white text-white hover:bg-white hover:text-dark">
                Online Support Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
