import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
export const Work = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
  })
  const experiences = [
    {
      company: "DotStory",
      position: "Frontend Developer",
      duration: "March 2023 - Present",
      website: "https://dotstory.xyz/",
      responsibilities: [
        "Built user interfaces for complex web applications using HTML, CSS, and JavaScript and React",
        "Worked closely with designers to translate wireframes and mockups into interactive UI components",
        "Optimized application performance through code refactoring and performance tuning",
      ],
    },
    {
      company: "PayNav",
      position: "Frelance Frontend Developer",
      position1: "Frontend Developer Intern",
      duration: "February 2023 - present",
      duration1: "October 2022 - February 2023",
      website: "https://www.paynav.co/",
      responsibilities: [
        "Developed and maintained web applications using React and Node.js",
        "Collaborated with a cross-functional team to deliver high-quality software solutions",
        "Implemented responsive design principles to ensure optimal user experience",
      ],
    },
    {
      company: "Vasukam",
      position: "Web Developer Intern",
      duration: "August 2022 - September 2022",
      website: "https://www.vasukam.com/",
      responsibilities: [
        "I was given the task of developing the user interface (frontend) of a web application.",
        "Worked closely with the founder, I gained valuable soft skills, such as effective communication and teamwork, which were crucial to achieving our goals.",
        "Implemented responsive design principles to ensure optimal user experience",
      ],
    },
  ];

  return (
    <div className="work-experience-container">
      <h2 className="section-heading">Work Experience</h2>
      <div className="work-experience">
        {experiences.map((experience, index) =>
          index === 1 ? (
            <div data-aos="flip-left" className="experience-card" key={index}>
            <h3 className="company">{experience.company}</h3>
           <div className="second-position">
           <p className="position">{experience.position}</p>
            <p className="duration">{experience.duration}</p>
           </div>
            <p className="position">{experience.position1}</p>
            <p className="duration">{experience.duration1}</p>
            <p className="duration"><a href={experience.website}>{experience.website}</a></p>
            <ul className="responsibilities">
              {experience.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
          ) : (
            <div data-aos="fade-right" className="experience-card" key={index}>
              <h3 className="company">{experience.company}</h3>
              <p className="position">{experience.position}</p>
              <p className="duration">{experience.duration}</p>
              <p className="duration"><a href={experience.website}>{experience.website}</a></p>
              <ul className="responsibilities">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </div>
  );
};
