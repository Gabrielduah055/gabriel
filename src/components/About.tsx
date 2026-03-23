import { stackGroups } from '../data/stack';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about">
      <p className="section-label">About</p>
      <div className="about-grid">

        <Reveal>
          <p className="about-text">
            I&apos;m a web developer with a <em>quiet obsession</em> for the details most
            people miss — the transition that feels right, the layout that breathes, the
            interaction that surprises.<br /><br />
            I work across the full stack: from pixel-precise interfaces to RESTful APIs. I
            care just as much about how something <em>looks</em> as how it runs.<br /><br />
            Based in Accra. Available for select projects worldwide.
          </p>
        </Reveal>

        <Reveal>
          {stackGroups.map((group) => (
            <div className="stack-group" key={group.label}>
              <p className="stack-label">{group.label}</p>
              <div className="stack-pills">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>

      </div>
    </section>
  );
}
