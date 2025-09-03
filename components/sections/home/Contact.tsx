import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl text-dark mb-4">
            Get Involved
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6"></div>
          <p className="font-montserrat text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join us in our mission to empower girls and young women. Whether you need support or
            want to help, we&apos;re here for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-elegant">
            <h3 className="font-montserrat font-bold text-2xl text-dark mb-6">Send Us a Message</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-montserrat font-medium text-dark block mb-2">
                    First Name
                  </label>
                  <Input placeholder="Enter your first name" className="font-montserrat" />
                </div>
                <div>
                  <label className="font-montserrat font-medium text-dark block mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Enter your last name" className="font-montserrat" />
                </div>
              </div>

              <div>
                <label className="font-montserrat font-medium text-dark block mb-2">
                  Email Address
                </label>
                <Input type="email" placeholder="Enter your email" className="font-montserrat" />
              </div>

              <div>
                <label className="font-montserrat font-medium text-dark block mb-2">Subject</label>
                <Input placeholder="What is this about?" className="font-montserrat" />
              </div>

              <div>
                <label className="font-montserrat font-medium text-dark block mb-2">Message</label>
                <Textarea
                  placeholder="Tell us how we can help or how you'd like to get involved"
                  className="font-montserrat min-h-[120px]"
                />
              </div>

              <Button className="w-full font-montserrat font-semibold bg-primary hover:bg-primary-glow text-primary-foreground">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white p-8 rounded-xl shadow-elegant">
              <h3 className="font-montserrat font-bold text-2xl text-dark mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-primary-soft p-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-montserrat font-semibold text-dark">Emergency Hotline</div>
                    <div className="font-montserrat text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-primary-soft p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-montserrat font-semibold text-dark">Email Us</div>
                    <div className="font-montserrat text-muted-foreground">
                      help@theinitiative.org
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-primary-soft p-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-montserrat font-semibold text-dark">Visit Us</div>
                    <div className="font-montserrat text-muted-foreground">
                      123 Hope Street, Community Center
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-primary-soft p-3 rounded-lg mr-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-montserrat font-semibold text-dark">Office Hours</div>
                    <div className="font-montserrat text-muted-foreground">
                      Mon-Fri: 9AM-6PM
                      <br />
                      Emergency: 24/7
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-primary p-8 rounded-xl text-white shadow-elegant">
              <div className="text-center">
                <Heart className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="font-montserrat font-bold text-2xl mb-4">Make a Difference Today</h3>
                <p className="font-montserrat mb-6 leading-relaxed">
                  Your support can change lives. Join our community of supporters and help us build
                  a safer, more empowered future for girls and young women.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="outline"
                    className="font-montserrat font-semibold border-white text-white hover:bg-white hover:text-primary">
                    Donate Now
                  </Button>
                  <Button
                    variant="outline"
                    className="font-montserrat font-semibold border-white text-white hover:bg-white hover:text-primary">
                    Volunteer
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
