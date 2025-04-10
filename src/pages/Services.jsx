import React from 'react';

const Service = () => {
  return (
    <section className="bg-[#0E0F1A] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto text-sm">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gradient pt-6 mb-6">Our Expert Services</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            At KeySystem, we provide comprehensive solutions to drive efficiency, security, and growth for your business. Explore our range of cutting-edge services designed to elevate your digital presence and business operations.
          </p>
        </div>

        {/* Services List */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="service-item">
              <h3 className="text-xl font-semibold text-blue-500">Core Refresh</h3>
              <p className="text-gray-400">
                We breathe new life into your legacy systems, ensuring they are optimized for the modern world. Core refresh is essential to enhance system performance, security, and scalability.
              </p>
            </div>
            <div className="service-item">
              <h3 className="text-xl font-semibold text-blue-500">Application Management Services</h3>
              <p className="text-gray-400">
                Our team helps you manage, maintain, and scale your applications seamlessly. From performance optimization to troubleshooting, we ensure your applications run smoothly and efficiently.
              </p>
            </div>
            <div className="service-item">
              <h3 className="text-xl font-semibold text-blue-500">Evolution & Enhancement Services</h3>
              <p className="text-gray-400">
                We enhance the functionality of your existing systems, integrating the latest technologies and features to meet your business needs. Evolving your infrastructure to keep pace with innovation is key to staying competitive.
              </p>
            </div>
            <div className="service-item">
              <h3 className="text-xl font-semibold text-blue-500">Solution Assurance & Validation</h3>
              <p className="text-gray-400">
                We ensure your solutions are both effective and aligned with your business objectives. Our validation services guarantee the highest standards of quality and performance.
              </p>
            </div>
            <div className="service-item">
              <h3 className="text-xl font-semibold text-blue-500">Digital Banking & Financial Inclusion</h3>
              <p className="text-gray-400">
                Transforming the digital banking experience to empower individuals and businesses. Our solutions foster financial inclusion, helping you offer secure, seamless, and innovative banking services to everyone.
              </p>
            </div>
            <div className="service-item">
              <h3 className="text-xl font-semibold text-blue-500">Online/Mobile Lending Solutions</h3>
              <p className="text-gray-400">
                We provide digital lending solutions that simplify and streamline the borrowing process. Offering secure and scalable online/mobile platforms for lenders and borrowers alike.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="service-item">
              <h3 className="text-xl font-semibold text-blue-500">Staff Augmentation Solutions</h3>
              <p className="text-gray-400">
                Need the right expertise? We offer staff augmentation services, providing you with skilled professionals to meet your project and operational demands.
              </p>
            </div>
            <div className="service-item">
              <h3 className="text-xl font-semibold text-blue-500">Risk Management & Internal Audit Solutions</h3>
              <p className="text-gray-400">
                Our comprehensive risk management and audit services ensure your business is prepared for uncertainties, providing insights that help in making informed decisions.
              </p>
            </div>
            <div className="service-item">
              <h3 className="text-xl font-semibold text-blue-500">Data Warehouse & Business Intelligence (BI)</h3>
              <p className="text-gray-400">
                Unlock the power of your data with our data warehouse solutions. We help you aggregate, analyze, and visualize data to make data-driven decisions that drive business growth.
              </p>
            </div>
            <div className="service-item">
              <h3 className="text-xl font-semibold text-blue-500">Enterprise Document Management Solutions</h3>
              <p className="text-gray-400">
                Organize, manage, and secure your documents with our enterprise-grade document management systems. We help streamline workflows, reduce paper usage, and enhance collaboration.
              </p>
            </div>
            <div className="service-item">
              <h3 className="text-xl font-semibold text-blue-500">KeySystem Software Testing</h3>
              <p className="text-gray-400">
                Our rigorous software testing services ensure your applications meet the highest standards of quality and functionality. We provide manual and automated testing to ensure your software is reliable and secure.
              </p>
            </div>
            <div className="service-item">
              <h3 className="text-xl font-semibold text-blue-500">Cybersecurity Solutions</h3>
              <p className="text-gray-400">
                Protect your business from cyber threats with our advanced cybersecurity services. We offer end-to-end protection, including risk assessments, threat detection, and security monitoring to safeguard your data and systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
