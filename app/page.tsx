/* eslint-disable @next/next/no-img-element */

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

const contentWork = [
  {
    number: "01",
    name: "Singh Laly Official",
    handle: "@singhlalyofficial",
    type: "Personal brand · Food & hospitality",
    description:
      "Short-form content and profile management for a Germany-based chef and hospitality entrepreneur—turning food, personality and culture into a consistent social presence.",
    image: "/content/singh-laly.jpg",
    url: "https://www.instagram.com/singhlalyofficial/",
    services: ["Content direction", "Reels", "Publishing", "Community"],
    accent: "content-warm",
  },
  {
    number: "02",
    name: "Intellia MIET",
    handle: "@intellia_miet",
    type: "Education · AI community",
    description:
      "Event-led content for MIET’s AI and AI/ML departmental society—making workshops, student activity and campus momentum visible.",
    image: "/content/intellia-2.jpg",
    url: "https://www.instagram.com/intellia_miet/",
    services: ["Event coverage", "Editorial planning", "Visual system", "Community"],
    accent: "content-cool",
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
          <a href="#work">Websites</a>
          <a href="#content">Content</a>
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
            Web development · Content management
          </p>
          <h1>
            Websites that work.
            <span>Content that connects.</span>
          </h1>
          <p className="hero-intro">
            I build high-performing digital experiences and manage social
            content that gives brands a clear, consistent voice.
          </p>
          <a className="primary-button" href="#work">
            Explore selected work <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="hero-aside" aria-label="Portfolio summary">
          <div className="portrait-card">
            <img
              src="/avatar.jpg"
              alt="Veer Pratap Singh"
              width="360"
              height="360"
              loading="eager"
              fetchPriority="high"
            />
            <span>Veer Pratap Singh</span>
          </div>
          <div className="hero-stat">
            <div><strong>07</strong><span>Live websites</span></div>
            <i aria-hidden="true" />
            <div><strong>02</strong><span>Social brands</span></div>
          </div>
          <div className="orbit-note" aria-hidden="true">
            <span>Build</span><span>Publish</span><span>Grow</span>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>
          <span>Web strategy</span><b>✦</b><span>Development</span><b>✦</b>
          <span>Content direction</span><b>✦</b><span>Social media</span><b>✦</b>
          <span>Web strategy</span><b>✦</b><span>Development</span><b>✦</b>
          <span>Content direction</span><b>✦</b><span>Social media</span><b>✦</b>
        </div>
      </div>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="section-kicker">Website portfolio / 2024–26</p>
          <h2>Websites built to perform.</h2>
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
                <img
                  src={project.image}
                  alt={`${project.title} website homepage`}
                  width="1440"
                  height="900"
                  loading="lazy"
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

      <section className="content-section" id="content">
        <div className="content-heading">
          <p className="section-kicker light">Content management / Selected accounts</p>
          <h2>More than posting.<br /><span>Building a presence.</span></h2>
          <p>
            From editorial planning to publishing and community, I help brands
            show up with content that feels coherent, relevant and unmistakably theirs.
          </p>
        </div>

        <div className="content-services" aria-label="Content management services">
          <span>Direction</span><span>Planning</span><span>Reels</span>
          <span>Publishing</span><span>Community</span>
        </div>

        <div className="content-grid">
          {contentWork.map((account) => (
            <article className={`content-case ${account.accent}`} key={account.url}>
              <a
                className="content-visual"
                href={account.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${account.name} on Instagram`}
              >
                <div className="social-bar" aria-hidden="true">
                  <span className="social-avatar">{account.name.slice(0, 1)}</span>
                  <div><strong>{account.handle}</strong><small>Instagram</small></div>
                  <b>•••</b>
                </div>
                <img
                  src={account.image}
                  alt={`${account.name} content management work`}
                  width="1200"
                  height="800"
                  loading="lazy"
                />
                <span className="instagram-badge" aria-hidden="true">View account ↗</span>
              </a>
              <div className="content-info">
                <p className="content-meta">{account.number} / {account.type}</p>
                <h3>{account.name}</h3>
                <p>{account.description}</p>
                <ul aria-label={`Services provided for ${account.name}`}>
                  {account.services.map((service) => <li key={service}>{service}</li>)}
                </ul>
                <a href={account.url} target="_blank" rel="noreferrer">
                  Open on Instagram <ExternalArrow />
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
            Strong work gets attention.
            <span>Clear thinking keeps it.</span>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            I’m Veer, a developer and content manager who turns ambitious ideas
            into useful digital experiences. My work moves between brand,
            story, interface and code—so every touchpoint feels connected.
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
            <h3>Shape the system</h3>
            <p>Turn that idea into a visual and editorial system with purposeful rhythm and a recognisable voice.</p>
          </div>
          <div>
            <span>03</span>
            <h3>Build, publish, learn</h3>
            <p>Ship with care, watch what resonates and keep improving the experience across every channel.</p>
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
        <p>Web development & content management by Veer Pratap Singh.</p>
        <p>© 2026 · Meerut, India</p>
      </footer>
    </main>
  );
}
