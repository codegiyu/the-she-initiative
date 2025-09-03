import { Shield, Heart, CheckCircle, Home, Scale, Users } from 'lucide-react';

export const Values = () => {
  const values = [
    {
      icon: Shield,
      title: 'Empowerment',
      description: 'Building confidence and strength in every girl and young woman we serve',
    },
    {
      icon: Heart,
      title: 'Compassion',
      description: 'Approaching every situation with understanding, empathy and care',
    },
    {
      icon: CheckCircle,
      title: 'Integrity',
      description: 'Maintaining the highest standards of honesty and ethical conduct',
    },
    {
      icon: Home,
      title: 'Safety',
      description: 'Creating secure environments where healing and growth can flourish',
    },
    {
      icon: Scale,
      title: 'Equality',
      description: 'Ensuring equal opportunities and treatment for all individuals',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working together with communities to create lasting positive change',
    },
  ];

  return (
    <section id="values" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-dark mb-4">
            Our Values
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="font-montserrat text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            These core values guide everything we do and shape how we serve our community with
            purpose and dedication.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-soft hover:shadow-elegant transition-all duration-300 border border-border hover:border-primary/20">
              <div className="mb-6">
                <div className="bg-primary-soft p-4 rounded-lg w-fit group-hover:bg-gradient-primary transition-all duration-300">
                  <value.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
              </div>

              <h3 className="font-montserrat font-bold text-xl text-dark mb-3 group-hover:text-primary transition-colors duration-300">
                {value.title}
              </h3>

              <p className="font-montserrat text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-primary p-12 rounded-2xl text-white shadow-elegant max-w-4xl mx-auto">
            <blockquote className="font-montserrat text-2xl lg:text-3xl font-medium leading-relaxed mb-6">
              &quot;When we empower one girl, we empower an entire community. When we transform one
              life, we transform the future.&quot;
            </blockquote>
            <cite className="font-montserrat font-semibold text-lg">— The Initiative Team</cite>
          </div>
        </div>
      </div>
    </section>
  );
};
