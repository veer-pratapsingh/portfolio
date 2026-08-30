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

const hotelBenchmarks = [
  { name: "DO & CO Hotel", city: "Munich", url: "https://www.docohotel.com/munich/en/home/", cue: "One clear luxury story" },
  { name: "BEYOND by Geisel", city: "Munich", url: "https://www.beyond-muc.de/en/", cue: "Place-led visual identity" },
  { name: "Pullman Munich", city: "Munich", url: "https://www.pullman-hotel-muenchen.de/", cue: "Meetings made findable" },
  { name: "Legend Hotel", city: "Cologne", url: "https://www.legendhotel.de/en/", cue: "Rooms framed as experiences" },
  { name: "Rhein-Hotel St. Martin", city: "Cologne", url: "https://www.rheinhotel-koeln.de/en", cue: "Direct-booking benefits" },
  { name: "The Midtown Hotel", city: "Cologne", url: "https://themidtownhotel.de/en/", cue: "Simple room comparison" },
  { name: "RAAS Hotels", city: "India", url: "https://www.raashotels.com/", cue: "Heritage through modern design" },
  { name: "Seclude Hotels", city: "India", url: "https://seclude.in/", cue: "Destination discovery" },
  { name: "Brij Hotels", city: "India", url: "https://www.brijhotels.com/hotels/all", cue: "Story-rich property portfolio" },
  { name: "Neemrana Hotels", city: "India", url: "https://www.neemranahotels.com/", cue: "History as differentiation" },
  { name: "The Park Hotels", city: "India", url: "https://www.theparkhotels.com/", cue: "Culture-led hospitality" },
  { name: "The Independent Hotel Co.", city: "India", url: "https://www.theinhoco.com/", cue: "Independent hotel clarity" },
];

const auditFindings = [
  {
    number: "01",
    title: "A strong location is buried",
    text: "The Elbe, nature reserve and cycle route are genuine advantages, but long passages of copy delay the emotional reason to stay.",
  },
  {
    number: "02",
    title: "Too many routes to choose from",
    text: "The navigation spreads rooms, packages, wellness, events, meetings and local guides across a deep hierarchy instead of five confident guest journeys.",
  },
  {
    number: "03",
    title: "Booking and enquiry feel separate",
    text: "A third-party room flow, restaurant enquiry and meeting enquiry compete with one another. Guests need one persistent next step with the direct-booking benefit visible.",
  },
  {
    number: "04",
    title: "The event calendar loses trust",
    text: "The 2026 calendar still displays May 2025 dates and a raw search phrase. Every event should be current, visual and directly reservable.",
  },
  {
    number: "05",
    title: "Hotel and restaurant need one story",
    text: "Stay, dine, celebrate and meet are valuable revenue lines. A shared visual system can cross-sell them without making the experience feel crowded.",
  },
  {
    number: "06",
    title: "The message needs an editorial pass",
    text: "Repetition, spelling issues and inconsistent travel-time claims weaken a proposition that is otherwise specific and appealing.",
  },
];

const proposal = [
  { title: "A conversion-led website", text: "A modern bilingual site with Stay, Eat, Celebrate, Meet and Explore at its core—plus a visible booking bar and clear room comparison." },
  { title: "A living event calendar", text: "Current event cards with menus, availability, reservation actions and reusable templates your team can update without rebuilding a page." },
  { title: "A hospitality content engine", text: "Monthly content direction for rooms, regional food, celebrations, business events and the Elberadweg—adapted for web, Instagram and campaigns." },
  { title: "Brand and growth consulting", text: "Sharper positioning, direct-booking messages, seasonal campaign planning, review-led trust and measurement of enquiries and booking clicks." },
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
          <a href="#elbrivera">ElbRivera pitch</a>
          <a href="#work">Our work</a>
          <a href="#content">Content</a>
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

      <section className="pitch-section" id="elbrivera">
        <div className="pitch-intro">
          <p className="section-kicker">A focused opportunity / Hotel ElbRivera</p>
          <h2>The hotel has a story.<br /><span>The website should sell it.</span></h2>
          <div className="pitch-summary">
            <p>
              ElbRivera already has what guests want: a quiet setting by the Elbe,
              direct-booking savings, a restaurant, events and meeting space.
              The opportunity is to turn those strengths into a faster, clearer journey.
            </p>
            <a href="https://www.hotel-elbrivera.de/" target="_blank" rel="noreferrer">
              View current website <ExternalArrow />
            </a>
          </div>
        </div>

        <div className="audit-grid">
          {auditFindings.map((finding) => (
            <article key={finding.number}>
              <span>{finding.number}</span>
              <h3>{finding.title}</h3>
              <p>{finding.text}</p>
            </article>
          ))}
        </div>

        <div className="proposal-block">
          <div className="proposal-lead">
            <p className="section-kicker">What we would build</p>
            <h3>One connected guest journey—from discovery to direct booking.</h3>
          </div>
          <div className="proposal-list">
            {proposal.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <div><h4>{item.title}</h4><p>{item.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <p className="section-kicker">Verified client work / 2024–26</p>
          <h2>Real work, already live.</h2>
          <p>
            Seven websites we delivered, including hospitality projects in
            Germany and India. Every project below links to the live result.
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

      <section className="benchmark-section" id="benchmarks">
        <div className="benchmark-heading">
          <p className="section-kicker">Hospitality projects / Selected hotels</p>
          <h2>Selected hotel projects,<br /><span>across three markets.</span></h2>
          <p>
            Twelve hotel websites across Munich, Cologne and India, selected
            for their approach to storytelling, direct booking and guest experience.
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

      <section className="content-section" id="content">
        <div className="content-heading">
          <p className="section-kicker light">Content management / Selected accounts</p>
          <h2>More than posting.<br /><span>Building a presence.</span></h2>
          <p>
            From editorial planning to publishing and community, we help brands
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
        <p className="section-kicker">For Hotel ElbRivera</p>
        <h2>Let’s turn more interest<br />into direct business.</h2>
        <a
          className="contact-button"
          href="https://github.com/veer-pratapsingh"
          target="_blank"
          rel="noreferrer"
        >
          Discuss the proposal <ExternalArrow />
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
