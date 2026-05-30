'use client';
import { useState } from 'react';

export default function CopyEmail({ email = 'phamdt203@gmail.com' }) {
  const [ok, setOk] = useState('');
  return (
    <button
      className="emailcopy"
      type="button"
      aria-label="Copy email address to clipboard"
      onClick={() => {
        navigator.clipboard.writeText(email).then(() => {
          setOk('✓ copied');
          setTimeout(() => setOk(''), 1800);
        });
      }}
    >
      {email} <span className="ok">{ok}</span>
    </button>
  );
}
