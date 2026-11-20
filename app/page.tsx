/* eslint-disable @next/next/no-img-element */
import { Arrow } from "./arrow";
import { HeaderTone } from "./header-tone";
import { Letters } from "./letters";
import { PixelTransition } from "./pixel-transition";

// Content follows the curated "Selected work" on the GitHub profile and the generic CV.
// Projects with a live demo get a full-width panel; the rest are listed in the index.
const featured = [
  {
    title: "AFS In-line Spectroscopy Assistant",
    type: "National AI Hackathon 2026",
    stack: "Python, LangGraph, FAISS, FastAPI, React",
    description:
      "A four-agent LangGraph system (Clarifier, ReAct Researcher, Writer, Critic) turns a customer’s process description into a cited technical assessment. Hybrid FAISS + BM25 retrieval with page-level citations and an LLM critic for verification; shipped full-stack with FastAPI streaming on Render, React and TypeScript on Vercel, and Supabase login.",
    image: "afs-national-ai-hackathon",
    url: "https://afsnationalaihackathon.vercel.app/",
    code: "https://github.com/Adarshpandey2003/afs_national_ai_hackathon",
    award: "schubKI Founders’ Award",
    awardNote: "One of two winning teams among 63 · Team ZeroOne with Adarsh Pandey, for OVGU",
    stats: [
      { value: "14/14", label: "Benchmark reports passed every check" },
      { value: "728", label: "Valid citations" },
      { value: "0", label: "Unsupported numbers" },
      { value: "2–4 min", label: "Per cited assessment" },
    ],
  },
  {
    title: "md forge",
    type: "Web tool",
    stack: "JavaScript, pdf.js, SheetJS, gpt-tokenizer",
    description:
      "Converts PDF, Word, Excel, PowerPoint, HTML and more to clean Markdown in the browser, and shows how many tokens and dollars that saves before a file goes to an LLM. Nothing is uploaded.",
    image: "md-forge",
    url: "https://md-forge-teal.vercel.app/",
    code: "https://github.com/veer-pratapsingh/md-forge",
    // The md forge UI is light, so it gets a pale overlay and a black title.
    light: true,
  },
];

const projects = [
  {
    title: "Fairness in LLM-based learning recommendation",
    type: "Human-Centred AI · OVGU 2026",
    result: "10.6M events",
    description:
      "Retrieve-then-rerank on 10.6M OULAD clickstream events: collaborative filtering retrieves 50 candidates, LLMs rerank the top 10, benchmarked against ALS and SASRec over 5 seeds. Post-hoc reranking cut the equal-opportunity gap by 10% at a 13% recall cost.",
    stack: "Python, PyTorch, Gemini, Mistral, DeepSeek, GPT-4o-mini, pytest",
    code: "https://github.com/veer-pratapsingh/HCAI-fairness-recsys",
  },
  {
    title: "Airline satisfaction MLOps pipeline",
    type: "MLOps team project · OVGU 2026",
    result: "~130k records",
    description:
      "Nine-step pipeline behind a four-stage GitLab CI/CD: Feast feature store, Optuna-tuned models tracked in MLflow, a ROC-AUC gate for champion and challenger promotion, FastAPI serving with an 80/20 traffic split, Grafana monitoring.",
    stack: "Python, Feast, MLflow, Docker, FastAPI, Grafana",
    code: "https://github.com/veer-pratapsingh/airline-satisfaction-mlops",
  },
  {
    title: "Focus Guardian",
    type: "Windows desktop app · v0.2",
    result: "Local-first",
    description:
      "You choose the apps and websites a session needs, and anything else is interrupted with a full-screen reminder of what you meant to finish. Companion Chrome extension, tray mode, no account, no cloud.",
    stack: "JavaScript, Electron, Chrome extension",
    code: "https://github.com/veer-pratapsingh/focus-guardian",
  },
  {
    title: "Sign-language detection",
    type: "B.Tech research · Published",
    result: "99.7% accuracy",
    description:
      "Real-time sign-language and hand-gesture recognition with deep learning and OpenCV, trained and evaluated on 34,000+ images.",
    stack: "Python, OpenCV, deep learning",
    code: "https://github.com/veer-pratapsingh/Final-Year-Project-Sign-Language-Detection",
  },
];

