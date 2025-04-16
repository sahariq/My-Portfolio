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
          <h2 className="text-3xl font-bold mb-2 font-display">About Me</h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="md:flex md:space-x-8">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary-500">Who Am I?</h3>
            <p className="text-primary-300 mb-4">
            Hey! I’m a Software Engineering student at FAST NUCES Islamabad. I’ve learned a bunch of things at 
            uni—full-stack development, databases, software design—you name it. But outside of class, 
            I’ve found myself really into UI/UX design and project management.
            </p>
            <p className="text-primary-300 mb-6">
            I love making things look and work better, whether it’s designing smooth user flows or keeping a team organized and on track.
             Basically, I like being the person who connects the tech with the people using it.
            </p>
            <motion.a
              href="G:\portfolio website\v1\src\components\resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-400 transition-colors shadow-md"
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
            <h3 className="text-2xl font-bold mb-4 text-primary-500">My Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-primary-500">{skill.name}</span>
                    <span className="text-primary-300">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-primary-100 rounded-full h-2">
                    <motion.div
                      className="bg-primary-500 h-2 rounded-full"
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