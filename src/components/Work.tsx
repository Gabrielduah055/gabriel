import { projects } from '../data/projects';
import type { Project } from '../types';
import Reveal from './Reveal';

function ProjectRow({ num, title, desc, tags, href }: Project) {
  return (
    <Reveal>
      <div className="project" data-cursor-hover>
        <span className="proj-num">{num}</span>
        <div className="proj-body">
          <h2 className="proj-title">{title}</h2>
          <p className="proj-desc">{desc}</p>
          <div className="proj-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <a href={href} className="proj-arrow" aria-label={`View ${title}`}>
          ↗
        </a>
      </div>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section id="work">
      <p className="section-label">Selected work</p>
      <div className="projects">
        {projects.map((project) => (
          <ProjectRow key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
