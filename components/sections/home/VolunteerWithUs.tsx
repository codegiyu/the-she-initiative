import { SheiForm } from '@/components/forms/RequestForms';
import { SectionHeading } from '@/components/general/SectionHeading';
// import { useState } from 'react';

export const VolunteerWithUs = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   interests: '',
  //   availability: '',
  //   experience: '',
  //   message: '',
  // });

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  // ) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   console.log('Form submitted:', formData);
  // };

  return (
    <section id="volunteer-with-us" className="section-block-padding bg-white">
      <div className="regular-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content */}
          <div className="space-y-8">
            <SectionHeading title="Volunteer With Us" className="mb-16" />

            <p className="font-montserrat text-lg text-muted-foreground leading-relaxed">
              Join our passionate team of volunteers and make a direct impact in the lives of girls
              and young women in our community. Whether you have an hour a week or can commit to
              regular involvement, there&apos;s a place for you.
            </p>

            <div className="space-y-4">
              <h3 className="font-montserrat font-bold text-xl text-dark">How You Can Help:</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="font-montserrat text-muted-foreground">
                    Mentoring and counseling support
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="font-montserrat text-muted-foreground">
                    Event planning and coordination
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="font-montserrat text-muted-foreground">
                    Skills training workshops
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="font-montserrat text-muted-foreground">
                    Administrative and outreach support
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="font-montserrat text-muted-foreground">
                    Fundraising and community engagement
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <SheiForm slug="volunteer_with_us" />
        </div>
      </div>
    </section>
  );
};
