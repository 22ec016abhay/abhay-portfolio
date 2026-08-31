"use client";

import { Download, Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "@/content/site";

const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)} aria-label="Abhay Pareek, home">AP<span>.</span></a>
        <div className="desktop-nav">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</div>
        <div className="nav-actions">
          <div className="nav-socials">
            <a className="nav-placeholder" href={profile.github} target="_blank" rel="noreferrer" aria-label="Visit Abhay Pareek's GitHub profile"><Github size={17} /></a>
            <a className="nav-placeholder" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Visit Abhay Pareek's LinkedIn profile"><Linkedin size={17} /></a>
          </div>
          <a href={profile.resume} className="resume-button" download>Resume <Download size={15} aria-hidden="true" /></a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>{item}</a>)}
          <a href={profile.resume} download tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>Download resume <Download size={16} /></a>
        </div>
      </nav>
    </header>
  );
}
