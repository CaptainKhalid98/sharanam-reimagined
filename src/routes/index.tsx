import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Menu, Phone, Mail, MapPin, Minus, Plus, X } from "lucide-react";
import { useState } from "react";
import proshantiImage from "../assets/sharanam-proshanti.jpg";
import sukhaloyImage from "../assets/sharanam-sukhaloy.jpg";
import sunsetImage from "../assets/sharanam-sunset.jpg";
import officeImage from "../assets/sharanam-office.jpg";
import { useReveal } from "../hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sharanam Real Infra | Luxury Homes in Jolshiri, Dhaka" },
      { name: "description", content: "Sharanam Real Infra crafts distinctive residences in Jolshiri Abason, Dhaka — 35 years of experience and over 5 million square feet delivered." },
      { property: "og:title", content: "Sharanam Real Infra | Luxury Homes in Jolshiri, Dhaka" },
      { property: "og:description", content: "Thoughtfully designed residences and enduring landmarks in Jolshiri Abason, Dhaka." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  { name: "Sharanam Sukhaloy", type: "Residential", location: "Sector 16, Jolshiri Abason", image: sukhaloyImage, units: "24 apartments", size: "2,150 – 2,600 sft", status: "Ongoing" },
  { name: "Sharanam Proshanti", type: "Residential", location: "Sector 16, Jolshiri Abason", image: proshantiImage, units: "18 apartments", size: "1,850 – 2,400 sft", status: "Ongoing" },
  { name: "Sharanam Sunset Tower", type: "Residential", location: "Sector 16, Jolshiri Abason", image: sunsetImage, units: "30 apartments", size: "2,000 – 3,100 sft", status: "Upcoming" },
];

const services = [
  { n: "01", title: "Land & location", text: "We secure plots in planned, well-connected neighbourhoods where value grows with the city." },
  { n: "02", title: "Architecture", text: "Every floor plan is drawn around daylight, cross ventilation and generous, usable space." },
  { n: "03", title: "Construction", text: "Graded materials, seismic-conscious structures and independent testing at every stage." },
  { n: "04", title: "After handover", text: "Warranty support, facility guidance and a team that stays reachable long after you move in." },
];

const steps = [
  { title: "Discover", text: "Visit the site, walk the floor plans and understand the neighbourhood." },
  { title: "Reserve", text: "Choose your unit and secure it with a transparent booking agreement." },
  { title: "Build", text: "Track construction milestones with scheduled updates and site visits." },
  { title: "Handover", text: "Receive keys, documents and utility connections — all completed." },
];

const amenities = ["Rooftop garden", "Community lounge", "Gymnasium", "Standby generator", "Two lifts per core", "Covered parking", "24/7 security", "Children's play area", "Prayer space", "Solar-assisted lighting"];

const testimonials = [
  { quote: "The handover was on the date we were promised. In Dhaka, that alone says everything about how this team works.", name: "Rezaul Karim", role: "Homeowner, Sector 16" },
  { quote: "What sold us was the daylight. Every room breathes, and the finishing still looks new three years on.", name: "Farhana Haque", role: "Homeowner" },
  { quote: "They answered every question about materials with documents, not adjectives.", name: "Imtiaz Ahmed", role: "Investor" },
];

const faqs = [
  { q: "Where are your projects located?", a: "Our current residences are in Sector 16 of Jolshiri Abason, a planned township with wide roads, utilities and easy access to Purbachal and Kuril." },
  { q: "Can I visit an ongoing site?", a: "Yes. Site visits are arranged with a project engineer so you can see structure and materials first-hand. Call us to book a time." },
  { q: "Do you assist with home loans?", a: "We work with leading banks and financial institutions in Bangladesh and help prepare the documentation required for approval." },
  { q: "What happens after handover?", a: "Structural and fittings warranties apply after handover, and our service team supports facility setup and maintenance guidance." },
];

