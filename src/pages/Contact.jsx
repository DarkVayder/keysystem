import React from 'react';

const Contact = () => {
  return (
    <section className="bg-[#0E0F1A] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto text-sm space-y-10">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Nigeria Office */}
          <div>
            <h2 className="font-semibold text-white mb-2">Nigeria</h2>
            <p>55G Adebisi Omotola Close,</p>
            <p>Off Samuel Adedoyin Street, Victoria Island</p>
            <p>Tel: +234 818 444 1404</p>
          </div>

          {/* UK Office */}
          <div>
            <h2 className="font-semibold text-white mb-2">United Kingdom</h2>
            <p>39 Kenyon Lane, Off Moston Lane, Moston, Manchester, M40 9JG</p>
            <p>Tel: +44 161 948 1444</p>
          </div>

          {/* UAE */}
          <div>
            <h2 className="font-semibold text-white mb-2">United Arab Emirates</h2>
            <p>Tel: +971 50 423 8817</p>
          </div>

          {/* Canada */}
          <div>
            <h2 className="font-semibold text-white mb-2">Canada</h2>
            <p>Tel: +1 647 977 1435</p>
          </div>

          {/* Email */}
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
