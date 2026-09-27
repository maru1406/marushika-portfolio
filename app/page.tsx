import { ArrowUpRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const skills = [
  ["Programming", ["Java", "Python", "SQL"]],
  ["Core Computer Science", ["OOP", "DSA", "DBMS", "Operating Systems", "Software Engineering"]],
  ["Web Development", ["HTML", "CSS", "React.js"]],
  ["AI & Machine Learning", ["Machine Learning", "Deep Learning", "Neural Networks", "Agentic AI", "LLMs", "Prompt Engineering"]],
  ["Data & Analytics", ["Pandas", "NumPy", "Power BI", "Tableau"]],
  ["Cloud & Tools", ["Google Cloud", "BigQuery", "Cloud Storage", "GitHub", "VS Code", "Spyder", "Anaconda"]],
];

const projects = [
  {
    n: "01",
    title: "AI-Based Rainfall Forecasting over Telangana",
    desc: "Research-oriented work on historical meteorological data, data preprocessing, spatial analysis and machine learning approaches for rainfall forecasting.",
    tags: ["Python", "Machine Learning", "NetCDF", "GeoPandas"],
    href: "#contact",
  },
  {
    n: "02",
    title: "E-Commerce ELT Data Pipeline & Analytics",
    desc: "End-to-end analytics workflow using BigQuery and SQL for cleaning, validation and transformation, paired with an interactive Tableau dashboard.",
    tags: ["BigQuery", "SQL", "Tableau"],
    href: "https://github.com/maru1406",
  },
  {
    n: "03",
    title: "Hospital Management System",
    desc: "Java application for patient records, appointments and billing, with MySQL connectivity through JDBC and modular OOP-based development.",
    tags: ["Java", "MySQL", "JDBC", "OOP"],
    href: "https://github.com/maru1406/Hospital-Management-System",
  },
  {
    n: "04",
    title: "Human Brain Wave Study",
    desc: "EEG-based emotion recognition project combining a multi-scale 1D CNN for feature extraction with XGBoost classification and a Django web interface.",
    tags: ["Python", "TensorFlow/Keras", "XGBoost", "Scikit-learn", "Django", "EEG"],
    href: "https://github.com/maru1406/Human-Brain-Wave-Study",
  },
];

const certs = [
  ["Google Cloud", "Generative AI Leader"],
  ["Google Cloud", "Data Analytics"],
  ["Adobe", "Adobe Analytics Foundation"],
  ["Deloitte", "Data Analysis Job Simulation"],
  ["Infosys Springboard", "Statistics for Data Science"],
];

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="container navin">
          <a className="brand" href="#home">MK.</a>
          <div className="links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#achievements">Beyond Code</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main id="home">
        <section className="hero">
          <div className="container heroGrid">
            <div>
              <div className="eyebrow">Computer Science · Data · AI/ML · Cloud</div>
              <h1>Marushika<br /><span>Kalyan.</span></h1>
              <p className="lead">
                I build practical software and data-driven solutions while exploring the
                intersection of software engineering, analytics, artificial intelligence and
                cloud technologies.
              </p>

              <div className="actions">
                <a className="btn primary" href="#projects">
                  View Projects <ArrowUpRight size={15} style={{ display: "inline", verticalAlign: "-3px" }} />
                </a>
                <a className="btn" href="/MARUSHIKA_RESUME.pdf">Download Resume</a>
              </div>

              <div className="socials">
  <a
    href="https://github.com/maru1406"
    target="_blank"
    rel="noreferrer"
  >
    <Github size={16} /> GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/marushika-kalyan-b8a80731b/"
    target="_blank"
    rel="noreferrer"
  >
    <Linkedin size={16} /> LinkedIn
  </a>

  <a
    href="https://leetcode.com/u/marushika_kalyan/"
    target="_blank"
    rel="noreferrer"
  >
    LeetCode
  </a>

  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=marushikakalyan27@gmail.com"
    target="_blank"
    rel="noreferrer"
  >
    <Mail size={16} /> Email
  </a>
</div>
            </div>

            <div>
              <div className="portrait">
                <img src="/profile.jpg" alt="Marushika Kalyan" />
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <div className="sectionHead">
              <div>
                <div className="kicker">01 / About</div>
                <h2>Curious by nature.<br />Technical by practice.</h2>
              </div>
            </div>

            <div className="aboutGrid">
              <div>
                <p className="muted">
                  I&apos;m a Computer Science and Engineering undergraduate at CMR Engineering College,
                  Hyderabad, with a strong foundation in Java, Python, SQL, OOP, DBMS and Data
                  Structures &amp; Algorithms.
                </p>
                <p className="muted">
                  My interests span software development, data analytics, machine learning and cloud
                  technologies. I enjoy turning real-world problems into practical technical solutions
                  — from Java applications and analytics pipelines to research-oriented rainfall analysis.
                </p>
                <p className="muted">
                  Beyond academics, classical dance has shaped my dedication, consistency and discipline.
                  It has taught me how to balance a long-term passion with professional goals while
                  staying committed to continuous learning and growth.
                </p>
              </div>

              <div>
                <div className="stat">
                  <strong>8.75</strong>
                  <div className="muted">CGPA · CMR Engineering College</div>
                </div>
                <div className="stat">
                  <strong>4</strong>
                  <div className="muted">Featured technical projects</div>
                </div>
                <div className="stat">
                  <strong>4</strong>
                  <div className="muted">Core areas · Software · Data · AI/ML · Cloud</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <div className="sectionHead">
              <div>
                <div className="kicker">02 / Skills</div>
                <h2>Tools I work with.</h2>
              </div>
            </div>

            <div className="skills">
              {skills.map(([name, tags]) => (
                <div className="skillCard" key={name}>
                  <h3>{name}</h3>
                  <div className="tags">
                    {tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <div className="sectionHead">
              <div>
                <div className="kicker">03 / Selected Work</div>
                <h2>Things I&apos;ve built.</h2>
              </div>
              <p className="muted">Projects across research, data and software development.</p>
            </div>

            <div className="projects">
              {projects.map((p) => (
                <a
                  className="project"
                  href={p.href}
                  target={p.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  key={p.n}
                >
                  <div className="num">{p.n}</div>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="tags">
                      {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                    </div>
                  </div>
                  <div className="arrow"><ArrowUpRight /></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="achievements">
          <div className="container">
            <div className="sectionHead">
              <div>
                <div className="kicker">04 / Beyond Code</div>
                <h2>More than a tech stack.</h2>
              </div>
            </div>

            <div className="timeline">
              <div className="timelineItem">
                <div className="year">ACHIEVEMENT</div>
                <h3>2nd Place — Lean Startup Idea Presentation</h3>
                <p className="muted">Recognized in a college-level Lean Startup Idea Presentation.</p>
              </div>

              <div className="timelineItem">
                <div className="year">RESEARCH</div>
                <h3>Co-authored Research Paper</h3>
                <p className="muted">
                  Research on a cyber-secure MQTT–ESP32 framework for society-wide smart home automation.
                </p>
              </div>

              <div className="timelineItem">
                <div className="year">LEADERSHIP</div>
                <h3>Project Mentor — Inter-School Sync Hack AI Battle</h3>
                <p className="muted">
                  Mentored Grade 11 and 12 students through project development; the team was selected
                  at national level to showcase its project.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="certifications">
          <div className="container">
            <div className="sectionHead">
              <div>
                <div className="kicker">05 / Certifications</div>
                <h2>Learning, continuously.</h2>
              </div>
            </div>

            <div className="certs">
              {certs.map(([org, name]) => (
                <div className="cert" key={name}>
                  <small>{org}</small>
                  <h3>{name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================
            KUCHIPUDI
        ========================== */}
        <section className="danceSection" id="kuchipudi">
          <img
            className="danceImage"
            src="/dance-bg.jpeg"
            alt="Kuchipudi performance"
          />

          <div className="danceOverlay"></div>

          <div className="container danceContent">
            <div className="kicker">06 / Beyond Technology</div>
            <h2>My Kuchipudi Journey.</h2>

            <div className="danceGrid">
              <div>
                <p className="danceLead">
                  For the past 15 years, Kuchipudi has been an integral part of my life.
                </p>

                <p>
                  What began as an artistic pursuit gradually became a lesson in discipline,
                  consistency, patience and commitment. Years of training and performance have
                  taught me that meaningful progress comes from showing up, practising continuously
                  and staying committed to a long-term goal.
                </p>

                <p>
                  I am a <strong>B-Grade Kuchipudi Artist certified by Doordarshan Kendra</strong>,
                  and have completed both a <strong>Certificate Course</strong> and
                  <strong> Diploma Course in Kuchipudi</strong>.
                </p>

                <p>
                  I am now preparing to pursue a <strong>Master&apos;s in Kuchipudi</strong> as
                  the next chapter of my artistic journey, while continuing to grow in technology.
                </p>
              </div>

              <div className="danceSide">
                <div className="danceBadge">
                  <span>15</span>
                  <small>YEARS OF<br />KUCHIPUDI</small>
                </div>

                <div className="danceBadge">
                  <span>B-GRADE</span>
                  <small>DOORDARSHAN<br />KENDRA</small>
                </div>

                <div className="danceBadge">
                  <span>2</span>
                  <small>CERTIFICATE +<br />DIPLOMA</small>
                </div>

                <div className="danceQuote">
                  “Passion and profession can grow together with discipline and consistency.”
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container">
            <div className="contactBox">
              <div className="kicker">07 / Contact</div>
              <h2>Let&apos;s build something meaningful.</h2>
              <p className="muted">
                I&apos;m exploring opportunities where I can apply my skills in software development,
                data analytics, AI/ML and cloud technologies while continuing to learn and grow.
              </p>

              <div className="actions">
                <a
                  className="btn primary"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=marushikakalyan27@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Email Me <Mail size={15} style={{ display: "inline", verticalAlign: "-3px" }} />
                </a>
                <a className="btn" href="https://github.com/maru1406" target="_blank" rel="noreferrer">
                  GitHub <ExternalLink size={14} style={{ display: "inline", verticalAlign: "-3px" }} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer">
          <span>© 2026 Marushika Kalyan</span>
          <span>Built with Next.js</span>
        </div>
      </footer>
    </>
  );
}
