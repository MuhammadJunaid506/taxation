import React from 'react';

const testimonials = [
  {
    name: 'John Doe',
    title: 'CEO at Company Inc.',
    image: 'https://c.pxhere.com/photos/08/7a/male_portrait_profile_social_media_cv_young_elegant_suit-459413.jpg!d',
    testimonial: 'This taxation service is fantastic! They saved us a lot of money and made the process so easy.',
  },
  {
    name: 'Jane Smith',
    title: 'CFO at Business Corp.',
    image: 'https://c.pxhere.com/photos/08/7a/male_portrait_profile_social_media_cv_young_elegant_suit-459413.jpg!d',
    testimonial: 'Highly professional and reliable. I highly recommend their services to anyone looking for top-notch tax solutions.',
  },
  {
    name: 'Samuel Green',
    title: 'Founder at Startup LLC',
    image: 'https://c.pxhere.com/photos/08/7a/male_portrait_profile_social_media_cv_young_elegant_suit-459413.jpg!d',
    testimonial: 'They handled our taxes with great expertise. The team is very knowledgeable and responsive.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Our Clients</h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((client, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{client.name}</h3>
                <p className="text-gray-600 mb-4">{client.title}</p>
                <p className="text-gray-700">"{client.testimonial}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
