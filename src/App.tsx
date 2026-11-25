
import './App.css'

function App() {
  return (
    <main className="page">

      {/* NAVIGATION */}
      <nav className="navigation">
        <a href="#top" className="brand">SSF<span>.</span></a>

        <div className="nav-links">
          <a href="#about">ABOUT</a>
          <a href="#application">APPLICATION</a>
          <a href="#contact">CONTACT</a>
        </div>

        <span className="availability">
          <span className="status-dot"></span>
          OPEN TO OPPORTUNITIES
        </span>
      </nav>

      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-content">
          <p className="eyebrow">JUNIOR SOFTWARE ENGINEER · DANFOSS</p>

          <h1>
            Creative mind.
            <br />
            <span>Developer</span>
            <br />
            in progress<span className="blue-dot">.</span>
          </h1>

          <p className="hero-description">
            Building digital experiences with curiosity,
            creativity and code. Ready to take the next step
            into software development.
          </p>

          <div className="hero-actions">
            <a href="#application" className="primary-button">
              DISCOVER MY APPLICATION ↘
            </a>
            <a
              href="https://portfolio2.designbysumbul.dk/"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              VIEW PORTFOLIO ↗
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-card">
            <div className="code-header">
              <div className="code-dots">
                <span></span><span></span><span></span>
              </div>
              <span>developer.ts</span>
            </div>

            <div className="code-content">
              <p><span className="code-purple">const</span> developer = {'{'}</p>
              <p className="indent"><span className="code-blue">name</span>: <span className="code-green">'Shabana'</span>,</p>
              <p className="indent"><span className="code-blue">background</span>: <span className="code-green">'Multimedia & Webdeveloper'</span>,</p>
              <p className="indent"><span className="code-blue">skills</span>: [</p>
              <p className="indent2"><span className="code-green">'HTML, CSS'</span>,</p>
              <p className="indent2"><span className="code-green">'JavaScript'</span>,</p>
              <p className="indent2"><span className="code-green">'TypeScript'</span>,</p>
              <p className="indent2"><span className="code-green">'React'</span>,</p>
              <p className="indent2"><span className="code-green">'Python'</span></p>
              <p className="indent">],</p>
              <p className="indent"><span className="code-blue">mindset</span>: <span className="code-green">'Always learning'</span></p>
              <p>{'}'}</p>
            </div>

            <div className="code-footer">
              <span>● CURIOUS</span>
              <span>CREATIVE / TECHNICAL</span>
            </div>
          </div>

          <div className="hero-index">01 — INTRODUCTION</div>
        </div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <span>55°29' N — KOLDING, DENMARK</span>
        </div>
      </section>

      {/* PROFILE */}
      <section className="profile-section" id="about">
        <div className="section-label">
          <span>01 / PROFILE</span>
          <span>A LITTLE ABOUT ME</span>
        </div>

        <div className="profile-grid">
          <div>
            <h2>
              Design thinking.
              <br />
              <span>Technical curiosity.</span>
            </h2>
          </div>

          <div className="profile-text">
            <p>
              I am a Multimedia Designer with a strong interest in
              software development, web technologies and digital
              problem-solving. My background combines design,
              technical understanding and a user-oriented mindset.
            </p>
            <p>
              I enjoy exploring new technologies, experimenting
              with code and challenging myself to learn something
              new. I am now looking to turn that interest into
              the next step of my professional career.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills-section">
        <div className="section-label">
          <span>02 / TOOLBOX</span>
          <span>TECHNOLOGIES & SKILLS</span>
        </div>

        <div className="skills-grid">
          <div className="skill-item">
            <span>01</span>
            <h3>HTML & CSS</h3>
            <p>Web structure and styling</p>
          </div>
          <div className="skill-item">
            <span>02</span>
            <h3>JavaScript</h3>
            <p>Programming and interaction</p>
          </div>
          <div className="skill-item">
            <span>03</span>
            <h3>TypeScript</h3>
            <p>Currently developing my skills</p>
          </div>
          <div className="skill-item">
            <span>04</span>
            <h3>React</h3>
            <p>Learning through practical projects</p>
          </div>
          <div className="skill-item">
            <span>05</span>
            <h3>Python</h3>
            <p>Independent learning</p>
          </div>
          <div className="skill-item">
            <span>06</span>
            <h3>UX / UI</h3>
            <p>User-centred digital experiences</p>
          </div>
        </div>
      </section>

      {/* APPLICATION */}
      <section className="application-section" id="application">
        <div className="section-label">
          <span>03 / MY APPLICATION</span>
          <span>WHY DANFOSS?</span>
        </div>

        <div className="application-heading">
          <p className="eyebrow">A PERSONAL APPLICATION</p>
          <h2>Dear Danfoss,</h2>
          <p>
            I would like to bring my curiosity, creativity and
            technical ambition into your software development team.
          </p>
        </div>

        <article className="application-block">
          <span className="section-number">01</span>
          <div>
            <h3>From design to development</h3>

            <p>
              During my Multimedia Design education, I deliberately
              chose to focus on web development, where I gained
              practical experience with HTML, CSS and JavaScript,
              alongside UX/UI design and digital problem-solving.
            </p>

            <p>
              During my education, I discovered a genuine interest
              in programming. After graduating, I continued
              exploring this interest in my spare time, independently
              developing my skills in JavaScript, TypeScript and Python.
              I enjoy learning new technologies, experimenting with
              code and continuously challenging myself to improve.
            </p>

            <p>
              I further developed these skills during my internship
              at Alflow Scandinavia, where I worked with website
              development, functionality and user experience.
              My main project was redesigning the Saniflex website,
              which received the highest grade.
            </p>

            <p>
              Although my career so far has primarily taken me in
              the direction of digital marketing and communication,
              my interest in web development has remained strong.
              I am now looking for an opportunity to make development
              a bigger part of my professional career.
            </p>
          </div>
        </article>

        <article className="application-block">
          <span className="section-number">02</span>
          <div>
            <h3>Technology with a purpose</h3>

            <p>
              Your work with software for refrigeration systems
              caught my attention because it combines technology
              with a meaningful purpose. I find it exciting how
              software can play an important role in optimising
              everyday systems and making them more efficient,
              reliable and sustainable.
            </p>

            <p>
              The opportunity to develop software that helps
              supermarkets save energy and reduce food waste
              makes the role particularly interesting to me.
              It is motivating to think that the solutions I
              could help develop would have a real impact beyond
              the screen, contributing to more responsible energy
              consumption and reducing unnecessary waste.
            </p>

            <p>
              I am also drawn to the complexity of developing
              software for systems where functionality, reliability
              and user experience all matter. I would love to learn
              more about how software and technology work together
              in this field and contribute to solutions that make
              a measurable difference.
            </p>
          </div>
        </article>

        <article className="application-block">
          <span className="section-number">03</span>
          <div>
            <h3>Creative thinking meets technical skills</h3>

            <p>
              I bring a combination of creative thinking, technical
              understanding and a user-oriented mindset. My background
              in multimedia design has taught me to approach challenges
              from different perspectives, understand user needs and
              turn ideas into practical digital solutions. I believe
              good software is about more than writing code – it is
              about understanding problems, exploring solutions and
              continuously improving the way things work.
            </p>

            <p>
              I enjoy working independently, taking initiative and
              finding ways to expand my knowledge. When learning
              something new, I am naturally curious and motivated
              to understand not just how something works, but why
              it works that way. I see challenges as opportunities
              to develop both technically and professionally.
            </p>

            <p>
              I am motivated to strengthen my skills in React and
              TypeScript, gain practical experience working with
              larger software solutions and learn from experienced
              developers. At the same time, I hope to contribute
              with fresh perspectives, creativity, commitment and
              a strong willingness to take on new challenges.
            </p>
          </div>
        </article>

        {/* CLOSING */}
        <div className="closing">
          <p className="eyebrow">THE NEXT CHAPTER</p>
          <h2>Let's build something meaningful.</h2>

          <p>
            I would love the opportunity to grow as a software
            developer at Danfoss and become part of a team where
            I can contribute, learn and develop my technical skills.
            I am excited by the prospect of working alongside
            experienced developers, gaining hands-on experience
            and being involved in building software that solves
            real-world challenges.
          </p>

          <p>
            I know that I still have a lot to learn, but I see
            that as one of my greatest motivations. I bring curiosity,
            dedication and a strong willingness to improve, and I am
            ready to put in the effort required to become a valuable
            part of the team.
          </p>

          <p>
            For me, this position is more than just an opportunity
            to work with code. It is an opportunity to turn a genuine
            interest into a career, contribute with my own perspective
            and help develop technology with a meaningful purpose.
          </p>

          <p>
            I look forward to the possibility of discussing how
            I could contribute to your team.
          </p>

          <p className="signature">
            Best regards,<br />
            <strong>Shabana Sumbul Samey Foss</strong>
          </p>

          <p className="cv-note">
            My CV is attached and provides further details about
            my professional experience, education and skills.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <footer className="contact-section" id="contact">
        <div>
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Have a project in mind?</h2>
          <p>I'd love to hear from you.</p>
        </div>

        <div className="contact-links">
          <a href="mailto:shabanasumbul1@hotmail.com">
            EMAIL ↗
          </a>
          <a href="tel:+4520167590">
            PHONE ↗
          </a>
          <a
            href="https://portfolio2.designbysumbul.dk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PORTFOLIO ↗
          </a>
          <a
            href="https://www.linkedin.com/in/shabana-samey-foss-6a9132172/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN ↗
          </a>
        </div>

        <div className="footer-bottom">
          <span>SHABANA SUMBUL SAMEY FOSS</span>
          <span>DESIGNED & DEVELOPED WITH CURIOSITY.</span>
          <span>2026</span>
        </div>
      </footer>

    </main>
  )
}

export default App
