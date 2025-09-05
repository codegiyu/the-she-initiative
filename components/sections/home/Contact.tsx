import { RegularBtn } from '@/components/atoms/RegularBtn';
import { SectionHeading } from '@/components/general/SectionHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CONTACT_INFO_ROWS } from '@/lib/constants/texts';
import { LucideIconComp } from '@/lib/types/general';
import { Heart } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="section-block-padding bg-gradient-secondary">
      <div className="regular-container">
        {/* Header */}
        <SectionHeading
          title="Contact Us"
          // text="Join us in our mission to empower girls and young women. Whether you need support or
          //   want to help, we're here for you."
          className="text-center mb-16"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-elegant shadow-primary/20">
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
            <div className="bg-white p-8 rounded-xl shadow-elegant shadow-primary/20">
              <h3 className="font-montserrat font-bold text-2xl text-dark mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {CONTACT_INFO_ROWS.map((item, idx) => (
                  <ContactInfoRow key={idx} {...item} />
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-primary p-8 rounded-xl text-white shadow-elegant shadow-primary/20">
              <div className="text-center">
                <Heart className="w-12 h-12 mx-auto mb-4 text-white" />
                <h3 className="font-montserrat font-bold text-2xl mb-4">Make a Difference Today</h3>
                <p className="font-montserrat mb-6 leading-relaxed">
                  Your support can change lives. Join our community of supporters and help us build
                  a safer, more empowered future for girls and young women.
                </p>
                <div className="flex justify-center">
                  <RegularBtn
                    variant="outline"
                    text="Volunteer"
                    className="border-white text-white hover:bg-white hover:text-primary hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export interface ContactInfoRowProps {
  Icon: LucideIconComp;
  title: string;
  texts: ContactRowTextProps[];
  hideInFooter?: boolean;
}

export const ContactInfoRow = ({ Icon, title, texts }: ContactInfoRowProps) => {
  return (
    <div className="flex items-center">
      <div className="bg-primary-soft p-3 rounded-lg mr-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <div className="font-montserrat font-semibold text-dark">{title}</div>
        <div className="font-montserrat text-muted-foreground">
          {texts.map((item, idx, arr) => (
            <ContactRowText key={idx} {...item} isLast={idx === arr.length - 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export interface ContactRowTextProps {
  text: string;
  link?: string;
  isLast?: boolean;
}

export const ContactRowText = ({ text, link, isLast }: ContactRowTextProps) => {
  return (
    <>
      {link ? (
        <a
          href={link}
          className="no-underline hover:underline text-current hover:text-primary cursor-pointer">
          <span>{text}</span>
        </a>
      ) : (
        <span>{text}</span>
      )}
      {!isLast && <br />}
    </>
  );
};