const experience = [
  {
    role: "Software Engineer",
    company: "Swaja Robotics",
    period: "Jul 2024 – Sep 2025",
    text: "Real-time MQTT pipelines in Python and SQL for 100+ connected devices, a home-automation platform on Raspberry Pi (Python, Electron, REST APIs, PostgreSQL), and Power BI and Tableau dashboards that improved monitoring efficiency by 30%.",
  },
  {
    role: "Team Lead",
    company: "talk2move",
    period: "Jul 2025 – Jul 2026",
    text: "Part-time in Germany alongside my M.Sc.: promoted from fundraiser after three months, then led a team raising funds for Plan International, SOS-Kinderdörfer, CARE and WWF.",
  },
  {
    role: "Technology Intern",
    company: "UMUN Tech",
    period: "Jul 2023 – Apr 2024",
    text: "Client websites and web apps deployed on Azure, a real-time library space booking system from stakeholder interviews to launch, and a company website that contributed to a 35% increase in digital visibility across solutions for 50+ clients.",
  },
  {
    role: "Intern",
    company: "IIT Kanpur",
    period: "2023",
    text: "An interactive virtual fluid-chemistry lab with 15+ animated experiments, used remotely by 500+ students.",
  },
];

const education = [
  {
    degree: "M.Sc. Data and Knowledge Engineering",
    detail: "Otto von Guericke University Magdeburg · since 2025, expected 2028",
  },
  {
    degree: "B.Tech Computer Science and Engineering (AI & ML)",
    detail: "AKTU, MIET Meerut · 2020–24 · First Division with Distinction",
  },
];

const beyondCode = [
  {
    role: "Founder and President, Intellia AI & ML Society",
    detail: "2022–24 · Built it to 60+ members; ran 5+ hackathons and 10+ hands-on trainings reaching 1,000+ students.",
  },
  {
    role: "Cloud Computing Head, Microsoft Learn Student Ambassadors",
    detail: "2023–24 · Trained 150+ students in Azure fundamentals through 10+ workshops.",
  },
];

const toolbox = [
  {
    label: "AI & LLM",
    items: "LangChain, LangGraph, FAISS, LLM APIs (OpenAI, Gemini, DeepSeek, Mistral, NVIDIA NIM), retrieve-then-rerank, prompt engineering, SASRec, NLP, computer vision",
  },
  {
    label: "Machine learning",
    items: "PyTorch, scikit-learn, TensorFlow/Keras, XGBoost, LightGBM, Optuna, statistical testing",
  },
  { label: "MLOps", items: "MLflow, Feast, Docker, GitLab CI/CD, FastAPI, Prometheus, Grafana" },
  { label: "Data & cloud", items: "SQL, PostgreSQL, Supabase, ETL/ELT, MQTT, AWS, Azure, Power BI, Tableau" },
  {
    label: "Languages & web",
    items: "Python, TypeScript, JavaScript, C/C++, C#, React, Next.js, Node.js, Express, Electron",
  },
  {
    label: "Certifications",
    items: "AWS Certified AI Practitioner · AWS Certified Cloud Practitioner · Microsoft Power BI Data Analyst Associate (PL-300) · Azure Fundamentals (AZ-900) · Azure AI Fundamentals (AI-900) · Azure Data Fundamentals (DP-900)",
  },
  {
    label: "Awards",
    items: "schubKI Founders’ Award, National AI Hackathon 2026 (one of two winning teams among 63) · Gold Medal in AI (Wipro TalentNext) · 1st place, Cisco ThingQbator competition",
  },
  { label: "Languages", items: "English (C1) · German (A2, improving) · Hindi (native)" },
];

const email = "veerrpratapsingh@gmail.com";
const contactHref = `mailto:${email}?subject=Hello%20Veer`;
const cvHref = "/Veer_Pratap_Singh_CV.pdf";
const github = "https://github.com/veer-pratapsingh";
const linkedin = "https://www.linkedin.com/in/veer-pratap-singh07/";
const studio = "https://v-and-i-portfolio.vercel.app/";
const orange = "#ff5500";
const ink = "#0b0b0b";

