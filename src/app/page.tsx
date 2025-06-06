'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Hi, I'm Aishwarya Wagh
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-4 text-xl text-gray-600 dark:text-gray-300"
            >
              AIML Engineer & Technology Enthusiast
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-2 text-gray-600 dark:text-gray-400"
            >
              Passionate about Artificial Intelligence & Machine Learning
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 flex justify-center gap-4"
            >
              <a
                href="#contact"
                className="px-8 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 rounded-full border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                View Projects
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">About Me</h2>
              <p className="text-gray-600 dark:text-gray-300">
                I'm an aspiring AIML Engineer with a strong foundation in computer science and a deep passion for artificial intelligence and machine learning. Currently pursuing my Bachelor's degree at Sanjivani University, I maintain a solid academic record while actively working on innovative projects.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Education</h3>
                <div className="space-y-2">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold">B.Tech in CSE with AIML Specialization</h4>
                    <p className="text-gray-600 dark:text-gray-400">Sanjivani University, Kopargaon</p>
                    <p className="text-blue-600 dark:text-blue-400">2024 - 2027 | CGPA: 7.14</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold">Diploma in Computer Technology</h4>
                    <p className="text-gray-600 dark:text-gray-400">Sanjivani K.B.P Polytechnic</p>
                    <p className="text-blue-600 dark:text-blue-400">2021 - 2024 | Percentage: 70.51%</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/profile.jpg"
                alt="Aishwarya Wagh - AIML Engineer"
                fill
                className="object-cover object-[center_15%]"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={100}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold">Technical Skills</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Technical expertise across multiple domains with focus on AI/ML and software development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                category: "Programming Languages",
                skills: [
                  { name: "Python", level: 85 },
                  { name: "Java", level: 80 },
                  { name: "C", level: 75 },
                  { name: "C++", level: 70 },
                  { name: "JavaScript", level: 65 },
                ]
              },
              {
                category: "AI/ML Technologies",
                skills: [
                  { name: "Machine Learning", level: 80 },
                  { name: "Deep Learning", level: 75 },
                  { name: "TensorFlow", level: 70 },
                  { name: "Scikit-learn", level: 75 },
                  { name: "Pandas & NumPy", level: 80 },
                ]
              },
              {
                category: "Web Development",
                skills: [
                  { name: "HTML/CSS", level: 80 },
                  { name: "Flask", level: 75 },
                  { name: "Django", level: 70 },
                  { name: "MySQL", level: 75 },
                  { name: "REST APIs", level: 70 },
                ]
              },
              {
                category: "IoT & Hardware",
                skills: [
                  { name: "Arduino", level: 80 },
                  { name: "ESP32", level: 75 },
                  { name: "IoT Sensors", level: 75 },
                  { name: "Firebase", level: 70 },
                  { name: "ThingSpeak", level: 70 },
                ]
              }
            ].map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-blue-600 dark:text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Showcasing innovative solutions that combine technology with real-world applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Hotel Management System",
                description: "A comprehensive web application featuring hotel browsing, booking system, secure payment processing, and administrative management dashboard.",
                tech: ["HTML", "CSS", "JavaScript", "Python", "Flask/Django", "MySQL"],
                image: "/project-placeholder.jpg"
              },
              {
                title: "Smart Onion Warehouse",
                description: "An innovative IoT-based warehouse management system with real-time environmental monitoring, automated alert systems, and data analytics for optimal storage conditions.",
                tech: ["Arduino/ESP32", "IoT Sensors", "Python", "Firebase", "ThingSpeak"],
                image: "/project-placeholder.jpg"
              }
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 text-sm rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      View Project
                    </a>
                    <a
                      href="#"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Let's connect and discuss opportunities, projects, or just have a conversation about technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="font-semibold mr-2">Email:</span>
                    <a href="mailto:ashwaghashwagh@gmail.com" className="text-blue-600 dark:text-blue-400">
                      ashwaghashwagh@gmail.com
                    </a>
                  </p>
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="font-semibold mr-2">Phone:</span>
                    <a href="tel:+919921227342" className="text-blue-600 dark:text-blue-400">
                      +91 9921227342
                    </a>
                  </p>
                  <p className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="font-semibold mr-2">Location:</span>
                    Maharashtra, India
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Open For</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Internship opportunities</li>
                  <li>Collaborative projects</li>
                  <li>AI/ML discussions</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8"
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="What's this about?"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me about your project or idea..."
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
