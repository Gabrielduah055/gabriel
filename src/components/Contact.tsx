import { useState, useRef } from 'react';
import type { FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import type { FormState } from '../types';
import Reveal from './Reveal';

const EMPTY_FORM: FormState = { name: '', email: '', message: '' };

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

export default function Contact() {
  const [form, setForm]       = useState<FormState>(EMPTY_FORM);
  const [sending, setSending] = useState(false);
  const [sent, setSent]       = useState(false);
  const [error, setError]     = useState('');
  const formRef               = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    setError('');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setForm(EMPTY_FORM);
      setSent(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const closePopup = () => setSent(false);

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
            gabrielagyemanduah@gmail.com<br />
            +233 &nbsp;·&nbsp; Available for freelance
          </p>
        </Reveal>

        <Reveal>
          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Who am I speaking with?"
                value={form.name}
                onChange={handleChange}
                required
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
                required
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
                required
              />
            </div>
            {error && <p className="form-error">{error}</p>}
            <button className="form-submit" type="submit" disabled={sending}>
              {sending ? 'Sending…' : <>Send it <span className="submit-line" /> →</>}
            </button>
          </form>
        </Reveal>

      </div>

      {sent && (
        <div className="toast-overlay" onClick={closePopup} aria-modal="true" role="dialog">
          <div className="toast-box" onClick={(e) => e.stopPropagation()}>
            <button className="toast-close" onClick={closePopup} aria-label="Close">×</button>
            <p className="toast-icon">✓</p>
            <p className="toast-title">Message sent!</p>
            <p className="toast-body">Thanks for reaching out. I&apos;ll get back to you soon.</p>
          </div>
        </div>
      )}
    </section>
  );
}
