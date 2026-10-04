import CopyEmail from '@/components/CopyEmail';

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Tien Pham Dinh (Tyler Pham) — AI Engineer in Hanoi, Vietnam. Open to freelance, consulting, and remote AI engineering work. Usually replies within a day.',
  alternates: { canonical: '/contact' },
};

const MAILTO =
  'mailto:phamdt203@gmail.com?subject=Hello%20Tien%20%E2%80%94%20let%27s%20talk';

export default function Contact() {
  return (
    <main className="page">
      <div className="wrap">
        <div className="page-hero">
          <div className="ey">Contact</div>
          <h1>Let&apos;s build something great.</h1>
          <p className="lead">
            I&apos;m open to freelance, consulting, and remote AI engineering work. Tell me what
            you&apos;re working on — I usually reply within a day.
          </p>
        </div>

        <section className="contact-panel">
          <div className="reveal">
            <div className="panel-h">Reach me directly</div>
            <div className="method-list">
              <a className="method" href={MAILTO}>
                <span className="mi">@</span>
                <span className="mb">
                  <span className="ml">Email</span>
                  <span className="mv">phamdt203@gmail.com</span>
                </span>
                <span className="arr" aria-hidden="true">↗</span>
              </a>
              <a
                className="method"
                href="https://www.linkedin.com/in/phamdt203/"
                target="_blank"
                rel="noopener"
                aria-label="Tien Pham Dinh on LinkedIn (opens in new tab)"
              >
                <span className="mi">in</span>
                <span className="mb">
                  <span className="ml">LinkedIn</span>
                  <span className="mv">/in/phamdt203</span>
                </span>
                <span className="arr" aria-hidden="true">↗</span>
              </a>
              <a
                className="method"
                href="https://github.com/0121ienT"
                target="_blank"
                rel="noopener"
                aria-label="Tien Pham Dinh on GitHub (opens in new tab)"
              >
                <span className="mi">GH</span>
                <span className="mb">
                  <span className="ml">GitHub</span>
                  <span className="mv">@0121ienT</span>
                </span>
                <span className="arr" aria-hidden="true">↗</span>
              </a>
              <a
                className="method"
                href="/PhamDinhTien_AI_Engineer.pdf"
                download
                aria-label="Download résumé PDF"
              >
                <span className="mi">PDF</span>
                <span className="mb">
                  <span className="ml">Résumé</span>
                  <span className="mv">Download CV (PDF)</span>
                </span>
                <span className="arr" aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <aside className="reveal contact-aside">
            <div className="facts">
              <div className="fact">
                <span>Status</span>
                <span>Open to work</span>
              </div>
              <div className="fact">
                <span>Open to</span>
                <span>Freelance · Consulting · Remote</span>
              </div>
              <div className="fact">
                <span>Based in</span>
                <span>Hanoi, Vietnam</span>
              </div>
              <div className="fact">
                <span>Timezone</span>
                <span>GMT+7 · remote-friendly</span>
              </div>
              <div className="fact">
                <span>Response</span>
                <span>Within ~24 hours</span>
              </div>
              <div className="fact">
                <span>Languages</span>
                <span>VI · EN · KO</span>
              </div>
            </div>
            <p className="panel-note">
              <span className="dot"></span> Currently available for freelance & consulting (remote)
            </p>
          </aside>
        </section>
      </div>

      <div className="wrap">
        <section className="contact reveal">
          <span className="label">Prefer email?</span>
          <a className="big" href={MAILTO}>
            Say <em>hello</em> →
          </a>
          <div>
            <CopyEmail />
          </div>
        </section>
      </div>
    </main>
  );
}
