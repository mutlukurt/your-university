import { useState } from 'react';
import { Send, User, Mail, MessageSquare, GraduationCap } from 'lucide-react';
import Button from './Button';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

const interests = [
  'Undergraduate Programs',
  'Graduate Programs',
  'Online Learning',
  'Scholarships & Financial Aid',
  'Campus Life',
  'International Students',
  'Transfer Students',
  'Campus Tours',
  'Other'
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8 md:py-12">
        <div className="w-16 md:w-20 h-16 md:h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
          <Send size={24} />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-text mb-2 md:mb-3">Message Sent!</h3>
        <p className="text-base md:text-lg text-muted">
          Thank you for your interest. We'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
      {/* Name Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm md:text-base font-medium text-text mb-2">
            First Name *
          </label>
          <div className="relative">
            <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" />
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm md:text-base"
              placeholder="Enter your first name"
            />
          </div>
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm md:text-base font-medium text-text mb-2">
            Last Name *
          </label>
          <div className="relative">
            <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" />
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm md:text-base"
              placeholder="Enter your last name"
            />
          </div>
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm md:text-base font-medium text-text mb-2">
          Email Address *
        </label>
        <div className="relative">
          <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm md:text-base"
            placeholder="Enter your email address"
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm md:text-base font-medium text-text mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm md:text-base"
          placeholder="Enter your phone number"
        />
      </div>

      {/* Interest */}
      <div>
        <label htmlFor="interest" className="block text-sm md:text-base font-medium text-text mb-2">
          I'm interested in *
        </label>
        <div className="relative">
          <GraduationCap size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" />
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm md:text-base appearance-none bg-white"
          >
            <option value="">Select your area of interest</option>
            {interests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm md:text-base font-medium text-text mb-2">
          Message *
        </label>
        <div className="relative">
          <MessageSquare size={18} className="absolute left-3 top-3 text-muted" />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-sm md:text-base resize-none"
            placeholder="Tell us about your questions or interests..."
          />
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full justify-center text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
            Sending Message...
          </>
        ) : (
          <>
            <Send size={18} className="mr-2" />
            Send Message
          </>
        )}
      </Button>

      <p className="text-xs md:text-sm text-muted text-center">
        By submitting this form, you agree to our privacy policy and terms of service.
      </p>
    </form>
  );
}