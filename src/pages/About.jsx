import React from 'react';

const About = () => {
  return (
    <section className="bg-[#0E0F1A] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto text-sm space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-4 text-gradient">About Us</h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Discover how KeySystem Technology Limited is shaping the future with innovative solutions in the digital banking and IT services industries.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            KeySystem Technology Limited is a forward-thinking company committed to delivering innovative solutions in the digital banking and IT services landscape. Our expertise spans application management, cybersecurity, software testing, and more. With a focus on modernizing business operations, we help our clients stay ahead of the curve in a rapidly changing digital world. Our approach ensures that organizations can focus on their core competencies while we take care of their technology infrastructure.
          </p>

          <p className="text-lg leading-relaxed">
            Our team consists of seasoned professionals with diverse backgrounds, from software engineers and cybersecurity experts to data scientists and project managers. We work collaboratively to offer end-to-end solutions that meet the ever-evolving demands of the market. Whether it’s building secure applications, optimizing operational efficiency, or enhancing digital transformation, we are committed to ensuring our clients achieve their strategic goals.
          </p>

          <p className="text-lg leading-relaxed">
            We are passionate about driving financial inclusion and business efficiency through scalable and secure technology. With a presence in Nigeria, the UK, UAE, and Canada, we combine global reach with local insights, ensuring that our solutions are tailored to the unique needs of each region. Our team is driven by a commitment to excellence and the belief that technology should be accessible, secure, and empowering for all. Through our expertise, we’ve helped numerous businesses transform their operations and stay competitive in an increasingly digital world.
          </p>

          <p className="text-lg leading-relaxed">
            As a company, we believe in the power of technology to not only improve business outcomes but also create positive social impact. We are committed to sustainability and empowering businesses to use technology to solve complex problems, reduce inefficiencies, and create value. Our aim is to be at the forefront of innovation while fostering trust and transparency in everything we do.
          </p>

          <p className="text-lg leading-relaxed">
            At KeySystem, we focus on providing customized solutions that cater to specific client needs, ensuring the highest level of satisfaction. Our team works closely with clients to understand their challenges and provide solutions that are not only effective but also practical and scalable. By partnering with us, businesses gain a trusted ally that provides ongoing support and innovative solutions that drive long-term success.
          </p>

          <div className="flex justify-center items-center mt-12">
            <button className="bg-gradient-to-r from-[#000080] to-[#4169E1] text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
