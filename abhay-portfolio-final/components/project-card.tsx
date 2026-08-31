import { ArrowUpRight, BookOpen, BrainCircuit, Github, LineChart, ShoppingBag, Workflow } from "lucide-react";
import type { Project } from "@/content/site";
import { Reveal } from "./reveal";

const projectIcons = { book: BookOpen, churn: LineChart, ai: BrainCircuit, commerce: ShoppingBag, insight: Workflow };

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = projectIcons[project.icon];
  return (
    <Reveal delay={index * 75}>
      <article className="project-card">
        <div className={`project-visual visual-${project.icon}`} aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span><Icon size={42} strokeWidth={1.25} /><i /></div>
        <div className="project-content">
          <p className="project-focus">{project.focus}</p>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <ul className="tags" aria-label={`${project.name} technologies`}>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
          <div className="project-links"><a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}><Github size={15} aria-hidden="true" /> GitHub <ArrowUpRight size={15} aria-hidden="true" /></a></div>
        </div>
      </article>
    </Reveal>
  );
}
