import React from 'react';
import './Experience.css'; // Make sure to create and import this CSS file

function Experience() {
    return (
        <section id="experience" className="experience-section container">
            <div className="container mt-5 mb-5">
                <h2 className="experience-heading">Experience</h2>
                <ul className="timeline">
                    <li className="timeline-item">
                        <a target="_blank" href="#">SpanIdea Systems</a>
                        <a href="#" className="timeline-date">Aug 2023 - Present</a>
                        <p className="timeline-role">Associate Software Engineer</p>
                    </li>
                    <li className="timeline-item">
                        <a href="#">YBI Foundation</a>
                        <a href="#" className="timeline-date">Nov 2021 - Dec 2021</a>
                        <p className="timeline-role">Machine Learning Intern</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Experience;