function Brand() {
  return (
    <a href="#top" className="brand" aria-label="Sharanam home">
      <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
      <span><strong>SHARANAM</strong><small>REAL INFRA</small></span>
    </a>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  useReveal();

  return (
    <main id="top">
      <header className="site-header">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">About</a><a href="#projects">Projects</a><a href="#approach">Approach</a><a href="#legacy">Our legacy</a><a href="#contact">Contact</a>
        </nav>
        <div className="header-actions">
          <a className="phone-link" href="tel:+8801404065831"><Phone size={14} /> 01404-065831</a>
          <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu /></button>
        </div>
      </header>

      {menuOpen && (
        <div className="menu-overlay">
          <button className="menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button>
          <Brand />
          <nav aria-label="Mobile navigation">
            {[{ label: "About", href: "#about" }, { label: "Projects", href: "#projects" }, { label: "Approach", href: "#approach" }, { label: "Our legacy", href: "#legacy" }, { label: "Contact", href: "#contact" }].map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<ArrowRight /></a>
            ))}
          </nav>
          <p>Dhaka, Bangladesh</p>
        </div>
      )}

      <section className="hero" aria-labelledby="hero-title">
        <img src={sukhaloyImage} alt="Sharanam Sukhaloy contemporary residential tower" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light rise" style={{ animationDelay: ".2s" }}>A new standard of living</p>
          <h1 id="hero-title"><span className="line"><span style={{ animationDelay: ".3s" }}>Sharanam</span></span><span className="line"><span style={{ animationDelay: ".42s" }}>Sukhaloy</span></span></h1>
          <div className="hero-footer rise" style={{ animationDelay: ".6s" }}>
            <p>Sector 16<br />Jolshiri Abason</p>
            <a href="#projects" className="round-link" aria-label="Explore projects"><ArrowDown /></a>
          </div>
        </div>
        <span className="hero-index">01 / 03</span>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>Jolshiri Abason · Thoughtful design · On-time delivery · 35 years of trust · 5M+ sft delivered · Jolshiri Abason · Thoughtful design · On-time delivery · </span>
          ))}
        </div>
      </div>

      <section className="manifesto" id="about">
        <p className="eyebrow" data-reveal>Built for generations</p>
        <div className="manifesto-grid">
          <h2 data-reveal>Creating spaces<br />that shape <em>life.</em></h2>
          <div data-reveal>
            <p>For over three decades, Sharanam has transformed considered design into enduring places. Every home begins with a promise: distinctive architecture, trusted quality and a better way to live.</p>
            <p className="muted-copy">We build a small number of residences each year, on purpose. It lets our engineers stay on site, our clients stay informed, and our finishing stay held to the standard our name carries.</p>
            <a href="#legacy" className="text-link">Discover our story <ArrowRight size={16} /></a>
          </div>
        </div>
        <div className="principles" aria-label="Our principles" data-reveal>
          <span>Prime locations</span><span>Thoughtful design</span><span>Uncompromising quality</span><span>On-time delivery</span>
        </div>
      </section>

      <section className="services" id="approach">
        <div className="section-heading">
          <div><p className="eyebrow" data-reveal>How we build</p><h2 data-reveal>An approach<br />without<br /><em>shortcuts.</em></h2></div>
          <p data-reveal>From the first survey to the day you turn the key, the same team stays accountable for your home.</p>
        </div>
        <div className="service-grid">
          {services.map((s, i) => (
            <article className="service-card" key={s.n} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
              <span>{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading">
          <div><p className="eyebrow" data-reveal>Selected residences</p><h2 data-reveal>Signature<br />Projects</h2></div>
          <p data-reveal>Homes shaped around light, space and the rhythm of everyday life.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.name} data-reveal style={{ transitionDelay: `${index * 110}ms` }}>
              <a href="#contact" aria-label={`Enquire about ${project.name}`}>
                <div className="project-image"><img src={project.image} alt={`${project.name} exterior`} loading={index === 0 ? "eager" : "lazy"} /><span>0{index + 1}</span><em>{project.status}</em></div>
                <div className="project-info">
                  <div><small>{project.type}</small><h3>{project.name}</h3><p>{project.location}</p></div>
                  <span className="arrow-button"><ArrowRight /></span>
                </div>
                <dl className="project-specs">
                  <div><dt>Units</dt><dd>{project.units}</dd></div>
                  <div><dt>Sizes</dt><dd>{project.size}</dd></div>
                </dl>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="amenities" aria-labelledby="amenities-title">
        <div>
          <p className="eyebrow" data-reveal>Inside every building</p>
          <h2 id="amenities-title" data-reveal>Details that<br />earn their <em>place.</em></h2>
        </div>
        <ul data-reveal>
          {amenities.map((a) => <li key={a}>{a}</li>)}
        </ul>
      </section>

      <section className="process">
        <p className="eyebrow" data-reveal>From first visit to keys</p>
        <h2 data-reveal>A clear path<br />to your <em>home.</em></h2>
        <ol className="process-list">
          {steps.map((s, i) => (
            <li key={s.title} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
              <span>0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="legacy" id="legacy">
        <div className="legacy-image" data-reveal><img src={officeImage} alt="Sharanam Real Infra team and office" loading="lazy" /></div>
        <div className="legacy-content">
          <p className="eyebrow light" data-reveal>Our foundation</p>
          <h2 data-reveal>Experience<br />you can <em>trust.</em></h2>
          <p data-reveal>Sharanam Group brings nearly 35 years of real estate expertise and more than 5 million square feet of landmark residential and commercial developments.</p>
          <div className="stats" data-reveal>
            <div><strong>35</strong><span>Years of<br />experience</span></div>
            <div><strong>5M+</strong><span>Square feet<br />delivered</span></div>
            <div><strong>40+</strong><span>Projects<br />completed</span></div>
            <div><strong>1200+</strong><span>Families<br />served</span></div>
          </div>
        </div>
      </section>

      <section className="testimonials" aria-labelledby="testimonials-title">
        <p className="eyebrow" data-reveal>In their words</p>
        <h2 id="testimonials-title" data-reveal>Trusted by the<br />families who <em>stay.</em></h2>
        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <figure key={t.name} data-reveal style={{ transitionDelay: `${i * 100}ms` }}>
              <blockquote>{t.quote}</blockquote>
              <figcaption><strong>{t.name}</strong><span>{t.role}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="faq" aria-labelledby="faq-title">
        <div>
          <p className="eyebrow" data-reveal>Good to know</p>
          <h2 id="faq-title" data-reveal>Questions,<br /><em>answered.</em></h2>
        </div>
        <div className="faq-list" data-reveal>
          {faqs.map((f, i) => (
            <div className={`faq-item${openFaq === i ? " open" : ""}`} key={f.q}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                <span>{f.q}</span>{openFaq === i ? <Minus size={18} /> : <Plus size={18} />}
              </button>
              <div className="faq-answer"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow" data-reveal>Begin a conversation</p>
        <h2 data-reveal>Your next chapter<br />starts <em>here.</em></h2>
        <a href="tel:+8801404065831" data-reveal>Talk to our team <ArrowRight /></a>
        <div className="contact-details" data-reveal>
          <span><Phone size={14} /> 01404-065831</span>
          <span><Mail size={14} /> info@sharanam.com.bd</span>
          <span><MapPin size={14} /> Sector 16, Jolshiri Abason, Dhaka</span>
        </div>
      </section>

      <footer>
        <Brand />
        <p>Dhaka, Bangladesh</p>
        <p>© 2026 Sharanam Real Infra Ltd.</p>
      </footer>
    </main>
  );
}
