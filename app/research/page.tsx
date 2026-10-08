import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Research — Hotel ElbRivera Growth Proposal",
  description:
    "A strategic digital, F&B and year-round growth proposal for Hotel ElbRivera by Veer Pratap Singh and Inderpreet Singh.",
};

const opportunities = [
  {
    number: "01",
    title: "Mobile booking friction",
    text: "The current journey makes direct booking harder than it should be, especially on a phone, where travel research and last-minute decisions happen.",
  },
  {
    number: "02",
    title: "Dining is harder to discover",
    text: "PDF-led menus and limited local promotion create unnecessary steps between a nearby guest and a table on the Elbe terrace.",
  },
  {
    number: "03",
    title: "The experience feels static online",
    text: "Rooms, wellness, cycling, food and celebrations need fresher visual storytelling, guest proof and a clearer path to action.",
  },
  {
    number: "04",
    title: "Winter demand needs a product",
    text: "Conference space, sauna, dining and events can become targeted off-season packages instead of relying mainly on warm-weather cycling traffic.",
  },
];

const services = [
  {
    number: "01",
    title: "Website & direct-booking journey",
    text: "A fast bilingual website organised around Stay, Dine, Wellness, Celebrate and Meet—with clear room choices, visible direct-booking reasons and a persistent booking action.",
    outcome: "Less friction · more qualified booking intent",
  },
  {
    number: "02",
    title: "SEO & GEO discoverability",
    text: "Technical SEO, local landing pages, structured data and answer-ready content for searches such as cycling stays, wellness weekends and riverside dining around Magdeburg. GEO extends that structure to AI-led discovery.",
    outcome: "Stronger visibility in search and AI answers",
  },
  {
    number: "03",
    title: "Google presence & reputation",
    text: "Optimise the Google Business Profile, keep hotel and restaurant information consistent, publish offers and events, and build an ethical post-stay review flow with thoughtful response management.",
    outcome: "More trust · better local discovery",
  },
  {
    number: "04",
    title: "Performance ads & remarketing",
    text: "Conversion-tracked Google and social campaigns for high-intent stays, local dining, celebrations and winter packages—supported by remarketing rather than broad, unmeasured spend.",
    outcome: "Demand matched to a measurable offer",
  },
  {
    number: "05",
    title: "Social media & content system",
    text: "A repeatable monthly plan for rooms, the Elbe, cycling, wellness, food, team stories, events and guest moments—adapted for the website, Instagram, short video and campaigns.",
    outcome: "An active brand guests can believe in",
  },
  {
    number: "06",
    title: "F&B Activation & Event Planning",
    text: "We shape the offer as well as the promotion: event concepts, menus, packages, launch calendars, creative assets and local campaigns that make the restaurant a destination in its own right.",
    outcome: "Local footfall · event enquiries · off-season revenue",
  },
  {
    number: "07",
    title: "Operations consulting & practical AI",
    text: "Map repetitive guest questions and handovers, then introduce useful tools such as a multilingual enquiry assistant, digital guest guide and automated but human-approved follow-up flows.",
    outcome: "Faster answers · less pressure on reception",
  },
];

const activationIdeas = [
  {
    label: "Warm season",
    title: "Elbe terrace evenings",
    text: "A bookable series of sunset BBQs, regional menus or acoustic evenings promoted to Magdeburg residents and weekend cyclists.",
  },
  {
    label: "Cycling audience",
    title: "Ride, refuel & stay",
    text: "A simple package combining secure bike storage, charging, breakfast, route content and an optional recovery or sauna element.",
  },
  {
    label: "Sunday demand",
    title: "Riverside brunch",
    text: "A recurring reservation-led brunch with a mobile menu, clear seating times, social creative and Google promotion.",
  },
  {
    label: "Cold season",
    title: "Sauna & supper weekends",
    text: "A couple-focused winter offer that packages the room, wellness and dinner into one emotionally clear reason to book.",
  },
  {
    label: "Business",
    title: "Small-team off-sites",
    text: "Meeting, accommodation, food and a nature-led break combined into a practical package for regional companies.",
  },
  {
    label: "Celebrations",
    title: "Occasions made visible",
    text: "Dedicated landing pages, sample formats and an enquiry flow for weddings, birthdays, private dining and seasonal celebrations.",
  },
];

