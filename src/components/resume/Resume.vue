<template>
    <div id="resume">
        
        <h2 class="section-heading">Experience</h2>
        
        <h3 class="org-header">U.S. Department of Defense</h3>
        <position title="Computer Science Research Intern" start="May '19" end="Aug '19">
            <li>Supported the development of a visualization tool to enable rapid triage of large amounts of multimedia data</li>
            <li>Adapted a web app to ingest and visualize different types of multimedia data in JavaScript (using AngularJS)
                for the front end and Java (Spring interfacing with Elasticsearch) for the backend</li>
            <li>Ran experiments to investigate the visualization quality based on different neural networks, training methods,
                and hyperparameters of the UMAP dimensionality reduction algorithm</li>
            <li>Implemented modifications to the algorithm that improved the performance and quality of the visualization,
                making image triage easier</li>
            <li>Processed different multimedia datasets to verify the visualization and clustering quality, and to validate
                experiments</li>
        </position>
        
        <h3 class="org-header">UMDLoop (SpaceX Hyperloop Pod Design Competition)</h3>
        <position title="Avionics System Lead" start="Sept '18">
            <li>Track, spec, and evaluate all low- and high-voltage electrical/electronic components on the pod (the vehicle)</li>
            <li>Research and validate control algorithms and riskier avionics endeavors, such as designing and constructing
                our own motor controller</li>
            <li>Design and verify inter-microcontroller communication protocols (primarily using CAN between microcontrollers
                and over Ethernet for remote communication with the pod)</li>
            <li>Design the integration and testing of all subsystems from the avionics side, including the sensors, actuators,
                and state machines</li>
            <li>Built and integrated large parts of the low voltage avionics system and the high-voltage power system</li>
            <li>Defended and demonstrated the avionics system to professional engineers evaluating our design and implementation</li>
        </position>
        <position title="Software Engineer/Developer" start="Sept '17" end="Aug '18">
            <li>Worked on sensor fusion at moderate frequencies with inertial measurement sensors to obtain velocity to
                within 1 m/s for use in linear induction motor control</li>
            <li>Developed procedures and test plans for algorithm testing and on-site operations</li>
            <li>Worked with a team to investigate the viability of various mechanical actuation methods for our use case</li>
        </position>
        
        <h3 class="org-header">FIRE Capital One Machine Learning Research Stream</h3>
        <position title="Research Fellow &amp; Peer Mentor" start="Jan '18">
            <li>Design, implement, and test a novel neural network for object tracking</li>
            <li>Mentored student researchers in computer vision and natural language processing projects and taught
                tutorials on the basics of machine learning and working with data</li>
            <li>Participated in the design of a model for real-time video object segmentation and tracking in the domain
                of autonomous vehicles</li>
            <li>Implemented a data pipeline for and performed data analysis on several image segmentation and object
                detection data sets</li>
        </position>
        
        <h3 class="org-header">UMD Computer Science Department</h3>
        <position title="Undergraduate Teaching Assistant" start="Aug '18">
            <li>Moderate and answer thousands of questions on the online Piazza (Q&amp;A) forum</li>
            <li>Teach discussion (lab) sections weekly, hold office hours, and proctor exams and quizzes</li>
            <li>Grade quizzes, exams, and coding projects throughout the semester and over breaks</li>
        </position>
    
        <h3 class="org-header">FIRST Robotics Team 2537</h3>
        <position title="Lead Systems Engineer &amp; Team Captain" start="Aug '16" end="Aug '17">
            <li>Managed technical budgets: volume, interference, electrical power, and mass as well as programmatic:
                resources, time, and scheduling to ensure that all constraints and requirements are met</li>
            <li>Produced an integrated design (including an overall CAD model) and inter-system interface specifications</li>
            <li>Led the integration of mechanical, software, and electrical subsystems as well as overall robot integration</li>
            <li>Team (via alliance) placed 4<sup>th</sup> at the World Championships due to my actions</li>
            <li>Received Director's Award (internal leadership award, single most prestigious award given this year
                from a pool of 80 students)</li>
        </position>
        <position title="Software and Controls Systems Lead" start="Sept '14" end="Aug '16">
            <li>Implemented a requirements-based approach to software design that utilized use case analysis and modular,
                top-down design</li>
            <li>Guided the design of and developed control algorithms for controlling robotic mechanisms</li>
            <li>Oversaw software development and communicated requirements across sub-teams</li>
            <li>Taught programming concepts and coding to new and veteran members</li>
            <li>Received Excellence in Teamwork Award and Excellence in Leadership Award (the latter award was an
                internal leadership award, 7 chosen from a pool of 70 students)</li>
        </position>
        <position title="Core Software Developer" start="Sept '13" end="Aug '14">
            <li>Designed and programmed critical components of the software using state machines for complex actuation</li>
            <li>Received Excellence in Engineering Award (15 recipients from pool of 65) in recognition of accomplishments
                that directly impacted the team's performance</li>
        </position>
        
        <h2 class="section-heading">Education</h2>
        <p>University of Maryland, College Park</p>
    
        <h2 class="section-heading">Additional Links</h2>
        <div id="links">
            <b-button href='https://www.linkedin.com/in/tmthyln?trk=profile-badge' variant="dark">LinkedIn</b-button>
            <b-button href="https://github.com/tmthyln" variant="dark">GitHub</b-button>
            <b-button href="/pdfs/resume.pdf" variant="dark">Resume (as PDF)</b-button>
        </div>
    </div>
</template>

<script>
    import Position from "./Position";
    export default {
        name: "Resume",
        components: {Position}
    }
</script>

<style scoped>
    #resume {
        margin-left: 25%;
        margin-right: 25%;
        margin-top: 5rem;
    }
    #links {
        display: flex;
        justify-content: space-evenly;
        font-weight: bolder;
        margin-bottom: 2rem;
    }
    .section-heading {
        font-variant: small-caps;
        font-size: xxx-large;
    }
    .org-header {
        text-align: left;
    }
</style>