'use client'

import { usePathname } from 'next/navigation';

export default function ClientRenderedBackButton() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const arrow = '<--'

  return (
    <div>
      {!isHomePage && (
        <a href="/" style={{ textDecoration: 'none' }}>
          <p style={{
            fontStyle: 'italic',
            fontSize: '2rem',
            margin: 0,
            padding: 0,
            color: '#000'
          }}>
            {arrow} homepage
          </p>
        </a>
      )}
    </div>
  );
}
