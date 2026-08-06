import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "Das Elb",
    type: "Hospitality · Germany",
    description:
      "A destination-led hotel and restaurant experience for one of Magdeburg’s most distinctive stays.",
    image: "/projects/daselb.png",
    url: "https://daselb.com/",
    accent: "accent-gold",
    size: "project-wide",
  },
  {
    number: "02",
    title: "Hotel Metropolis",
    type: "Hospitality · Srinagar",
    description:
      "A calm, conversion-focused booking experience shaped around the warmth of Kashmiri hospitality.",
    image: "/projects/hotel-metropolis.png",
    url: "https://hotelmetropolis.in/",
    accent: "accent-forest",
    size: "",
  },
  {
    number: "03",
    title: "CrickRoo",
    type: "Sports technology",
    description:
      "A high-energy product site for cricket training intelligence, built to make performance feel tangible.",
    image: "/projects/crickroo.png",
    url: "https://www.crickroo.com/",
    accent: "accent-orange",
    size: "",
  },
  {
    number: "04",
    title: "Synterra Tech Labs",
    type: "Technology studio",
    description:
      "A precise editorial identity for a software studio building scalable web, mobile, AI and cloud products.",
    image: "/projects/synterra.png",
    url: "https://synterra-technologies.vercel.app/",
    accent: "accent-rust",
    size: "project-wide",
  },
  {
    number: "05",
    title: "Hormone Nutrition Clinic",
    type: "Health & wellness",
    description:
      "A trustworthy, welcoming care experience that makes clinical nutrition feel human and approachable.",
    image: "/projects/hormone-nutrition.png",
    url: "https://www.hormonenutritionclinic.com/",
    accent: "accent-sage",
    size: "",
  },
  {
    number: "06",
    title: "Ambur Cold Chain",
    type: "Food & logistics",
    description:
      "A confident B2B presence for a modern cold-chain operation, from orchard to controlled storage.",
    image: "/projects/ambur.png",
    url: "https://ambur.co.in/",
    accent: "accent-red",
    size: "",
  },
  {
    number: "07",
    title: "Tripund Technologies",
    type: "Digital product agency",
    description:
      "A clean, contemporary agency site positioning an end-to-end team for ambitious digital products.",
    image: "/projects/tripund.png",
    url: "https://tripundtechnologies.in/",
    accent: "accent-amber",
    size: "project-wide project-final",
  },
];

function ExternalArrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Veer Pratap Singh — home">
          V<span>/</span>PS
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          className="header-link"
          href="https://github.com/veer-pratapsingh"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <ExternalArrow />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Independent web developer · India
          </p>
          <h1>
            I build websites
            <span>people remember.</span>
          </h1>
          <p className="hero-intro">
            Digital experiences with strong ideas, thoughtful interaction and
            the technical craft to make every detail feel effortless.
          </p>
          <a className="primary-button" href="#work">
            Explore selected work <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="hero-aside" aria-label="Portfolio summary">
          <div className="portrait-card">
            <Image
              src="/avatar.jpg"
              alt="Veer Pratap Singh"
              width="360"
              height="360"
              priority
              sizes="(max-width: 720px) 60vw, 340px"
            />
            <span>Veer Pratap Singh</span>
          </div>
          <div className="hero-stat">
            <strong>07</strong>
            <span>Live digital products<br />across 5 industries</span>
          </div>
          <div className="orbit-note" aria-hidden="true">
            <span>Design</span><span>Development</span><span>Delivery</span>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>
          <span>Strategy</span><b>✦</b><span>UI/UX</span><b>✦</b>
          <span>Development</span><b>✦</b><span>Performance</span><b>✦</b>
          <span>Strategy</span><b>✦</b><span>UI/UX</span><b>✦</b>
          <span>Development</span><b>✦</b><span>Performance</span><b>✦</b>
        </div>
      </div>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="section-kicker">Selected work / 2024–26</p>
          <h2>Built for the real world.</h2>
          <p>
            Seven live websites, each shaped around a different audience,
            industry and business goal.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${project.size} ${project.accent}`}
              key={project.url}
            >
              <a
                className="project-visual"
                href={project.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${project.title}`}
              >
                <div className="browser-bar" aria-hidden="true">
                  <span /><span /><span />
                  <p>{project.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</p>
                </div>
                <Image
                  src={project.image}
                  alt={`${project.title} website homepage`}
                  width="1440"
                  height="900"
                  sizes="(max-width: 720px) 100vw, (max-width: 1200px) 50vw, 92vw"
                />
                <span className="visit-badge" aria-hidden="true">Visit site ↗</span>
              </a>
              <div className="project-info">
                <div>
                  <p className="project-meta">{project.number} / {project.type}</p>
                  <h3>{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <a
                  className="project-link"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  View live project <ExternalArrow />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-intro">
          <p className="section-kicker light">About / Approach</p>
          <h2>
            Good websites look sharp.
            <span>Great ones move the business forward.</span>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            I’m Veer, a developer who enjoys turning ambitious ideas into
            fast, intuitive digital experiences. My work moves between brand,
            interface and code—so the final product feels considered from the
            first scroll to the last click.
          </p>
          <a
            href="https://github.com/veer-pratapsingh"
            target="_blank"
            rel="noreferrer"
          >
            See how I build on GitHub <ExternalArrow />
          </a>
        </div>
        <div className="process-grid">
          <div>
            <span>01</span>
            <h3>Find the signal</h3>
            <p>Clarify the audience, the business goal and the one idea the experience should own.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Shape the experience</h3>
            <p>Turn that idea into a visual system with purposeful hierarchy, rhythm and interaction.</p>
          </div>
          <div>
            <span>03</span>
            <h3>Ship with care</h3>
            <p>Build responsively, tune performance and polish the small details that earn trust.</p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="section-kicker">Have a project in mind?</p>
        <h2>Let’s make it<br />worth remembering.</h2>
        <a
          className="contact-button"
          href="https://github.com/veer-pratapsingh"
          target="_blank"
          rel="noreferrer"
        >
          Start a conversation <ExternalArrow />
        </a>
      </section>

      <footer>
        <a className="monogram footer-mark" href="#top" aria-label="Back to top">
          V<span>/</span>PS
        </a>
        <p>Web design & development by Veer Pratap Singh.</p>
        <p>© 2026 · Meerut, India</p>
      </footer>
    </main>
  );
}
