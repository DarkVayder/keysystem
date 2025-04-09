import React from 'react';

const Service = () => {
  return (
    <section className="bg-[#0E0F1A] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto text-sm">
        <h1 className="text-3xl font-bold mb-8">Our Services</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <ul className="space-y-2">
            <li>Core refresh</li>
            <li>Application management services</li>
            <li>Evolution & enhancement services</li>
            <li>Solution Assurance & validation</li>
            <li>Digital Banking & financial inclusion</li>
            <li>Online/mobile lending solution</li>
          </ul>
          <ul className="space-y-2">
            <li>Staff augmentation solutions</li>
            <li>Risk management & Internal audit solutions</li>
            <li>Data Warehouse & Business Intelligence (BI)</li>
            <li>Enterprise Document Management Solutions</li>
            <li>KeySystem software testing</li>
            <li>Cybersecurity Solutions</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Service;