// Every preview ships in three widths; the browser picks the sharpest one it needs.
const previewWidths = [640, 1280, 2000];

function previewSrcSet(image: string) {
  return previewWidths.map((width) => `/projects/${image}-${width}.webp ${width}w`).join(", ");
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#work">Skip to selected work</a>
      {/* CSS-only intro: plays once per load in about 1.6 s and never blocks clicks. */}
      <div className="loader" aria-hidden="true">
        <p className="loader-text"><Letters text="I build AI that ships" /></p>
        <p className="loader-count" />
      </div>
      <div className="progress" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Veer Pratap Singh, back to top">
          <span className="brand-mark" aria-hidden="true" />
          Veer Pratap Singh
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      {/* Outside the blended header so it stays orange over every section. */}
      <a className="cv-button" href={cvHref} download>
        Download CV <Arrow direction="down" />
      </a>
      <HeaderTone />

      <main>
        <section className="hero" id="top">
          <h1 className="hero-name" aria-label="Veer Pratap Singh">
            <span><Letters text="Veer Pratap" /></span>{" "}
            <span><Letters text="Singh" seed={11} /></span>
          </h1>
          <div className="hero-columns">
            <p>
              AI &amp; full-stack engineer<br />
              M.Sc. Data &amp; Knowledge Engineering, OVGU<br />
              Based in Magdeburg, Germany
            </p>
            <p>
              <strong>Winner of the schubKI Founders’ Award</strong> at the National AI
              Hackathon 2026. Fifteen months as a software engineer, building IoT data
              pipelines for 100+ devices.
            </p>
          </div>
          <div className="hero-bar">
            <a href="#work">Scroll to explore <Arrow direction="down" /></a>
            <p>
              <span className="status-dot" aria-hidden="true" />
              Open to Werkstudent roles · up to 20 h/week, from now
            </p>
            <p>English C1 · German A2</p>
          </div>
        </section>

        <section className="statement" aria-label="What I do">
          <p className="statement-label">(What I do)</p>
          <p className="statement-text">
            <em>I build AI that ships:</em> LLM applications, retrieval and reranking pipelines,
            MLOps systems and real-time IoT data pipelines. I like owning the whole path,
            from raw data to a deployed, monitored service.
          </p>
        </section>

        <section className="work" id="work" aria-labelledby="work-title">
          <div className="label-row">
            <h2 id="work-title">(Selected work)</h2>
            <span>{pad(featured.length + projects.length)} projects</span>
            <span>2023–26</span>
          </div>

          {featured.map((project, index) => (
            <article className="feature" key={project.title}>
              <a
                className={project.light ? "feature-panel is-light" : "feature-panel"}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open the live demo of ${project.title}`}
              >
                <img
                  src={`/projects/${project.image}-1280.webp`}
                  srcSet={previewSrcSet(project.image)}
                  sizes="100vw"
                  alt=""
                  width="1280"
                  height="800"
                  loading="lazy"
                  decoding="async"
                />
                <h3><Letters text={project.title} /></h3>
                <span className="feature-meta">
                  <span>{pad(index + 1)} / {project.type}</span>
                  <span className="sq">{project.stack}</span>
                  <span className="sq">Live demo</span>
                </span>
                {/* The award panel dissolves into the orange band below it. */}
                {project.award && <PixelTransition fill={orange} />}
              </a>

              {project.award ? (
                <div className="award">
                  <div className="award-head">
                    <p className="sq">Winner</p>
                    <p>{project.type}</p>
                    <p>{project.awardNote}</p>
                  </div>
                  <p className="award-title">{project.award}</p>
                  <dl className="award-stats">
                    {project.stats?.map((stat) => (
                      <div key={stat.label}>
                        <dt>{stat.label}</dt>
                        <dd>{stat.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="award-body">
                    <p>{project.description}</p>
                    <div className="feature-links">
                      <a className="text-link" href={project.url} target="_blank" rel="noreferrer">
                        Live demo <Arrow />
                      </a>
                      <a className="text-link" href={project.code} target="_blank" rel="noreferrer">
                        Code <Arrow />
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="feature-body">
                  <p>{project.description}</p>
                  <div className="feature-links">
                    <a className="text-link" href={project.url} target="_blank" rel="noreferrer">
                      Live demo <Arrow />
                    </a>
                    <a className="text-link" href={project.code} target="_blank" rel="noreferrer">
                      Code <Arrow />
                    </a>
                  </div>
                </div>
              )}
            </article>
          ))}

          <ul className="index">
            {projects.map((project, index) => {
              const content = (
                <>
                  <span className="index-number">{pad(featured.length + index + 1)}</span>
                  <div className="index-main">
                    <h3>{project.title}</h3>
                    <p className="index-description">{project.description}</p>
                    <p className="index-stack">{project.stack}</p>
                  </div>
                  <div className="index-side">
                    <p>{project.type}</p>
                    <p className="index-result">{project.result}</p>
                    <p className="index-cta">Code <Arrow /></p>
                  </div>
                </>
              );
              return (
                <li key={project.title}>
                  <a className="index-row" href={project.code} target="_blank" rel="noreferrer">
                    {content}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="work-more">
            <a className="see-more" href={studio} target="_blank" rel="noreferrer">
              See my studio work with Inderpreet <Arrow />
            </a>
            <p>
              Websites for hotels, bars and small businesses. Also: a Unity 6 training
              simulator of a biogas plant, built with chemical-engineering students.
            </p>
          </div>
        </section>

        <section className="experience" id="experience" aria-labelledby="experience-title">
          <div className="label-row">
            <h2 id="experience-title">(Experience)</h2>
            <span>Industry</span>
            <span>2023–26</span>
          </div>
          <ul className="experience-list">
            {experience.map((job) => (
              <li key={job.company}>
                <h3>{job.role}</h3>
                <p className="experience-company">{job.company}</p>
                <p className="experience-period">{job.period}</p>
                <p className="experience-text">{job.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <div className="label-row">
            <h2 id="about-title">(About)</h2>
            <span>Profile</span>
            <span>Magdeburg, Germany</span>
          </div>
          <div className="about-intro">
            {/* Lines drift in from alternate sides as the section scrolls into view. */}
            <p className="about-heading">
              <span>From raw data</span> <span>to a monitored</span> <span>service.</span>
            </p>
            <p>
              Before my master’s I spent 15 months as a software engineer at Swaja Robotics,
              building data pipelines for 100+ connected devices. I’m open to working-student
              (Werkstudent) roles in AI, data, cloud and full-stack engineering, starting now.
            </p>
          </div>
          <dl className="spec">
            <div>
              <dt>Education</dt>
              <dd>
                <ul className="spec-list">
                  {education.map((item) => (
                    <li key={item.degree}><strong>{item.degree}</strong><span>{item.detail}</span></li>
                  ))}
                </ul>
              </dd>
            </div>
            <div>
              <dt>Beyond code</dt>
              <dd>
                <ul className="spec-list">
                  {beyondCode.map((item) => (
                    <li key={item.role}><strong>{item.role}</strong><span>{item.detail}</span></li>
                  ))}
                </ul>
              </dd>
            </div>
            {toolbox.map((row) => (
              <div key={row.label}>
                <dt>{row.label}</dt>
                <dd>{row.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* The page dissolves into the dark contact section. */}
        <div className="pixel-strip" aria-hidden="true">
          <PixelTransition fill={ink} />
        </div>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <p className="contact-kicker">(Get in touch)</p>
          <h2 id="contact-title">Let’s build<br />something <em>useful.</em></h2>
          <a className="contact-email" href={contactHref}>
            {email} <Arrow />
          </a>
          <ul className="contact-links">
            <li>
              <a className="contact-cv" href={cvHref} download>
                Download CV (PDF) <Arrow direction="down" />
              </a>
            </li>
            <li><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></li>
            <li><a href={github} target="_blank" rel="noreferrer">GitHub <Arrow /></a></li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Veer Pratap Singh</span>
        <a href={studio} target="_blank" rel="noreferrer">V+I studio <Arrow /></a>
        <a href="#top">Back to top <Arrow direction="up" /></a>
      </footer>
    </>
  );
}
