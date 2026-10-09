/* eslint-disable @next/next/no-img-element */
import { Arrow } from "./arrow";

const projects = [
  {
    number: "01",
    title: "Hotel Metropolis",
    type: "Hospitality · Srinagar",
    description:
      "A calm, conversion-focused booking experience shaped around the warmth of Kashmiri hospitality.",
    image: "hotel-metropolis",
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
    image: "crickroo",
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
    image: "synterra",
    url: "https://synterra-technologies.vercel.app/",
    accent: "accent-stone",
    size: "",
  },
  {
    number: "04",
    title: "Hormone Nutrition Clinic",
    type: "Health & wellness",
    description:
      "A trustworthy, welcoming care experience that makes clinical nutrition feel human and approachable.",
    image: "hormone-nutrition",
    url: "https://www.hormonenutritionclinic.com/",
    accent: "accent-sage",
    size: "project-wide",
  },
  {
    number: "05",
    title: "Ambur Cold Chain",
    type: "Food & logistics",
    description:
      "A confident B2B presence for a modern cold-chain operation, from orchard to controlled storage.",
    image: "ambur",
    url: "https://ambur.co.in/",
    accent: "accent-slate",
    size: "",
  },
  {
    number: "06",
    title: "Tripund Technologies",
    type: "Digital product agency",
    description:
      "A clean, contemporary agency site positioning an end-to-end team for ambitious digital products.",
    image: "tripund",
    url: "https://tripundtechnologies.in/",
    accent: "accent-amber",
    size: "",
  },
  {
    number: "07",
    title: "Hotel ElbRivera",
    type: "Hospitality · Magdeburg",
    description:
      "A conversion-led hospitality experience translating riverside stays, wellness, F&B and events into one clearer guest journey.",
    image: "hotel-elbrivera",
    url: "https://www2.hotel-elbrivera.de/hotel-magdeburg-concept-a-vorschau-entwurf/",
    displayUrl: "hotel-elbrivera.de / Magdeburg",
    accent: "accent-river",
    size: "project-wide",
  },
  {
    number: "08",
    title: "Langbar Berlin",
    type: "Hospitality · Berlin",
    description:
      "A vivid Berlin bar experience built around atmosphere, place and a sharper conversion path.",
    image: "langbar-berlin",
    url: "https://langbar-berlin-concept.vercel.app/",
    displayUrl: "langbar-berlin.de / Route 01",
    accent: "accent-brass",
    size: "",
  },
  {
    number: "09",
    title: "Langbar Berlin — Night Edit",
    type: "Hospitality · Berlin",
    description:
      "A more editorial, night-led identity for Langbar Berlin with a clear path from discovery to reservation.",
    image: "langbar-berlin-night",
    url: "https://langbar-berlin-concept-2.vercel.app/",
    displayUrl: "langbar-berlin.de / Night edit",
    accent: "accent-bronze",
    size: "",
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

const services = ["Web strategy", "Development", "Content direction", "Social media"];

const contactHref =
  "mailto:inderpreetsingh.offic@gmail.com?cc=veerrpratapsingh@gmail.com&subject=Project%20enquiry";

// Every preview ships in three widths; the browser picks the sharpest one it needs.
const previewWidths = [640, 1280, 2000];

function previewSrcSet(image: string) {
  return previewWidths.map((width) => `/projects/${image}-${width}.webp ${width}w`).join(", ");
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#work">Skip to our work</a>

      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Veer and Inderpreet — home">
          V<span>+</span>I
        </a>
        <nav aria-label="Primary navigation">
          <a href="/research"><span>Our </span>research</a>
          <a href="#work"><span>Our </span>work</a>
          <a href="#studio">Studio</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-link" href="#contact">
          Discuss a project <Arrow direction="right" />
        </a>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-meta">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              Independent brand partners · India & Germany
            </p>
            <p className="hero-motto" aria-hidden="true">
              <span>Build</span><span>Publish</span><span>Grow</span>
            </p>
          </div>

          <h1>
            <span className="hero-line">We build brands</span>{" "}
            <span className="hero-line hero-line-accent">people choose.</span>
          </h1>

          <div className="hero-foot">
            <div className="hero-lead">
              <p className="hero-intro">
                Veer Pratap Singh and Inderpreet Singh partner on websites, content,
                social media management and brand consulting—with a focus on hospitality.
              </p>
              <div className="hero-actions">
                <a className="primary-button" href="#work">
                  Explore selected work <Arrow direction="down" />
                </a>
                <a className="ghost-button" href="#contact">
                  Discuss a project <Arrow direction="right" />
                </a>
              </div>
            </div>
            <dl className="hero-stat" aria-label="Portfolio summary">
              <div><dt>Web projects</dt><dd>09</dd></div>
              <div><dt>Hospitality projects</dt><dd>03</dd></div>
            </dl>
          </div>
        </section>

        <div className="showreel" aria-hidden="true">
          <div className="showreel-track">
            {[...projects, ...projects].map((project, index) => (
              <figure className="showreel-frame" key={`${project.image}-${index}`}>
                <span className="showreel-bar"><i /><i /><i /></span>
                <img
                  src={`/projects/${project.image}-640.webp`}
                  alt=""
                  width="640"
                  height="400"
                  decoding="async"
                />
              </figure>
            ))}
          </div>
        </div>

        <section className="work-section" id="work">
          <div className="section-heading">
            <p className="section-kicker">Our work / 2024–26</p>
            <h2>Our work, on the web.</h2>
            <p>
              Landing-page previews across hospitality, technology, health, food and
              product brands. Open any project to explore the full website.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={["project-card", project.size, project.accent].filter(Boolean).join(" ")}
                key={project.url}
              >
                <a
                  className="project-visual"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${project.title}`}
                >
                  <div className="browser-frame">
                    <div className="browser-bar" aria-hidden="true">
                      <span className="browser-dots"><i /><i /><i /></span>
                      <p>{project.displayUrl ?? project.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</p>
                      <span className="preview-label">Landing page</span>
                    </div>
                    <div className="landing-preview">
                      <img
                        className="landing-preview-image"
                        src={`/projects/${project.image}-1280.webp`}
                        srcSet={previewSrcSet(project.image)}
                        sizes={
                          project.size
                            ? "(max-width: 1024px) 92vw, 60vw"
                            : "(max-width: 720px) 92vw, 44vw"
                        }
                        alt={`${project.title} landing page`}
                        width="1280"
                        height="800"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                  <span className="visit-badge" aria-hidden="true">
                    Open website <Arrow />
                  </span>
                </a>
                <div className="project-info">
                  <div className="project-title">
                    <p className="project-meta"><span>{project.number}</span>{project.type}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <a
                    className="project-link"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open project <Arrow />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="benchmark-section" id="benchmarks">
          <div className="benchmark-heading">
            <p className="section-kicker">Hospitality projects / Selected hotels</p>
            <h2>Selected hotel projects,{" "}<br /><span>across India.</span></h2>
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
                <Arrow />
              </a>
            ))}
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div>
            {[0, 1, 2, 3].flatMap((group) =>
              services.map((service) => (
                <span key={`${group}-${service}`}>{service}<i /></span>
              )),
            )}
          </div>
        </div>

        <section className="about-section" id="studio">
          <div className="about-intro">
            <p className="section-kicker">About / Approach</p>
            <h2>
              Strong work gets attention.{" "}
              <span>Clear thinking keeps it.</span>
            </h2>
          </div>
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
              See how I build on GitHub <Arrow />
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
          <h2>Let’s turn your next idea{" "}<br />into direct business.</h2>
          <div className="contact-actions">
            <a className="contact-button" href={contactHref}>
              Discuss a project <Arrow />
            </a>
            <p>
              Or write to{" "}
              <a href={contactHref}>inderpreetsingh.offic@gmail.com</a>
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <a className="monogram footer-mark" href="#top" aria-label="Back to top">
            V<span>+</span>I
          </a>
          <p>Web, content & brand consulting by Veer Pratap Singh + Inderpreet Singh.</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#work">Our work</a>
          <a href="#benchmarks">Hospitality projects</a>
          <a href="#studio">Studio</a>
          <a href="/research">Our research</a>
        </nav>
        <div className="footer-connect">
          <a href={contactHref}>Email</a>
          <a href="https://github.com/veer-pratapsingh" target="_blank" rel="noreferrer">
            GitHub <Arrow />
          </a>
        </div>
        <p className="footer-legal">
          <span>© 2026 · Meerut, India</span>
          <a href="#top">Back to top <Arrow direction="up" /></a>
        </p>
      </footer>
    </>
  );
}
