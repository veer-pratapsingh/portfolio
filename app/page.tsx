/* eslint-disable @next/next/no-img-element */

const projects = [
  {
    number: "01",
    title: "Hotel Metropolis",
    type: "Hospitality · Srinagar",
    description:
      "A calm, conversion-focused booking experience shaped around the warmth of Kashmiri hospitality.",
    image: "/projects/hotel-metropolis.png",
    url: "https://hotelmetropolis.in/",
    accent: "accent-forest",
    size: "project-wide",
  },
  {
    number: "02",
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
    number: "03",
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
    number: "04",
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
    number: "05",
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
    number: "06",
    title: "Tripund Technologies",
    type: "Digital product agency",
    description:
      "A clean, contemporary agency site positioning an end-to-end team for ambitious digital products.",
    image: "/projects/tripund.png",
    url: "https://tripundtechnologies.in/",
    accent: "accent-amber",
    size: "project-wide",
  },
  {
    number: "07",
    title: "Hotel ElbRivera",
    type: "Hospitality · Magdeburg",
    description:
      "A conversion-led hospitality experience translating riverside stays, wellness, F&B and events into one clearer guest journey.",
    image: null,
    url: "https://www2.hotel-elbrivera.de/hotel-magdeburg-concept-a-vorschau-entwurf/",
    displayUrl: "hotel-elbrivera.de / Magdeburg",
    accent: "accent-coral",
    size: "project-wide",
  },
  {
    number: "08",
    title: "Langbar Berlin",
    type: "Hospitality · Berlin",
    description:
      "A vivid Berlin bar experience built around atmosphere, place and a sharper conversion path.",
    image: null,
    url: "https://langbar-berlin-concept.vercel.app/",
    displayUrl: "langbar-berlin.de / Route 01",
    accent: "accent-violet",
    size: "",
  },
  {
    number: "09",
    title: "Langbar Berlin — Night Edit",
    type: "Hospitality · Berlin",
    description:
      "A more editorial, night-led identity for Langbar Berlin with a clear path from discovery to reservation.",
    image: null,
    url: "https://langbar-berlin-concept-2.vercel.app/",
    displayUrl: "langbar-berlin.de / Night edit",
    accent: "accent-blue",
    size: "project-wide project-final",
  },
];

const hotelBenchmarks = [
  { name: "RAAS Hotels", city: "India", url: "https://www.raashotels.com/", cue: "Heritage through modern design" },
  { name: "Seclude Hotels", city: "India", url: "https://seclude.in/", cue: "Destination discovery" },
  { name: "Brij Hotels", city: "India", url: "https://www.brijhotels.com/hotels/all", cue: "Story-rich property portfolio" },
  { name: "Neemrana Hotels", city: "India", url: "https://www.neemranahotels.com/", cue: "History as differentiation" },
  { name: "The Park Hotels", city: "India", url: "https://www.theparkhotels.com/", cue: "Culture-led hospitality" },
  { name: "The Independent Hotel Co.", city: "India", url: "https://www.theinhoco.com/", cue: "Independent hotel clarity" },
];

function ExternalArrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Veer and Inderpreet — home">
          V<span>+</span>I
        </a>
        <nav aria-label="Primary navigation">
          <a href="/research">Our research</a>
          <a href="#work">Our work</a>
          <a href="#studio">Studio</a>
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
            Independent brand partners · India & Germany
          </p>
          <h1>
            We build brands
            <span>people choose.</span>
          </h1>
          <p className="hero-intro">
            Veer Pratap Singh and Inderpreet Singh partner on websites, content,
            social media management and brand consulting—with a focus on hospitality.
          </p>
          <a className="primary-button" href="#work">
            Explore selected work <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="hero-aside" aria-label="Portfolio summary">
          <div className="partner-card">
            <p>Two perspectives. One connected brand.</p>
            <div>
              <span>01</span>
              <strong>Veer Pratap Singh</strong>
            </div>
            <div>
              <span>02</span>
              <strong>Inderpreet Singh</strong>
            </div>
          </div>
          <div className="hero-stat">
            <div><strong>09</strong><span>Web projects</span></div>
            <i aria-hidden="true" />
            <div><strong>03</strong><span>Hospitality projects</span></div>
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
          <p className="section-kicker">Our work / 2024–26</p>
          <h2>Our work, already live.</h2>
          <p>
            Websites and digital experiences across hospitality, technology, health,
            food and product brands. Every project below links to the live result.
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
                  <p>{project.displayUrl ?? project.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</p>
                </div>
                <div className="live-preview" aria-hidden="true">
                  {project.image ? (
                    <img
                      className="preview-poster"
                      src={project.image}
                      alt=""
                      width="1440"
                      height="900"
                      loading="lazy"
                    />
                  ) : null}
                  <iframe
                    className="live-preview-frame"
                    src={project.url}
                    title={`${project.title} live preview`}
                    loading="lazy"
                    scrolling="no"
                    allow="autoplay; fullscreen; picture-in-picture"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                  <span className="preview-live-label"><i /> Live view</span>
                </div>
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

      <section className="benchmark-section" id="benchmarks">
        <div className="benchmark-heading">
          <p className="section-kicker">Hospitality projects / Selected hotels</p>
          <h2>Selected hotel projects,<br /><span>across India.</span></h2>
          <p>
            Six India-based hotel websites selected for their approach to
            storytelling, direct booking and guest experience.
          </p>
        </div>
        <div className="benchmark-grid">
          {hotelBenchmarks.map((hotel, index) => (
            <a href={hotel.url} target="_blank" rel="noreferrer" key={hotel.url}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><strong>{hotel.name}</strong><small>{hotel.city} · {hotel.cue}</small></div>
              <ExternalArrow />
            </a>
          ))}
        </div>
      </section>

      <section className="about-section" id="studio">
        <div className="about-intro">
          <p className="section-kicker light">About / Approach</p>
          <h2>
            Strong work gets attention.
            <span>Clear thinking keeps it.</span>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            We are Veer Pratap Singh and Inderpreet Singh—independent partners
            working across brand strategy, websites, content and social media.
            Together, we connect the business story with every digital touchpoint.
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
        <p className="section-kicker">Start a conversation</p>
        <h2>Let’s turn your next idea<br />into direct business.</h2>
        <a
          className="contact-button"
          href="mailto:inderpreetsingh.offic@gmail.com?cc=veerrpratapsingh@gmail.com&subject=Project%20enquiry"
        >
          Discuss a project <ExternalArrow />
        </a>
      </section>

      <footer>
        <a className="monogram footer-mark" href="#top" aria-label="Back to top">
          V<span>+</span>I
        </a>
        <p>Web, content & brand consulting by Veer Pratap Singh + Inderpreet Singh.</p>
        <p>© 2026 · Meerut, India</p>
      </footer>
    </main>
  );
}
