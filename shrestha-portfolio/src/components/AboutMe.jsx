import React from "react";

const AboutMe = () => {
  return (
    <div className="flex space-x-20 p-10 bg-gold text-black">
      <div className="w-96 flex-shrink-0 flex flex-col items-center">
        <div className="w-96 h-96 rounded-full overflow-hidden">
          <img
            src="../images/shrestha_picture.png"
            alt="Profile Picture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-center gap-8 mt-6">
          <img
            src="../images/linkedin_logo.png"
            alt="LinkedIn Logo"
            className="h-12 w-12 object-contain hover:opacity-80 transition-opacity"
          />
          <img
            src="../images/instagram_logo.png"
            alt="Instagram Logo"
            className="h-12 w-12 object-contain hover:opacity-80 transition-opacity"
          />
          <img
            src="../images/email_logo.png"
            alt="Email Logo"
            className="h-12 w-12 object-contain hover:opacity-80 transition-opacity"
          />
        </div>
      </div>
      <div className="flex-grow">
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-5">
              👋 Hi, I'm Shrestha Mishra
            </h1>
            <p className="text-lg mb-1">📍 Computer Science Student</p>
            <p className="text-lg mb-1">
              🎓 University of Texas at Austin | Class of 2029
            </p>
            <p className="text-lg">
              📚 B.S. in Computer Science | Minor in Entrepreneurship
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3 mt-10">🚀 About Me</h2>
            <p className="mb-3">
              Aspiring software engineer and entrepreneur passionate about
              building meaningful technology
            </p>
            <p className="mb-3">
              Excited to explore software development, startups, and innovation
              at the intersection of tech and business
            </p>
            <p className="mb-3">
              Deep interest in artificial intelligence, product design, and
              scalable systems
            </p>
            <p className="mb-3">
              Motivated to turn ideas into impactful products through continuous
              learning and hands-on building
            </p>
            <p>
              Long-term vision: Launch and grow tech ventures that solve
              real-world problems
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
