import './globals.css';
import { Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';
import Nav from '@/components/Nav';
import SiteFX from '@/components/SiteFX';
import { Analytics } from '@vercel/analytics/react';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage',
});
const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-jetbrains',
});

const SITE = 'https://tylerpham.dev';
const DESC =
  'Tien Pham Dinh (Tyler Pham) — AI Engineer in Hanoi, Vietnam. 2+ years building LLM agents, RAG systems, computer-vision pipelines (YOLO, DeepStream, face recognition) and MLOps on GCP/Kubernetes. Currently building AI agents for robots at Vin Dynamics.';

export const metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: 'Tien Pham Dinh — AI Engineer',
    template: '%s — Tien Pham Dinh',
  },
  description: DESC,
  keywords: [
    'Tien Pham Dinh',
    'Tyler Pham',
    'AI Engineer Hanoi',
    'LLM Engineer Vietnam',
    'Agentic AI',
    'RAG',
    'LangGraph',
    'Computer Vision',
    'MLOps',
    'Machine Learning Engineer Vietnam',
  ],
  authors: [{ name: 'Tien Pham Dinh', url: SITE }],
  creator: 'Tien Pham Dinh',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE,
    siteName: 'Tien Pham Dinh',
    title: 'Tien Pham Dinh — AI Engineer',
    description: 'AI agents, computer vision & MLOps. Building AI for robots at Vin Dynamics.',
    images: ['/og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tien Pham Dinh — AI Engineer',
    description: 'AI agents, computer vision & MLOps. Building AI for robots at Vin Dynamics.',
    images: ['/og.jpg'],
  },
  icons: { icon: '/favicon.svg' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  verification: { google: 'QqkkV5DPwm69q-U3xazVkoK2gHqnUsxOl_V61u2npcI' },
};

export const viewport = { themeColor: '#0b0b0c' };

const JSONLD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE}/#person`,
      name: 'Tien Pham Dinh',
      alternateName: ['Tyler Pham', 'Pham Dinh Tien'],
      jobTitle: 'AI Engineer',
      description:
        'AI Engineer with 2+ years building agentic systems, computer-vision pipelines, and the MLOps infrastructure that ships them to production. Currently building AI agents for robots at Vin Dynamics.',
      image: `${SITE}/avatar.jpg`,
      url: SITE,
      email: 'phamdt203@gmail.com',
      worksFor: { '@type': 'Organization', name: 'Vin Dynamics' },
      alumniOf: { '@type': 'CollegeOrUniversity', name: 'Hanoi University of Industry' },
      address: { '@type': 'PostalAddress', addressLocality: 'Hanoi', addressCountry: 'VN' },
      knowsLanguage: ['Vietnamese', 'English', 'Korean'],
      knowsAbout: [
        'Agentic AI',
        'Multi-agent systems',
        'Large Language Models',
        'RAG',
        'LangChain',
        'LangGraph',
        'Computer Vision',
        'YOLO',
        'NVIDIA DeepStream',
        'Face Recognition',
        'MLOps',
        'Kubernetes',
        'Google Cloud Platform',
        'Terraform',
        'vLLM',
        'Python',
      ],
      sameAs: ['https://github.com/0121ienT', 'https://www.linkedin.com/in/phamdt203/'],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      url: SITE,
      name: 'Tien Pham Dinh — AI Engineer',
      inLanguage: 'en',
      about: { '@id': `${SITE}/#person` },
      publisher: { '@id': `${SITE}/#person` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${jetbrains.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }}
        />
        <SiteFX />
        <Nav />
        {children}
        <footer>
          <div className="wrap fwrap">
            <span className="mono">© 2026 Tien Pham Dinh</span>
            <nav className="fnav">
              <Link href="/about">About</Link>
              <Link href="/work">Work</Link>
              <Link href="/solutions">Solutions</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <span className="mono">Built in Hanoi · ✦</span>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
