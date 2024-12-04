
import React, { useEffect, useState } from 'react';
import '../styles/global.css';

export default function Programs() {
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/programs')
            .then(response => response.json())
            .then(data => setPrograms(data))
            .catch(error => console.error('Error fetching programs:', error));
    }, []);

    return (
        <div className="programs-page">
            <h1>Our Programs</h1>

            <section className="main-overview">
                <h2>Main Programs Overview</h2>
                <p>Explore our offerings, from language tutoring to cultural workshops.</p>
            </section>

            <section className="language-tutoring">
                <h2>Language Tutoring</h2>
                <p>Beginner, Intermediate, and Advanced Persian language programs.</p>
                <p>Features include live classes, cultural modules, and self-paced options.</p>
                {programs.map((program) => (
                    <div key={program.id} className="program-card">
                        <h3>{program.title}</h3>
                        <p>{program.description}</p>
                        <p><strong>Price:</strong> ${program.price}</p>
                        <p><strong>Level:</strong> {program.level}</p>
                        <button>Enroll Now</button>
                    </div>
                ))}
            </section>

            <section className="cultural-immersion">
                <h2>Cultural Immersion</h2>
                <p>Join workshops in Persian poetry, music, and culinary arts.</p>
            </section>

            <section className="global-outreach">
                <h2>Global Outreach</h2>
                <p>Explore our international collaborations and upcoming events.</p>
            </section>
        </div>
    );
}
