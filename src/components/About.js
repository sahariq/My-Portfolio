// components/About.js
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'UI/UX Design', level: 90 },
    { name: 'Project Management', level: 85 },
    { name: 'Software Engineering', level: 80 },
    { name: 'React.js', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="md:flex md:space-x-8">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Who Am I?</h3>
            <p className="text-gray-600 mb-4">
              I'm a passionate UI/UX designer and software engineer with a focus on creating
              beautiful, functional, and user-friendly digital experiences. With several years
              of experience in project management and software development, I bring a unique
              perspective to every project I work on.
            </p>
            <p className="text-gray-600 mb-6">
              My goal is to blend technical expertise with creative problem-solving to deliver
              solutions that not only meet but exceed expectations. I'm constantly learning new
              technologies and design trends to stay at the forefront of the industry.
            </p>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">My Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-indigo-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;