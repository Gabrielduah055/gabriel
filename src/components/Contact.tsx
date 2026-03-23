import { useState } from 'react';
import type { FormEvent } from 'react';
import type { FormState } from '../types';
import Reveal from './Reveal';

const EMPTY_FORM: FormState = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ready to wire up EmailJS / Formspree / any email API here
    console.log('Form submitted:', form);
    setForm(EMPTY_FORM);
  };

  return (
    <section id="contact">
      <p className="section-label">Get in touch</p>
      <div className="contact-wrap">

        <Reveal>
          <h2 className="contact-big">
            Let&apos;s make<br />something<br /><em>worth seeing.</em>
          </h2>
          <p className="contact-note">
            Whether it&apos;s a new project, a collaboration,<br />
            or just a conversation — my inbox is open.<br /><br />
            gabrielduah@email.com<br />
            +233 &nbsp;·&nbsp; Available for freelance
          </p>
        </Reveal>

        <Reveal>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Who am I speaking with?"
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Where can I reach you?"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
              />
            </div>
            <button className="form-submit" type="submit">
              Send it <span className="submit-line" /> →
            </button>
          </form>
        </Reveal>

      </div>
    </section>
  );
}
