import { ArrowDownRight, ArrowUpRight, Database, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Header } from "@/components/header";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { education, profile, projects, skillGroups } from "@/content/site";

const roleTools = ["SQL", "Python", "Excel", "Power BI", "PostgreSQL", "Data Visualization"];

function SocialLink({ href, label, icon }: { href: string; label: string; icon?: React.ReactNode }) {
  return (
    <a className="placeholder-link" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
      {icon}
      {label}
    </a>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main>
      <Header />

      <section id="home" className="hero section-shell" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <Reveal>
            <p className="eyebrow"><Sparkles size={14} aria-hidden="true" /> Data analyst in the making</p>
            <h1 id="hero-heading">Turning data into <em>actionable</em> insights.</h1>
            <p className="hero-intro">
              I&apos;m Abhay Pareek, an aspiring data professional building practical analytics projects with thoughtful analysis and clear visual stories.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="tool-list" aria-label="Core tools">
              {roleTools.map((tool) => <span key={tool}>{tool}</span>)}
            </div>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View projects <ArrowDownRight size={17} aria-hidden="true" /></a>
              <a className="button button-secondary" href={profile.resume} download>Download resume <ArrowDownRight size={17} aria-hidden="true" /></a>
            </div>
            <div className="social-row" aria-label="Social links">
              <SocialLink href={profile.github} label="GitHub" icon={<Github size={17} aria-hidden="true" />} />
              <SocialLink href={profile.linkedin} label="LinkedIn" icon={<Linkedin size={17} aria-hidden="true" />} />
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="hero-art-wrap">
          <div className="hero-art" aria-label="Abstract data analysis illustration" role="img">
            <div className="art-topline"><span>ANALYSIS / 01</span><span>2026</span></div>
            <div className="chart-card chart-card-main">
              <div className="chart-label"><span>Insight trajectory</span><strong>+24.8%</strong></div>
              <svg viewBox="0 0 360 180" aria-hidden="true" focusable="false">
                <defs><linearGradient id="fill" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#c9e969" stopOpacity=".34"/><stop offset="1" stopColor="#c9e969" stopOpacity="0"/></linearGradient></defs>
                <path d="M4 149 C42 137 50 148 77 116 S119 98 142 113 S184 134 207 91 S248 87 272 61 S318 62 356 15 V176H4Z" fill="url(#fill)"/>
                <path d="M4 149 C42 137 50 148 77 116 S119 98 142 113 S184 134 207 91 S248 87 272 61 S318 62 356 15" fill="none" stroke="#c9e969" strokeWidth="4" strokeLinecap="round"/>
                <circle cx="272" cy="61" r="5" fill="#f7f7f2" stroke="#c9e969" strokeWidth="3"/>
              </svg>
              <div className="chart-footer"><span>JAN</span><span>APR</span><span>AUG</span><span>DEC</span></div>
            </div>
            <div className="stat-card stat-card-one"><span>ROWS EXPLORED</span><strong>∞</strong><i /></div>
            <div className="stat-card stat-card-two"><Database size={19} aria-hidden="true" /><span>Raw data → clarity</span></div>
            <div className="crosshair" aria-hidden="true" />
          </div>
        </Reveal>
      </section>

      <section id="about" className="section section-shell split-section" aria-labelledby="about-heading">
        <Reveal><p className="section-index">01 / About</p></Reveal>
        <div>
          <Reveal><h2 id="about-heading">Curious by nature.<br /><em>Methodical</em> by practice.</h2></Reveal>
          <Reveal delay={100}>
            <div className="about-copy">
              <p>I come from an Electronics &amp; Communication Engineering background and am building my career toward data analytics. I enjoy the process of asking good questions, working through the details, and turning raw information into useful business context.</p>
              <p>Through practical projects, I work with SQL, Python, Excel, and Power BI to explore datasets, uncover patterns, and communicate insights with clarity.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="skills" className="section section-shell" aria-labelledby="skills-heading">
        <Reveal><div className="section-heading"><div><p className="section-index">02 / Skills</p><h2 id="skills-heading">A focused <em>toolkit.</em></h2></div><p>I use a practical set of tools to move from raw data to a useful point of view.</p></div></Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.name} delay={index * 75}>
              <article className="skill-group"><span className="skill-number">0{index + 1}</span><h3>{group.name}</h3><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="projects" className="section section-shell projects-section" aria-labelledby="projects-heading">
        <Reveal><div className="section-heading"><div><p className="section-index">03 / Selected work</p><h2 id="projects-heading">Projects with <em>purpose.</em></h2></div><p>A growing collection of hands-on work across analytics, data applications, and connected systems.</p></div></Reveal>
        <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div>
      </section>

      <section className="section section-shell education-section" aria-labelledby="education-heading">
        <Reveal><p className="section-index">04 / Education</p><div className="education-card"><div><p className="education-label">Academic foundation</p><h2 id="education-heading">{education.degree} <span>—</span> <em>{education.branch}</em></h2></div><div className="education-meta"><p>{education.institution}</p><p>{education.graduation}</p></div></div></Reveal>
      </section>

      <section className="section section-shell github-section" aria-labelledby="github-heading">
        <Reveal><div className="github-card"><div className="github-icon"><Github size={26} aria-hidden="true" /></div><div><p className="section-index">05 / Open source</p><h2 id="github-heading">Follow the work<br />as it <em>evolves.</em></h2></div><div className="github-cta"><p>Explore my project repositories and follow my growing body of work on GitHub.</p><SocialLink href={profile.github} label="GitHub profile" icon={<ArrowUpRight size={17} aria-hidden="true" />} /></div></div></Reveal>
      </section>

      <section id="contact" className="contact section-shell" aria-labelledby="contact-heading">
        <Reveal><p className="section-index">06 / Contact</p><h2 id="contact-heading">Let&apos;s work<br />with <em>data.</em></h2><p className="contact-copy">Have a project, an idea, or an analytics conversation in mind? I&apos;d be glad to hear from you.</p><div className="contact-links"><SocialLink href={`mailto:${profile.email}`} label={profile.email} icon={<Mail size={18} aria-hidden="true" />} /><SocialLink href={profile.github} label="GitHub" icon={<Github size={18} aria-hidden="true" />} /><SocialLink href={profile.linkedin} label="LinkedIn" icon={<Linkedin size={18} aria-hidden="true" />} /></div></Reveal>
      </section>

      <footer className="footer section-shell"><p>© {year} Abhay Pareek</p><p>Data Analyst</p><div><SocialLink href={profile.github} label="GitHub" /><SocialLink href={profile.linkedin} label="LinkedIn" /><SocialLink href={`mailto:${profile.email}`} label="Email" /></div></footer>
    </main>
  );
}
