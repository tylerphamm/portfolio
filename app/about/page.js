import Link from 'next/link';

export const metadata = {
  title: 'About',
  description:
    'AI Engineer with 2+ years building agentic AI, computer-vision, and MLOps systems. Based in Hanoi, Vietnam. Currently building AI agents for robots at Vin Dynamics.',
  alternates: { canonical: '/about' },
};

export default function About() {
  return (
    <main className="page">
      <div className="wrap">
        <div className="page-hero">
          <div className="ey">About</div>
          <h1>I build systems that work when real users show up.</h1>
          <p className="lead">
            AI Engineer with 2+ years turning research into reliable products — from multi-agent
            platforms and RAG systems to face-recognition pipelines and real-time video analytics.
          </p>
        </div>

        <section>
          <div className="about-grid">
            <div className="reveal about-text">
              <p>
                I&apos;m an AI Engineer with 2+ years turning research into{' '}
                <em>reliable products</em> — from multi-agent platforms and RAG systems to
                face-recognition pipelines and real-time video analytics.
              </p>
              <p>
                Currently building <em>AI agents for robots</em> at Vin Dynamics. I care less about
                benchmarks on paper, more about systems that work when real users show up.
              </p>
            </div>
            <div className="about-right reveal">
              <div className="portrait">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/avatar.jpg"
                  alt="Portrait of Tien Pham Dinh"
                  width="680"
                  height="680"
                  loading="lazy"
                  decoding="async"
                />
                <span className="tagpic">TIEN PHAM DINH</span>
              </div>
              <div className="facts">
                <div className="fact">
                  <span>Currently</span>
                  <span>AI Engineer @ Vin Dynamics</span>
                </div>
                <div className="fact">
                  <span>Focus</span>
                  <span>Agentic AI · Computer Vision · Robotics</span>
                </div>
                <div className="fact">
                  <span>Based in</span>
                  <span>Hanoi, Vietnam</span>
                </div>
                <div className="fact">
                  <span>LLMs &amp; Agents</span>
                  <span>LangChain · LangGraph · vLLM · LiteLLM · RAG</span>
                </div>
                <div className="fact">
                  <span>Vision</span>
                  <span>YOLO · DeepStream · ArcFace · CLIP · TensorRT</span>
                </div>
                <div className="fact">
                  <span>MLOps &amp; Cloud</span>
                  <span>GCP · Kubernetes · Docker · Terraform · Grafana</span>
                </div>
                <div className="fact">
                  <span>Backend</span>
                  <span>Python · FastAPI · Kafka · PostgreSQL · Milvus</span>
                </div>
                <div className="fact">
                  <span>Languages</span>
                  <span>VI · EN · KO</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="sec-head reveal">
            <span className="num">(01)</span>
            <h2>Capabilities</h2>
          </div>
          <div className="cap-grid">
            <div className="cap reveal">
              <h3>
                <span className="k">/01</span> LLMs &amp; Agents
              </h3>
              <ul>
                <li>LangChain</li>
                <li>LangGraph</li>
                <li>LangSmith</li>
                <li>vLLM</li>
                <li>LiteLLM</li>
                <li>RAG</li>
                <li>GoClaw</li>
              </ul>
            </div>
            <div className="cap reveal">
              <h3>
                <span className="k">/02</span> Computer Vision
              </h3>
              <ul>
                <li>YOLO</li>
                <li>DeepStream</li>
                <li>RetinaFace</li>
                <li>ArcFace</li>
                <li>CLIP</li>
                <li>ONNX / TensorRT</li>
              </ul>
            </div>
            <div className="cap reveal">
              <h3>
                <span className="k">/03</span> MLOps &amp; Cloud
              </h3>
              <ul>
                <li>GCP</li>
                <li>Kubernetes</li>
                <li>Docker</li>
                <li>Terraform</li>
                <li>GitLab CI/CD</li>
                <li>Prometheus / Grafana</li>
              </ul>
            </div>
            <div className="cap reveal">
              <h3>
                <span className="k">/04</span> Data &amp; Backend
              </h3>
              <ul>
                <li>Python</li>
                <li>FastAPI</li>
                <li>Kafka</li>
                <li>Spark</li>
                <li>PostgreSQL</li>
                <li>Milvus / Qdrant</li>
                <li>Redis</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="sec-head reveal">
            <span className="num">(02)</span>
            <h2>Experience</h2>
          </div>
          <div className="exp-row reveal">
            <div className="when">JUN 2026 — NOW</div>
            <div>
              <h3>Vin Dynamics</h3>
              <div className="role">AI Engineer</div>
              <p>
                Building AI agent systems for robots — integrating LLMs and multi-agent
                architectures for autonomous perception, reasoning, and task execution.
              </p>
            </div>
          </div>
          <div className="exp-row reveal">
            <div className="when">APR 2025 — JUN 2026</div>
            <div>
              <h3>Savvycom Solution JSC</h3>
              <div className="role">AI Team Lead / AI Engineer</div>
              <p>
                Led a small AI team across production projects: enterprise agents, eKYC, real-time
                video analytics, and multi-agent SDLC tooling.
              </p>
            </div>
          </div>
          <div className="exp-row reveal">
            <div className="when">SEP 2024 — MAR 2025</div>
            <div>
              <h3>1BitLab Technology</h3>
              <div className="role">AI Engineer</div>
              <p>
                Built RAG systems with LangChain, Streamlit and FastAPI on GCP; applied OCR
                pipelines for document understanding.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="sec-head reveal">
            <span className="num">(03)</span>
            <h2>Awards</h2>
          </div>
          <div className="awards">
            <div className="award reveal">
              <div>
                <h3>
                  Vibe Code Hackathon @ Savvycom — <b>Champion</b>
                </h3>
                <p>
                  1st place in Savvycom&apos;s internal AI / vibe-coding hackathon — shipped an
                  end-to-end product using AI-assisted development.
                </p>
              </div>
              <span className="yr">2025</span>
            </div>
            <div className="award reveal">
              <div>
                <h3>
                  HCMC AI Challenge — <b>Top 10</b>
                </h3>
                <p>
                  Multi-user Vietnamese news-video search engine built with CLIP ViT-B/32 and
                  Streamlit.
                </p>
              </div>
              <span className="yr">2024</span>
            </div>
            <div className="award reveal">
              <div>
                <h3>
                  VFOSSA Open Source Contest — <b>1st Prize</b>
                </h3>
                <p>
                  RAG-based question-answering system for legal consulting, at the university-level
                  open-source contest.
                </p>
              </div>
              <span className="yr">2024</span>
            </div>
            <div className="award reveal">
              <div>
                <h3>
                  National Student Informatics Olympiad — <b>Consolation</b>
                </h3>
                <p>
                  Represented Hanoi University of Industry; built a Langflow RAG model for healthcare
                  within SOS Connect.
                </p>
              </div>
              <span className="yr">2024</span>
            </div>
          </div>
        </section>
      </div>

      <div className="wrap">
        <div className="cta-band reveal">
          <span className="ey">Let&apos;s work together</span>
          <h2>Want to build something?</h2>
          <p>Open to freelance and remote AI engineering work.</p>
          <div className="cta">
            <Link className="btn primary" href="/contact">
              Get in touch
            </Link>
            <a className="btn ghost" href="/PhamDinhTien_AI_Engineer.pdf" download>
              Download CV ↓
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
