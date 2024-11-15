import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaSun, FaMoon, FaDownload } from 'react-icons/fa'
import './App.css'

export default function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [theme, setTheme] = useState('light')

  const sections = ['about', 'education', 'projects', 'skills', 'responsibilities']

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const skills = [
    { name: 'C', level: 90 },
    { name: 'HTML', level: 85 },
    { name: 'CSS', level: 80 },
    { name: 'SQL', level: 75 },
    { name: 'Python', level: 85 },
    { name: 'Java', level: 60 },
    { name: 'JavaScript', level: 65 },
    { name: 'System Verilog', level: 55 },
  ]

  return (
    <div className={`app ${theme}`}>
      <header>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mrunali Tamhankar
        </motion.h1>
        <div className="contact-info">
          <a href="mailto:mrunali1309@gmail.com"><FaEnvelope /> mrunali1309@gmail.com</a>
          <a href="tel:+919321640052"><FaPhone /> +91-9321640052</a>
          <a href="http://linkedin.com/in/mrunali-tamhankar-25050026b" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/mrunali130" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
        </div>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
        <motion.a
          href="/R-Mrunali Tamhankar.pdf"
          download="R-Mrunali Tamhankar.pdf"
          className="download-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaDownload /> Download Resume
        </motion.a>
      </header>

      <nav>
        {sections.map((section) => (
          <motion.button
            key={section}
            className={activeSection === section ? 'active' : ''}
            onClick={() => setActiveSection(section)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </motion.button>
        ))}
      </nav>

      <main>
        <AnimatePresence mode="wait">
          {activeSection === 'about' && (
            <motion.section
              key="about"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <h2>About Me</h2>
              <p>
                I am a focused and goal-driven individual, passionate about actively enhancing my skill set in the field of engineering. With experience in programming, web development, and leadership roles, I am dedicated to continuous learning and development. I am committed to contributing effectively to projects while driving my overall growth.
              </p>
            </motion.section>
          )}

          {activeSection === 'education' && (
            <motion.section
              key="education"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Education</h2>
              <div className="education-item">
                <h3>Fr. Conceicao Rodrigues College of Engineering, Bandra(W), Mumbai</h3>
                <p>Bachelor of Engineering in Electronic and Computer Science</p>
                <p>November 2022 – Present</p>
                <p>CGPA: 7.5/10</p>
              </div>
              <div className="education-item">
                <h3>Sathaye College</h3>
                <p>HSC</p>
                <p>2021-2022</p>
                <p>Score: 65.17</p>
              </div>
              <div className="education-item">
                <h3>Parle Tilak Vidyalaya English Medium School</h3>
                <p>SSC</p>
                <p>2019-2020</p>
                <p>Score: 91.40</p>
              </div>
            </motion.section>
          )}

          {activeSection === 'projects' && (
            <motion.section
              key="projects"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Key Projects</h2>
              <div className="project-item">
                <h3>Canteen Website Development</h3>
                <p>As a key member, I contributed to the development of a user-friendly website for the College canteen. We utilized HTML and CSS to effectively display daily menus and special offers and integrates an interactive ordering system to streamline the meal selection process.</p>
              </div>
              <div className="project-item">
                <h3>Python Mini Project: Computer Control Panel</h3>
                <p>This project serves as a control panel for managing essential computer operations, including shutdown, restart, and logout.</p>
              </div>
            </motion.section>
          )}

          {activeSection === 'skills' && (
            <motion.section
              key="skills"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Technical Skills</h2>
              <div className="skills-container">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <h3>{skill.name}</h3>
                    <div className="skill-bar-container">
                      <motion.div
                        className="skill-bar"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {activeSection === 'responsibilities' && (
            <motion.section
              key="responsibilities"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Positions of Responsibility</h2>
              <ul>
                <li>Fr. CRCE Student Mentor - Mentoring second-year students in academics, programming, and setting up a culture of growth</li>
                <li>Fr. CRCE IEEE - As a Junior PR HEAD in IEEE, I contributed to enhancing the organization's visibility, managing communications, and promoting events through strategic outreach and public relations efforts. (2023-2024)</li>
                <li>Fr. CRCE IEEE – Vice Chairperson in IEEE. (2024-present)</li>
              </ul>
              <h3>Certificates</h3>
              <ul>
                <li>Smart India Hackathon Winner 2023</li>
                <li>Academy of Skill Development AL-ML project based training using Python</li>
              </ul>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <footer>
        <p>&copy; 2024 Mrunali Tamhankar. All rights reserved.</p>
      </footer>
    </div>
  )
}