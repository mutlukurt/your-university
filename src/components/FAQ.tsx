import { Disclosure } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "What are the application deadlines?",
    answer: "Fall semester applications are due March 1st for domestic students and January 15th for international students. Spring semester applications are due October 1st. We also offer rolling admissions for certain programs."
  },
  {
    question: "Do you offer scholarships for international students?",
    answer: "Yes, we offer merit-based scholarships for international students, including the Global Excellence Scholarship covering up to 50% tuition. Need-based aid and work-study programs are also available."
  },
  {
    question: "Is on-campus housing guaranteed for first-year students?",
    answer: "Yes, we guarantee on-campus housing for all first-year students who apply by the priority deadline. Our residence halls feature modern amenities, dining options, and 24/7 support staff."
  },
  {
    question: "What support services are available for students?",
    answer: "We offer comprehensive support including academic tutoring, career counseling, mental health services, disability accommodations, and international student services. Our student success center provides personalized guidance."
  },
  {
    question: "Can I change my major after enrollment?",
    answer: "Absolutely! Many students change majors during their studies. Our academic advisors help you explore options and ensure a smooth transition. Some programs may have specific requirements or application processes."
  },
  {
    question: "What are the class sizes and student-to-faculty ratio?",
    answer: "Our average class size is 18 students with a 12:1 student-to-faculty ratio. This ensures personalized attention and meaningful relationships with professors who are leaders in their fields."
  }
];

export default function FAQ() {
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          viewport={{ once: true }}
        >
          <Disclosure>
            {({ open }) => (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <Disclosure.Button className="flex justify-between items-center w-full px-4 md:px-6 py-4 md:py-5 text-left focus:outline-none focus:ring-2 focus:ring-primary/50 hover:bg-gray-50 transition-colors">
                  <span className="text-sm md:text-base font-semibold text-text pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`${
                      open ? 'rotate-180' : ''
                    } w-4 md:w-5 h-4 md:h-5 text-accent transition-transform duration-200 flex-shrink-0`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 md:px-6 pb-4 md:pb-5">
                  <p className="text-sm md:text-base text-muted leading-relaxed">{faq.answer}</p>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        </motion.div>
      ))}
    </div>
  );
}