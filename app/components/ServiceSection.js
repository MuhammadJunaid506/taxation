import React from 'react';

const services = [
  {
    title: 'Tax Preparation',
    description: 'Professional tax preparation services to ensure you get the maximum refund and stay compliant with tax regulations.',
    icon: '💼',
  },
  {
    title: 'Accounting Services',
    description: 'Comprehensive accounting services to manage your financial records accurately and efficiently.',
    icon: '📊',
  },
  {
    title: 'Business Consulting',
    description: 'Expert business consulting to help you make informed decisions and grow your business.',
    icon: '💡',
  },
  {
    title: 'Financial Planning',
    description: 'Strategic financial planning to secure your financial future and achieve your long-term goals.',
    icon: '📈',
  },
  {
    title: 'Audit & Assurance',
    description: 'Thorough audit and assurance services to ensure compliance and enhance business performance.',
    icon: '🔍',
  },
  {
    title: 'Payroll Services',
    description: 'Efficient payroll services to manage employee payments and ensure compliance with regulations.',
    icon: '💳',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">We provide a wide range of professional services to meet your needs. We promise to provide every service with a smile, and to your highest level of satisfaction.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 bg-gray-100 rounded-lg shadow-lg">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
