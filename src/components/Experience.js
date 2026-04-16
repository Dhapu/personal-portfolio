import React from 'react';
import './Experience.css'; // Make sure to create and import this CSS file

function Experience() {
    return (
        <section id="experience" className="experience-section container">
            <div className="container mt-5 mb-5">
                <h2 className="experience-heading">Experience</h2>
                <ul className="timeline">
                    <li className="timeline-item">
                        <a href="https://spanidea.com/" target="_blank" rel="noreferrer">SpanIdea Systems</a>
                        <span className="timeline-date">Aug 2023 - May 2024</span>
                        <p className="timeline-role">Associate Software Engineer</p>
                    </li>
                    <li className="timeline-item">
                        <a href="https://www.ybifoundation.org/" target="_blank" rel="noreferrer">YBI Foundation</a>
                        <span className="timeline-date">Nov 2021 - Dec 2021</span>
                        <p className="timeline-role">Machine Learning Intern</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Experience;
