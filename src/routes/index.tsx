import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import proshantiImage from "../assets/sharanam-proshanti.jpg";
import sukhaloyImage from "../assets/sharanam-sukhaloy.jpg";
import sunsetImage from "../assets/sharanam-sunset.jpg";
import officeImage from "../assets/sharanam-office.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sharanam Real Infra | Luxury Homes in Dhaka" },
      { name: "description", content: "Discover distinctive residences by Sharanam Real Infra, crafted with thoughtful design in the heart of Jolshiri Abason." },
      { property: "og:title", content: "Sharanam Real Infra | Luxury Homes in Dhaka" },
      { property: "og:description", content: "Thoughtfully designed residences and enduring landmarks in Jolshiri Abason, Dhaka." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  { name: "Sharanam Sukhaloy", type: "Residential", location: "Sector 16, Jolshiri Abason", image: sukhaloyImage },
  { name: "Sharanam Proshanti", type: "Residential", location: "Sector 16, Jolshiri Abason", image: proshantiImage },
  { name: "Sharanam Sunset Tower", type: "Residential", location: "Sector 16, Jolshiri Abason", image: sunsetImage },
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

  return (
    <main id="top">
      <header className="site-header">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">About</a><a href="#projects">Projects</a><a href="#legacy">Our legacy</a><a href="#contact">Contact</a>
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
            {["About", "Projects", "Our legacy", "Contact"].map((label) => (
              <a key={label} href={`#${label.toLowerCase().replace(" ", "-")}`} onClick={() => setMenuOpen(false)}>{label}<ArrowRight /></a>
            ))}
          </nav>
          <p>Dhaka, Bangladesh</p>
        </div>
      )}

      <section className="hero" aria-labelledby="hero-title">
        <img src={sukhaloyImage} alt="Sharanam Sukhaloy contemporary residential tower" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">A new standard of living</p>
          <h1 id="hero-title">Sharanam<br />Sukhaloy</h1>
          <div className="hero-footer">
            <p>Sector 16<br />Jolshiri Abason</p>
            <a href="#projects" className="round-link" aria-label="Explore projects"><ArrowDown /></a>
          </div>
        </div>
        <span className="hero-index">01 / 03</span>
      </section>

      <section className="manifesto" id="about">
        <p className="eyebrow">Built for generations</p>
        <div className="manifesto-grid">
          <h2>Creating spaces<br />that shape <em>life.</em></h2>
          <div>
            <p>For over three decades, Sharanam has transformed considered design into enduring places. Every home begins with a promise: distinctive architecture, trusted quality and a better way to live.</p>
            <a href="#legacy" className="text-link">Discover our story <ArrowRight size={16} /></a>
          </div>
        </div>
        <div className="principles" aria-label="Our principles">
          <span>Prime locations</span><span>Thoughtful design</span><span>Uncompromising quality</span><span>On-time delivery</span>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading">
          <div><p className="eyebrow">Selected residences</p><h2>Signature<br />Projects</h2></div>
          <p>Homes shaped around light, space and the rhythm of everyday life.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.name}>
              <a href="#contact" aria-label={`Enquire about ${project.name}`}>
                <div className="project-image"><img src={project.image} alt={`${project.name} exterior`} loading={index === 0 ? "eager" : "lazy"} /><span>0{index + 1}</span></div>
                <div className="project-info">
                  <div><small>{project.type}</small><h3>{project.name}</h3><p>{project.location}</p></div>
                  <span className="arrow-button"><ArrowRight /></span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="legacy" id="legacy">
        <div className="legacy-image"><img src={officeImage} alt="Sharanam Real Infra team and office" loading="lazy" /></div>
        <div className="legacy-content">
          <p className="eyebrow light">Our foundation</p>
          <h2>Experience<br />you can <em>trust.</em></h2>
          <p>Sharanam Group brings nearly 35 years of real estate expertise and more than 5 million square feet of landmark residential and commercial developments.</p>
          <div className="stats">
            <div><strong>35</strong><span>Years of<br />experience</span></div>
            <div><strong>5M+</strong><span>Square feet<br />delivered</span></div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">Begin a conversation</p>
        <h2>Your next chapter<br />starts <em>here.</em></h2>
        <a href="tel:+8801404065831">Talk to our team <ArrowRight /></a>
      </section>

      <footer>
        <Brand />
        <p>Dhaka, Bangladesh</p>
        <p>© 2026 Sharanam Real Infra Ltd.</p>
      </footer>
    </main>
  );
}