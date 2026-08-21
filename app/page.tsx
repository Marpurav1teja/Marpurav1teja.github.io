import {
  ArrowDownRight,
  ArrowUpRight,
  ArrowRight,
  Award,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const metrics = [
  ["2.5B+", "records classified"],
  ["150+", "pipelines monitored"],
  ["99%", "ETL success rate"],
  ["95%", "manual effort reduced"],
  ["40%", "query performance improved"],
];

const skills = {
  "Data Engineering": [
    "Python",
    "PySpark",
    "SQL",
    "Databricks",
    "Delta Lake",
    "ADF",
  ],
  "Azure & Cloud": [
    "ADLS Gen2",
    "Azure DevOps",
    "Logic Apps",
    "Purview",
    "Automation Account",
    "ARM Templates",
  ],
  "DevOps & Platform": [
    "Terraform",
    "YAML CI/CD",
    "DAB",
    "Git",
    "SonarQube",
    "Docker",
    "Kubernetes",
  ],
  "Analytics & AI": [
    "Power BI",
    "DAX",
    "Azure OpenAI",
    "LLM",
    "AI/BI Dashboards",
    "Power Automate",
  ],
};

const experience = [
  {
    title: "Cloud Infrastructure & DevOps",
    icon: ServerCog,
    bullets: [
      "Provisioned full-stack Azure environments with private networking using ARM Templates and Terraform, cutting setup time to around 20 minutes.",
      "Designed Azure DevOps YAML CI/CD with Declarative Automation Bundles for ADF, Databricks and infrastructure deployments.",
      "Built selective deployments and integrated SonarQube + ARMTTK quality gates, reducing manual review effort by 80%.",
      "Automated Databricks and Purview provisioning through REST APIs, improving deployment efficiency by 70%.",
      "Created PowerShell automation for cost analytics and job-performance reporting, reducing manual effort by 95%.",
    ],
  },
  {
    title: "ETL & Data Engineering",
    icon: Database,
    bullets: [
      "Built metadata-driven ADF + Databricks pipelines ingesting terabytes from SAP, Salesforce, SFTP and RDBMS sources into Delta Lake.",
      "Developed PySpark frameworks for GB–TB scale CSV, JSON, Parquet and XML processing.",
      "Implemented event-driven ingestion for 20+ daily file arrivals, reducing manual intervention by 70%.",
      "Optimized Delta Lake with partitioning, liquid clustering, OPTIMIZE and VACUUM, improving query performance by 40%.",
      "Built high-throughput JDBC ingestion for millions of records per day and reusable workflows with schema evolution.",
    ],
  },
  {
    title: "AI, Analytics & Governance",
    icon: BrainCircuit,
    bullets: [
      "Led a team of 5 on a 2.5B+ record classification pipeline using rule-based, keyword and Azure OpenAI LLM approaches, achieving 90%+ accuracy.",
      "Designed centralized Power BI monitoring for 150+ pipelines, covering health, failures and SLA compliance.",
      "Built AI/BI dashboards for LLM token consumption, request volume and cost analytics.",
      "Implemented Unity Catalog governance, data-quality monitoring and Azure AD group-based RLS for 100M+ record datasets.",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "Enterprise Azure Data Platform",
    description:
      "A scalable ingestion and transformation platform connecting enterprise sources to curated Delta Lake layers for downstream analytics.",
    tags: ["ADF", "Databricks", "ADLS Gen2", "PySpark", "Delta Lake"],
    flow: [
      "SAP / Salesforce / SFTP",
      "ADF + Logic Apps",
      "ADLS Gen2",
      "Databricks / PySpark",
      "Delta Lake",
      "Power BI",
    ],
  },
  {
    number: "02",
    title: "2.5B+ Product Classification",
    description:
      "Large-scale hybrid classification using rules, keywords and Azure OpenAI to map product records into business-provided classifications.",
    tags: ["Azure OpenAI", "LLM", "PySpark", "Databricks", "2.5B+ records"],
    flow: [
      "Raw Products",
      "Rules",
      "Keywords",
      "LLM",
      "Classification",
      "Quality Checks",
    ],
  },
  {
    number: "03",
    title: "Data Platform CI/CD & IaC",
    description:
      "Standardized delivery with Git-based branching, YAML pipelines, Terraform, ARM Templates, DAB and automated quality gates.",
    tags: ["Azure DevOps", "Terraform", "ARM", "YAML", "SonarQube"],
    flow: [
      "Git",
      "CI Checks",
      "Selective Build",
      "Quality Gates",
      "Deploy",
      "Govern",
    ],
  },
];

const certifications = [
  "Databricks Certified: Data Engineer Professional",
  "Databricks Certified: Machine Learning Professional",
  "Databricks Certified Generative AI Engineer Associate",
  "Microsoft Certified: Fabric Data Engineer Associate",
  "Microsoft Certified: Azure AI Engineer Associate",
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top">
          RT<span>.</span>
        </a>
        <div className="navlinks">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#skills">Stack</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="/resume.pdf">
          Resume <ArrowUpRight size={15} />
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="grid-bg" />
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="pulse" /> OPEN TO DATA ENGINEERING OPPORTUNITIES
          </div>
          <h1>
            Engineering data systems
            <br />
            <em>at scale.</em>
          </h1>
          <p className="hero-text">
            I&apos;m <strong>Ravi Teja Marpu</strong>, an Azure Cloud Data
            Engineer at Infosys building scalable data platforms, automated
            delivery systems and AI-powered data solutions.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              Explore my work <ArrowDownRight size={17} />
            </a>
            <a className="button ghost" href="mailto:marpuraviteja@gmail.com">
              Let&apos;s connect <Mail size={17} />
            </a>
          </div>
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/raviteja.marpu"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href="https://github.com/Raviteja.marpu"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>
        <div className="hero-art">
          <div className="orb orb1" />
          <div className="orb orb2" />
          <div className="terminal-card">
            <div className="terminal-top">
              <span />
              <span />
              <span />
              <small>data_platform.py</small>
            </div>
            <pre>{`pipeline = (
  source
    .ingest()
    .transform()
    .validate()
    .publish()
)

# scale: TB → PB
# lake: Delta Lake
# engine: Databricks

status = "production-ready"`}</pre>
            <div className="terminal-status">
              <CheckCircle2 size={15} /> pipelines healthy <b>●</b>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics">
        {metrics.map(([n, l]) => (
          <div className="metric" key={l}>
            <strong>{n}</strong>
            <span>{l}</span>
          </div>
        ))}
      </section>

      <section className="section about" id="about">
        <div className="section-label">01 / ABOUT</div>
        <div className="about-grid">
          <div>
            <h2>
              From raw data
              <br />
              <span>to reliable decisions.</span>
            </h2>
          </div>
          <div className="about-copy">
            <p>
              Results-driven Azure Cloud Data Engineer with experience across
              cloud infrastructure, ETL design and DevOps automation. I
              specialize in Azure Data Factory, Databricks, ADLS Gen2 and
              Microsoft Fabric.
            </p>
            <p>
              My work sits at the intersection of{" "}
              <b>data engineering, cloud platform engineering and applied AI</b>{" "}
              — from terabyte-scale ingestion and Delta Lake optimization to
              LLM-powered classification and governed analytics.
            </p>
            <div className="mini-facts">
              <span>
                <b>Infosys</b> · Specialist Programmer L1
              </span>
              <span>
                <b>IIIT Ranchi</b> · B.Tech, 8.9 CGPA
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section experience" id="experience">
        <div className="section-label">02 / EXPERIENCE</div>
        <div className="section-heading">
          <h2>
            What I&apos;ve been
            <br />
            <span>building.</span>
          </h2>
          <p>Infosys · Hyderabad · Dec 2024 — Present</p>
        </div>
        <div className="exp-grid">
          {experience.map((item) => {
            const Icon = item.icon;
            return (
              <article className="exp-card" key={item.title}>
                <div className="card-icon">
                  <Icon size={21} />
                </div>
                <h3>{item.title}</h3>
                <ul>
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section work" id="work">
        <div className="section-label">03 / SELECTED WORK</div>
        <div className="section-heading">
          <h2>
            Systems, not
            <br />
            <span>just projects.</span>
          </h2>
          <p>
            Production-scale engineering work from the enterprise data platform.
          </p>
        </div>
        <div className="projects">
          {projects.map((p) => (
            <article className="project" key={p.number}>
              <div className="project-head">
                <span>{p.number}</span>
                <Workflow size={19} />
              </div>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="flow">
                {p.flow.map((f, i) => (
                  <span key={f}>
                    <b>{String(i + 1).padStart(2, "0")}</b>
                    {f}
                    {i < p.flow.length - 1 && <ArrowRight />}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills" id="skills">
        <div className="section-label">04 / TECHNOLOGY</div>
        <div className="section-heading">
          <h2>
            The stack
            <br />
            <span>behind the work.</span>
          </h2>
        </div>
        <div className="skill-grid">
          {Object.entries(skills).map(([group, items]) => (
            <div className="skill-group" key={group}>
              <h3>{group}</h3>
              <div>
                {items.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section credentials">
        <div className="credentials-grid">
          <div>
            <div className="section-label">05 / CERTIFICATIONS</div>
            <h2>
              Credentials that
              <br />
              <span>back the craft.</span>
            </h2>
          </div>
          <div className="cert-list">
            {certifications.map((c, i) => (
              <div className="cert" key={c}>
                <span>0{i + 1}</span>
                <Award size={17} />
                <p>{c}</p>
                <CheckCircle2 size={17} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section recognition">
        <div className="section-label">06 / RECOGNITION</div>
        <div className="recognition-box">
          <div>
            <Sparkles size={24} />
            <h2>
              Trusted beyond
              <br />
              the job description.
            </h2>
          </div>
          <p>
            Recognized by delivery heads for representing the project during an
            external audit, appreciated by clients for critical incident
            resolution and cross-project DevOps support, and repeatedly
            recognized through Rise Insta and Business Ninja awards.
          </p>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-glow" />
        <div className="section-label">07 / CONTACT</div>
        <h2>
          Have data to
          <br />
          <em>build?</em>
        </h2>
        <p>
          Let&apos;s talk about data platforms, cloud engineering, Databricks or
          the next problem worth solving.
        </p>
        <a className="email-link" href="mailto:marpuraviteja@gmail.com">
          marpuraviteja@gmail.com <ArrowUpRight />
        </a>
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/raviteja.marpu"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/Raviteja.marpu"
            target="_blank"
            rel="noreferrer"
          >
            <Github /> GitHub
          </a>
          <a href="/resume.pdf">
            <ExternalLink /> Resume
          </a>
        </div>
      </section>

      <footer>
        <span>© 2026 Ravi Teja Marpu</span>
        <span>Azure · Data · Engineering</span>
      </footer>
    </main>
  );
}
