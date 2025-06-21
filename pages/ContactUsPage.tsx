
import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, InformationCircleIcon } from '../components/IconComponents';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof FormData]) {
        setErrors({ ...errors, [e.target.name]: undefined });
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
        newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
        console.log('Form data submitted:', formData);
        setIsSubmitted(true);
        // Here you would typically send the data to a backend
    }
  };

  return (
    <div className="animate-fadeIn">
      {/* Page Header */}
      <header className="bg-gradient-to-r from-primary to-accent py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionTitle title="Get In Touch" subtitle="Contact Us" />
          <p className="mt-2 text-lg max-w-2xl mx-auto">
            We're here to help and answer any question you might have. We look forward to hearing from you!
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-3 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 mb-12 lg:mb-0">
            <h2 className="text-2xl font-semibold font-serif text-neutral-dark mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPinIcon className="h-8 w-8 text-primary mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-neutral-dark">Our Office</h3>
                  <p className="text-neutral">123 Learning Lane, Education City, EC 45678</p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="h-8 w-8 text-primary mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-neutral-dark">Call Us</h3>
                  <p className="text-neutral">(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start">
                <EnvelopeIcon className="h-8 w-8 text-primary mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-neutral-dark">Email Us</h3>
                  <p className="text-neutral">support@eduplatform.com</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-neutral-light">
              <h3 className="text-lg font-medium text-neutral-dark">Office Hours</h3>
              <p className="text-neutral">Monday - Friday: 9 AM - 5 PM</p>
              <p className="text-neutral">Saturday - Sunday: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {isSubmitted ? (
              <div className="p-8 bg-secondary/10 text-center rounded-lg shadow-subtle">
                <InformationCircleIcon className="h-16 w-16 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-secondary mb-2">Thank You!</h3>
                <p className="text-neutral-dark">Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-interactive space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-dark">Full Name</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange}
                         className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-neutral-light focus:ring-primary focus:border-primary'}`} />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-dark">Email Address</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange}
                         className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-neutral-light focus:ring-primary focus:border-primary'}`} />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-dark">Subject</label>
                  <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange}
                         className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${errors.subject ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-neutral-light focus:ring-primary focus:border-primary'}`} />
                  {errors.subject && <p className="mt-1 text-xs text-red-600">{errors.subject}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-dark">Message</label>
                  <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange}
                            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${errors.message ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-neutral-light focus:ring-primary focus:border-primary'}`}></textarea>
                  {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                </div>
                <div>
                  <Button type="submit" fullWidth>Send Message</Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Embedded Google Map (Placeholder) */}
      <section className="bg-neutral-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <SectionTitle title="Find Us On The Map" centered/>
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-interactive">
            {/* Replace with actual Google Maps embed iframe */}
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.684940552809!2d-74.0083018845941!3d40.71277697933194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3b49523%3A0x1ba7968565259972!2sNew%20York%20City%20Hall!5e0!3m2!1sen!2sus!4v1627889579308!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{ border:0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps Location"
            ></iframe>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
