import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send the data to an API or email)
    alert('Form submitted!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="bg-[#0E0F1A] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Contact Form */}
        <div className="mt-10 md:mt-0">
          <h2 className="font-semibold text-white text-2xl pt-6 mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#1A1C26] border border-gray-600 text-white rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-[#1A1C26] border border-gray-600 text-white rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-400 mb-2">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 bg-[#1A1C26] border border-gray-600 text-white rounded-md"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#000080] to-[#4169E1] text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Details */}
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-semibold text-white mb-2">Nigeria</h2>
            <p>55G Adebisi Omotola Close,</p>
            <p>Off Samuel Adedoyin Street, Victoria Island</p>
            <p>Tel: +234 818 444 1404</p>
          </div>

          <div>
            <h2 className="font-semibold text-white mb-2">United Kingdom</h2>
            <p>39 Kenyon Lane, Off Moston Lane, Moston, Manchester, M40 9JG</p>
            <p>Tel: +44 161 948 1444</p>
          </div>

          <div>
            <h2 className="font-semibold text-white mb-2">United Arab Emirates</h2>
            <p>Tel: +971 50 423 8817</p>
          </div>

          <div>
            <h2 className="font-semibold text-white mb-2">Canada</h2>
            <p>Tel: +1 647 977 1435</p>
          </div>

          <div className="md:col-span-2">
            <h2 className="font-semibold text-white mb-2">Email</h2>
            <p>enquiries@keysystemltd.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
