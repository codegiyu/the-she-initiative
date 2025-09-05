'use client';
import { SectionHeading } from '@/components/general/SectionHeading';
import { useState } from 'react';

export const VolunteerWithUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: '',
    availability: '',
    experience: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

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
          <div className="bg-card p-8 rounded-xl shadow-soft shadow-primary/15 border border-border">
            <h3 className="font-montserrat font-bold text-2xl text-dark mb-6">
              Get Involved Today
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-montserrat font-medium text-dark mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 font-montserrat"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-montserrat font-medium text-dark mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 font-montserrat"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block font-montserrat font-medium text-dark mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 font-montserrat"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="interests"
                  className="block font-montserrat font-medium text-dark mb-2">
                  Areas of Interest *
                </label>
                <select
                  id="interests"
                  name="interests"
                  required
                  value={formData.interests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 font-montserrat">
                  <option value="">Select an area of interest</option>
                  <option value="mentoring">Mentoring & Counseling</option>
                  <option value="events">Event Planning</option>
                  <option value="workshops">Skills Training</option>
                  <option value="admin">Administrative Support</option>
                  <option value="fundraising">Fundraising</option>
                  <option value="outreach">Community Outreach</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="availability"
                  className="block font-montserrat font-medium text-dark mb-2">
                  Availability *
                </label>
                <select
                  id="availability"
                  name="availability"
                  required
                  value={formData.availability}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 font-montserrat">
                  <option value="">Select your availability</option>
                  <option value="few-hours-week">A few hours per week</option>
                  <option value="few-hours-month">A few hours per month</option>
                  <option value="weekends">Weekends only</option>
                  <option value="evenings">Evenings only</option>
                  <option value="flexible">Flexible schedule</option>
                  <option value="events-only">Events and special occasions only</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="experience"
                  className="block font-montserrat font-medium text-dark mb-2">
                  Relevant Experience
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 font-montserrat resize-none"
                  placeholder="Tell us about any relevant experience or skills you have"></textarea>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-montserrat font-medium text-dark mb-2">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 font-montserrat resize-none"
                  placeholder="Tell us why you want to volunteer with The Initiative and any questions you might have"></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-primary text-white px-6 py-4 rounded-lg font-montserrat font-semibold hover:opacity-90 transition-all duration-300 shadow-elegant shadow-primary/20">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