const implementation = [
  {
    focus: "Mobile-first web overhaul",
    action: "Rebuild the experience around fast pages, clear guest journeys and a low-friction booking path.",
    result: "More visitors reach the booking engine or a relevant enquiry with confidence.",
  },
  {
    focus: "Active tourism & wellness search",
    action: "Build useful pages around the Elberadweg, bike facilities, nature, sauna and wellness-led stays.",
    result: "The property becomes more relevant to high-intent summer and winter searches.",
  },
  {
    focus: "Digital F&B & local marketing",
    action: "Replace static PDF dependence with mobile menus, event pages, QR journeys and geo-targeted campaigns.",
    result: "A simpler dining decision and a stronger path from local discovery to reservation.",
  },
  {
    focus: "Off-season event strategy",
    action: "Package and promote corporate off-sites, wellness weekends, holiday events and celebration formats.",
    result: "More reasons to visit between November and March and a healthier year-round demand mix.",
  },
];

const roadmap = [
  {
    phase: "Phase 01",
    title: "Measure & position",
    timing: "Weeks 1–2",
    text: "Analytics baseline, booking and enquiry map, technical audit, search research, Google profile review, positioning workshop and offer priorities.",
  },
  {
    phase: "Phase 02",
    title: "Build the conversion system",
    timing: "Weeks 3–8",
    text: "Website design and build, SEO/GEO architecture, dynamic menus, event templates, tracking, content production and review journey setup.",
  },
  {
    phase: "Phase 03",
    title: "Launch, activate & improve",
    timing: "Weeks 9–12 and ongoing",
    text: "Campaign launches, F&B activation, seasonal offers, weekly optimisation and a concise monthly report tied to business actions.",
  },
];

const measures = [
  "Direct-booking clicks and completed booking hand-offs",
  "Restaurant reservations and event enquiries",
  "Organic visibility for priority local and travel searches",
  "Google profile actions and qualified website visits",
  "Review volume, response rate and recurring feedback themes",
  "Paid campaign cost per qualified action",
  "Off-season package interest and conversion",
  "Reception questions resolved through self-service content",
];

function ExternalArrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function ResearchPage() {
  return (
    <main className="research-page">
      <header className="site-header research-header">
        <Link className="monogram" href="/" aria-label="Veer and Inderpreet — home">
          V<span>+</span>I
        </Link>
        <nav aria-label="Research navigation">
          <a href="#opportunity">Opportunity</a>
          <a href="#proposal">Proposal</a>
          <a href="#contact">Next step</a>
        </nav>
        <Link className="header-link" href="/">
          Back to portfolio
        </Link>
      </header>

      <section className="research-hero" id="top">
        <div className="research-hero-copy">
          <p className="section-kicker">Our research / Hotel ElbRivera</p>
          <h1>
            From riverside stay
            <span>to year-round destination.</span>
          </h1>
          <p>
            A practical growth proposal for a stronger direct-booking website,
            a more visible restaurant and a calendar of reasons to visit in every season.
          </p>
          <div className="research-actions">
            <a className="primary-button" href="#opportunity">
              Read the opportunity <span aria-hidden="true">↓</span>
            </a>
            <a
              className="research-text-link"
              href="https://www.hotel-elbrivera.de/"
              target="_blank"
              rel="noreferrer"
            >
              View current website <ExternalArrow />
            </a>
          </div>
        </div>
        <aside className="research-thesis" aria-label="Research thesis">
          <span>01 / Strategic thesis</span>
          <p>
            Hotel ElbRivera already has the ingredients. The digital system should
            connect stay, dine, wellness, cycling and events into measurable demand.
          </p>
          <div><strong>5</strong><small>connected guest journeys</small></div>
        </aside>
      </section>

      <section className="research-opportunity" id="opportunity">
        <div className="research-section-heading">
          <p className="section-kicker">Where demand is leaking</p>
          <h2>A valuable experience is being undersold online.</h2>
          <p>
            Our audit points to four connected issues. Solving them together can
            increase direct demand while making the hotel easier to choose.
          </p>
        </div>
        <div className="research-opportunity-grid">
          {opportunities.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="research-proposal" id="proposal">
        <div className="research-section-heading research-section-heading-light">
          <p className="section-kicker">The connected growth system</p>
          <h2>Not a new website in isolation. A better route to revenue.</h2>
          <p>
            Each service has a job in the guest journey—from first discovery to
            booking, visit, review and return. We can deliver the system in phases
            and work alongside the existing hotel team.
          </p>
        </div>
        <div className="research-services">
          {services.map((service) => (
            <article key={service.number}>
              <span>{service.number}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <small>{service.outcome}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="activation-section" id="activation">
        <div className="activation-lead">
          <p className="section-kicker">F&amp;B Activation &amp; Event Planning</p>
          <h2>Give locals and guests a reason to come now.</h2>
          <p>
            Food and events should not sit behind a menu link. We would turn them
            into named, bookable products with a calendar, creative campaign and
            clear audience for every activation.
          </p>
        </div>
        <div className="activation-grid">
          {activationIdeas.map((idea, index) => (
            <article key={idea.title}>
              <span>{String(index + 1).padStart(2, "0")} / {idea.label}</span>
              <h3>{idea.title}</h3>
              <p>{idea.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="implementation-section" id="plan">
        <div className="implementation-intro">
          <p className="section-kicker">Priority implementation plan</p>
          <h2>Four moves.<br /><span>One commercial direction.</span></h2>
          <p>
            This prioritisation turns the audit into action: remove friction first,
            then create the content and campaigns that build year-round demand.
          </p>
        </div>
        <div className="implementation-table" role="table" aria-label="Hotel ElbRivera implementation plan">
          <div className="implementation-row implementation-head" role="row">
            <span role="columnheader">Focus area</span>
            <span role="columnheader">Immediate action</span>
            <span role="columnheader">Business direction</span>
          </div>
          {implementation.map((item) => (
            <div className="implementation-row" role="row" key={item.focus}>
              <strong role="cell">{item.focus}</strong>
              <p role="cell">{item.action}</p>
              <p role="cell">{item.result}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="proof-section">
        <div className="proof-card">
          <p className="section-kicker">Relevant hospitality experience</p>
          <span className="proof-number">Hospitality systems / India + Germany</span>
          <h2>We understand how a river-adjacent hotel, restaurant and event venue can tell one commercial story.</h2>
          <p>
            Our portfolio spans hospitality websites, content systems and brand
            direction. That category knowledge lets us move quickly while building
            a distinct strategy for Hotel ElbRivera.
          </p>
        </div>
        <aside className="operating-card">
          <p className="section-kicker">How we work</p>
          <h3>Two partners, close to the work.</h3>
          <p>
            Veer Pratap Singh and Inderpreet Singh combine website development,
            content management and brand consulting. We work directly with the
            people running the property, with short feedback loops and clear ownership.
          </p>
          <ul>
            <li>Direct partner access</li>
            <li>Bilingual-ready delivery</li>
            <li>Flexible phased engagement</li>
            <li>Practical monthly reporting</li>
          </ul>
        </aside>
      </section>

      <section className="roadmap-section" id="roadmap">
        <div className="research-section-heading">
          <p className="section-kicker">A focused first 90 days</p>
          <h2>Strategy becomes visible through delivery.</h2>
          <p>
            The first quarter establishes the measurement, rebuilds the main guest
            journey and launches the first demand-generating offers.
          </p>
        </div>
        <div className="roadmap-grid">
          {roadmap.map((item) => (
            <article key={item.phase}>
              <div><span>{item.phase}</span><small>{item.timing}</small></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="measurement-section">
        <div>
          <p className="section-kicker">What we measure</p>
          <h2>Progress you can see—not vague marketing activity.</h2>
          <p>
            Before promising a forecast, we would validate the property’s current
            analytics, booking-engine data, seasonality and advertising history.
            The operating scorecard would then track the actions closest to revenue.
          </p>
        </div>
        <ol>
          {measures.map((measure, index) => (
            <li key={measure}><span>{String(index + 1).padStart(2, "0")}</span>{measure}</li>
          ))}
        </ol>
      </section>

      <aside className="research-note">
        <strong>Research note</strong>
        <p>
          This proposal is based on a public-facing review of the current website and
          the supplied strategic audit. Traffic, booking, OTA, review and revenue data
          should be validated with Hotel ElbRivera before targets or forecasts are set.
        </p>
      </aside>

      <section className="research-contact" id="contact">
        <p className="section-kicker">The next step</p>
        <h2>Let’s turn the Elbe location into a year-round demand engine.</h2>
        <p>
          In a short working session, we can confirm priorities, access the right
          business data and define a phased scope for website, growth and F&amp;B activation.
        </p>
        <div className="research-contact-actions">
          <a className="contact-button" href="mailto:inderpreetsingh.offic@gmail.com?cc=veerrpratapsingh@gmail.com&subject=Hotel%20ElbRivera%20proposal">
            Discuss the proposal <ExternalArrow />
          </a>
          <div>
            <a href="tel:+4915510832303">Inderpreet · +49 155 10832303</a>
            <a href="tel:+491634073138">Veer · +49 163 4073138</a>
          </div>
        </div>
      </section>

      <footer>
        <a className="monogram footer-mark" href="#top" aria-label="Back to top">
          V<span>+</span>I
        </a>
        <p>Research and proposal by Veer Pratap Singh + Inderpreet Singh.</p>
        <p><Link href="/">Return to portfolio</Link></p>
      </footer>
    </main>
  );
}
